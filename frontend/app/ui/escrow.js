require("dotenv").config();
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { ethers } from "ethers";
const contract = require("../../Escrow.json");

const web3 = createAlchemyWeb3(
  "wss://eth-sepolia.g.alchemy.com/v2/q3T6wEQtTDd9up1ay-S8HWYZX-vKzSlY"
);

class Escrow {
  constructor(_provider, _signer) {
    this.provider = _provider;
    this.signer = _signer;
  }

  async getBalance() {
    const balance = await web3.eth
      .getBalance(this.signer.address)
      .then((balance) => {
        return ethers.formatEther(balance);
      });
    return balance;
  }

  async deployContract(beneficiary, arbiter) {
    const Escrow = new ethers.ContractFactory(
      contract.abi,
      contract.bytecode,
      this.signer
    );
    const escrow = await Escrow.connect(this.signer).deploy(
      beneficiary,
      arbiter
    );
    return await escrow.waitForDeployment();
  }

  async deposit(amount, contractAddress) {
    await this.signer
      .sendTransaction({
        to: contractAddress,
        value: amount,
      })
      .then(console.log);
  }

  async approve(arbiter, contract) {
    const approveTxn = await contract.connect(arbiter).approve();
    await approveTxn.wait();
  }
}

export default Escrow;
