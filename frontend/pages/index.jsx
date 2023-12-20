require("dotenv").config();

import { Escrow } from "./api/index";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function HomePage() {
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState();
  const [escrow, setEscrow] = useState();
  const [contract, setContract] = useState();

  useEffect(() => {
    async function checkAccounts() {
      const account = await window.ethereum.request({ method: "eth_accounts" });
      if (account) {
        setAccounts(account);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        setEscrow(new Escrow(provider, signer));
      }
    }
    checkAccounts();

    console.log(contract)

    window.ethereum.on("accountsChanged", () => {
      console.log("changedAccounts");
    });
  }, []);

  async function getAccounts() {
    const accountsArray = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccounts(accountsArray);
  }

  async function getBalance() {
    if (escrow) {
      await escrow.getBalance().then((bal) => setBalance(bal));
    }
  }

  async function approve() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    escrow.approve(signer, contract);
  }
  getBalance();

  return (
    <div>
      {accounts.length == 0 ? (
        <button onClick={getAccounts}>Connect</button>
      ) : (
        <h1>Welcome {accounts[0]}</h1>
      )}
      <button
        onClick={() => {
          escrow.deployContract().then((response) => {
            console.log(response);
            setContract(response);
          });
        }}
      >
        Deploy Contract
      </button>
      <h1>Balance: {balance} eth</h1>
      <button onClick={() => escrow.deposit(ethers.parseEther("0.001"))}>
        Deposit
      </button>
      <button onClick={() => approve()}>Approve</button>
    </div>
  );
}

// export async function getServerSideProps() {
//   try {
//     const balance = await getBalance();
//     return {
//       props: {
//         balance,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching:", error);
//     return {
//       props: {
//         balance: null,
//       },
//     };
//   }
// }

export default HomePage;
