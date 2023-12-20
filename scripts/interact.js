const ethers = require("ethers");
const contract = require("../artifacts/contracts/Escrow.sol/Escrow.json");

// Replace the private keys with the actual private keys
const depositorPrivateKey =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const arbiterPrivateKey =
  "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a";
const beneficiaryPrivateKey =
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

async function deployAndApprove() {
  // Connect to Ethereum node
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");

  // Create wallets using private keys
  const depositorWallet = new ethers.Wallet(depositorPrivateKey, provider);
  const arbiterWallet = new ethers.Wallet(arbiterPrivateKey, provider);
  const beneficiaryWallet = new ethers.Wallet(beneficiaryPrivateKey, provider);

  // Compile and deploy the smart contract
  const Escrow = new ethers.ContractFactory(contract.abi, contract.bytecode);

  const escrowContract = await Escrow.connect(depositorWallet).deploy(
    beneficiaryWallet.address,
    arbiterWallet.address
  );
  await escrowContract.waitForDeployment();

  console.log("Escrow contract deployed at:", escrowContract.target);

  // Display balances before transactions
  const depositorBalanceBefore = await provider.getBalance(
    depositorWallet.address
  );
  const arbiterBalanceBefore = await provider.getBalance(arbiterWallet.address);
  const beneficiaryBalanceBefore = await provider.getBalance(
    beneficiaryWallet.address
  );

  console.log(
    "Depositor balance before:",
    ethers.formatEther(depositorBalanceBefore)
  );
  console.log(
    "Arbiter balance before:",
    ethers.formatEther(arbiterBalanceBefore)
  );
  console.log(
    "Beneficiary balance before:",
    ethers.formatEther(beneficiaryBalanceBefore)
  );

  // Deposit 0.1 ETH by the depositor
  await depositorWallet.sendTransaction({to: escrowContract.target, value: ethers.parseEther("1")})

  console.log('Deposited 0.1 ETH by the depositor');

  // Display balances after deposit
  const depositorBalanceAfterDeposit = await provider.getBalance(depositorWallet);
  const arbiterBalanceAfterDeposit = await provider.getBalance(arbiterWallet);
  const beneficiaryBalanceAfterDeposit = await provider.getBalance(beneficiaryWallet);

  console.log('Depositor balance after deposit:', ethers.formatEther(depositorBalanceAfterDeposit));
  console.log('Arbiter balance after deposit:', ethers.formatEther(arbiterBalanceAfterDeposit));
  console.log('Beneficiary balance after deposit:', ethers.formatEther(beneficiaryBalanceAfterDeposit));

  // Approve by the arbiter
  const approveTransaction = await escrowContract.connect(arbiterWallet).approve();
  await approveTransaction.wait();

  console.log('Approved by the arbiter');

  // Display balances after approval
  const depositorBalanceAfterApproval = await provider.getBalance(depositorWallet);
  const arbiterBalanceAfterApproval = await provider.getBalance(arbiterWallet);
  const beneficiaryBalanceAfterApproval = await provider.getBalance(beneficiaryWallet);

  console.log('Depositor balance after approval:', ethers.formatEther(depositorBalanceAfterApproval));
  console.log('Arbiter balance after approval:', ethers.formatEther(arbiterBalanceAfterApproval));
  console.log('Beneficiary balance after approval:', ethers.formatEther(beneficiaryBalanceAfterApproval));
}

deployAndApprove();
