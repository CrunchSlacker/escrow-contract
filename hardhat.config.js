require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { API_URL, PRIVATE_KEY, ETHERSCAN_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
      mining: {
        auto: false,
        interval: 1000,
      },
    },
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
  sourcify: {
    enabled: true,
  },
};
