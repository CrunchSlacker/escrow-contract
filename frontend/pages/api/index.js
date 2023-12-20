require("dotenv").config();
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { ethers } from "ethers";
const contract = require("../../Escrow.json");

const web3 = createAlchemyWeb3(
  "wss://eth-sepolia.g.alchemy.com/v2/q3T6wEQtTDd9up1ay-S8HWYZX-vKzSlY"
);

//Get Depositor Private Key and Create new Wallet
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

  async deployContract() {
    const Escrow = new ethers.ContractFactory(
      contract.abi,
      contract.bytecode,
      this.signer
    );
    const escrow = await Escrow.connect(this.signer).deploy(
      "0x47E20B4422ce19388272b5a1c65Ae153290b798f",
      "0xEE7439ee234D4C1074EE6CF10c952d47F768Fd60"
    );
    return await escrow.waitForDeployment();
  }

  async deposit(amount) {
    await this.signer
      .sendTransaction({
        to: "0x0322c68953EEe9Ff2bf779EB1b22FcfA71De3AD9",
        value: amount,
      })
      .then(console.log);
  }

  async approve(arbiter, contract) {
    console.log(this.escrow);
    console.log(arbiter);
    console.log(contract);
    const approveTxn = await contract.connect(arbiter).approve();
    await approveTxn.wait();
    console.log("abborved");
  }
}

module.exports = { Escrow };
