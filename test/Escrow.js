const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Escrow", function () {
  async function deployContractAndSetVariables() {
    const [depositor, beneficiary, arbiter, other] = await ethers.getSigners();
    const amount = ethers.parseUnits("0.1", "ether");

    const Escrow = await ethers.deployContract(
      "Escrow",
      [beneficiary.address, arbiter.address],
      { signer: depositor, value: amount }
    );

    return { Escrow, depositor, beneficiary, arbiter, other, amount };
  }
  it("should set each address correctly", async function () {
    const { Escrow, depositor, beneficiary, arbiter } = await loadFixture(
      deployContractAndSetVariables
    );

    expect(await Escrow.beneficiary()).to.equal(beneficiary.address);
    expect(await Escrow.arbiter()).to.equal(arbiter.address);
    expect(await Escrow.depositor()).to.equal(depositor.address);
  });

  it("should set the balance to msg.value (0.1 eth)", async function () {
    const { Escrow, amount } = await loadFixture(deployContractAndSetVariables);

    expect(await Escrow.balance()).to.equal(amount);
  });

  describe("Approve Function", function () {
    it("should revert if arbiter did not call the function", async function () {
      const { Escrow, depositor, beneficiary, other } = await loadFixture(
        deployContractAndSetVariables
      );

      await expect(Escrow.connect(depositor).approve()).to.be.revertedWith(
        "You're not the arbiter"
      );
      await expect(Escrow.connect(beneficiary).approve()).to.be.revertedWith(
        "You're not the arbiter"
      );
      await expect(Escrow.connect(other).approve()).to.be.revertedWith(
        "You're not the arbiter"
      );
    });
    it("should emit an Approved event with correct amount (0.1 eth) when arbiter calls", async function () {
      const { Escrow, arbiter, other, amount } = await loadFixture(
        deployContractAndSetVariables
      );

      await expect(Escrow.connect(arbiter).approve())
        .to.emit(Escrow, "Approved")
        .withArgs(amount);
      await expect(Escrow.connect(other).approve()).to.be.revertedWith(
        "You're not the arbiter"
      );
    });
    it("should send all eth to beneficiary's address", async function () {
      const { Escrow, arbiter, beneficiary, amount } = await loadFixture(
        deployContractAndSetVariables
      );

      await expect(Escrow.connect(arbiter).approve()).to.changeEtherBalance(
        beneficiary,
        `+${amount}`
      );
      expect(await Escrow.balance()).to.equal(0);
    });
  });
});
