"use client";
require("dotenv").config();

import Escrow from "./ui/escrow";
import React, { useEffect, useState } from "react";
import DeployContractForm from "./ui/deployContract";
import { ethers } from "ethers";
import ContractList from "./ui/existingContracts";

function HomePage() {
  const [accounts, setAccounts] = useState([]);
  const [escrow, setEscrow] = useState();
  const [contracts, setContracts] = useState();

  useEffect(() => {
    window.ethereum.on("accountsChanged", handleAccountsChanged);

    accounts.length == 0 && checkConnection();
    accounts.length !== 0 && fetchAndUpdate(accounts);

    return () =>
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
  }, [accounts]);

  //Checks if user is connected to Metamask
  async function checkConnection() {
    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setAccounts(accounts);
        createEscrow();
      } else {
        setAccounts([]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //Updates accounts state and initiates a new Escrow Contract with their provider and signer when user changes account in Metamask
  const handleAccountsChanged = async () => {
    const account = await ethereum.request({ method: "eth_accounts" });
    setAccounts(account);
    createEscrow();
  };

  //Updates accounts state and fetches data from DB when user connects to Metamask
  async function handleConnect() {
    try {
      const accountsConnected = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accountsConnected);
      fetchAndUpdate(accountsConnected);
    } catch (error) {
      console.error(error);
    }
  }

  //Fetches data from DB and updates contracts state
  async function fetchAndUpdate(accountArray) {
    //Find Depositor in db
    const response = await fetch("/api/find-depositor", {
      method: "POST",
      body: JSON.stringify(accountArray[0]),
    });
    const data = await response.json();

    // // If found, set existing contracts
    if (data) {
      setContracts(data.contracts);
    }

    //Not found, create new depositor in db
    if (data == null) {
      const document = {
        depositor: accountArray[0],
        contracts: [],
      };
      await fetch("/api/add-depositor", {
        method: "POST",
        body: JSON.stringify(document),
      });
    }
  }

  //Initiates a new Escrow Contract with the provider and signer of the user
  async function createEscrow() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    setEscrow(new Escrow(provider, signer));
  }

  //Deploys Escrow Contract
  async function handleContractDeployment(escrowContract, arbiter, beneficiary) {
    const document = {
      depositor: accounts[0],
      contractInformation: {contract: escrowContract, arbiter: arbiter, beneficiary: beneficiary}
    };
    console.log(document);
    console.log(JSON.stringify(document));
    await fetch("/api/add-contract", {
      method: "POST",
      body: JSON.stringify(document),
    });
    fetchAndUpdate(accounts);
  }

  return (
    <div className="home-container">
      {accounts.length === 0 ? (
        <button className="connect-button" onClick={handleConnect}>
          Connect
        </button>
      ) : (
        <h1 className="welcome-message">Welcome {accounts[0]}</h1>
      )}
      <DeployContractForm
        escrow={escrow}
        onDeployed={handleContractDeployment}
      />
      {contracts ? <ContractList contracts={contracts} depositor={accounts[0]}/> : <h3>Loading...</h3>}
    </div>
  );
}

export default HomePage;
