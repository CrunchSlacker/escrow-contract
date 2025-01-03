# Escrow Contract

This project implements an Ethereum-based escrow smart contract using Solidity. It facilitates secure transactions between a buyer, seller, and arbiter. The contract currently supports the Sepolia testnet.

## Features
- **Escrow transaction flow**: Buyer deposits funds, seller delivers goods, arbiter releases funds.
- **User interaction**: Requires MetaMask and an Ethereum wallet.
- **Testnet**: Currently supports Sepolia testnet.

## Setup Requirements

### 1. MetaMask Wallet
- Install MetaMask and set up your wallet to interact with the Ethereum network.

### 2. Ethereum Wallet
- Connect your Ethereum wallet to the **Sepolia testnet** for testing (or the mainnet for actual deployment).

### 3. Get Sepolia Testnet ETH
- Obtain testnet ETH from a faucet for deploying the contract on Sepolia.

### 4. Arbiter and Beneficiary Addresses
- You need the addresses of both the **Arbiter** and the **Beneficiary** (the person receiving the funds).

### 5. Website Setup
- Visit the [Escrow Contract App](https://escrow-contract-amber.vercel.app).
- Enter the **Arbiter** and **Beneficiary** addresses.
- Deposit funds (use testnet ETH for testing).
- Click “Deploy Contract” to deploy the contract.

### 6. Mainnet Deployment (for production)
- After testing on Sepolia, deploy the contract to the **mainnet** for live transactions.

## Future Features
- Arbiter/voter fund release mechanism
- User-friendly UI
- Contract history tracking
- Feature to view contract status for the beneficiary
- Stalemate resolution system

## License
MIT License
