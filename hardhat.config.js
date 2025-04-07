require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ACCOUNTS = process.env.PRIVATE_KEY ? [`${process.env.PRIVATE_KEY}`] : [];
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  gasReporter: {
    enabled: false,
  },
  networks: {
    hardhat: { chainId: 31337 },
    monadTestnet: {
      url: "https://testnet-rpc.monad.xyz",
      chainId: 10143,
      accounts: ACCOUNTS,
    },
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://sourcify-api-monad.blockvision.org",
    browserUrl: "https://testnet.monadexplorer.com",
  },
  etherscan: {
    enabled: false,
  },
  solidity: {
    version: "0.8.28",
    settings: {
      metadata: {
        bytecodeHash: "none", // disable ipfs
        useLiteralContent: true, // use source code
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
