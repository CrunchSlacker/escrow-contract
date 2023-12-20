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

    expect(await ethers.provider.getBalance(Escrow.getAddress())).to.equal(
      amount
    );
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
    it("should empty contract balance after approval", async function () {
      const { Escrow, arbiter } = await loadFixture(
        deployContractAndSetVariables
      );

      const approveTxn = await Escrow.connect(arbiter).approve();
      await approveTxn.wait();

      const contractBalance = await ethers.provider.getBalance(
        Escrow.getAddress()
      );

      expect(contractBalance).to.equal(0);
    });
    it("should send everything to beneficiary after approval", async function () {
      const { Escrow, arbiter, beneficiary, amount } = await loadFixture(
        deployContractAndSetVariables
      );

      const initBalance = await ethers.provider.getBalance(beneficiary.address);
      const contractBalance = await ethers.provider.getBalance(
        Escrow.getAddress()
      );

      const approveTxn = await Escrow.connect(arbiter).approve();
      await approveTxn.wait();

      const finalBalance = await ethers.provider.getBalance(
        beneficiary.address
      );

      expect(finalBalance - initBalance).to.equal(amount);
      expect(finalBalance - initBalance).to.equal(contractBalance);
    });
  });

  describe("Receive Function", function () {
    it("Should receive any sent ether from the depositor", async function () {
      const { Escrow, depositor, amount } = await loadFixture(
        deployContractAndSetVariables
      );

      const initContractBalance = await ethers.provider.getBalance(
        Escrow.getAddress()
      );

      const txn = await depositor.sendTransaction({
        to: Escrow.getAddress(),
        value: amount,
      });
      await txn.wait();

      const finalContractBalance = await ethers.provider.getBalance(
        Escrow.getAddress()
      );

      expect(finalContractBalance - initContractBalance).to.equal(amount);
    });
    it("Should revert any transaction that is not sent from the depositor", async function () {
      const { Escrow, other, amount } = await loadFixture(
        deployContractAndSetVariables
      );

      await expect(
        other.sendTransaction({
          to: Escrow.getAddress(),
          value: amount,
        })
      ).to.be.revertedWith("You're not the depositor, transaction reverted");
    });
  });
});
