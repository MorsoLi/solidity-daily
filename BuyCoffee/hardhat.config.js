require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

// open node_modules/@nomiclabs/hardhat-etherscan/dist/src/solc/version.js 
// replace COMPILERS_LIST_URL = https://solc-bin.ethereum.org/bin/list.json
// COMPILERS_LIST_URL = http://localhost:443/list.json

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.ALCHEMY_GOERLI_URL;
const MUMBAI_URL = process.env.ALCHEMY_MUMBAI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY
    },   
  }
};
