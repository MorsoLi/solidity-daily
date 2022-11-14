require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.ALCHEMY_APP_ID;
const PRIVATE_KEY = process.env.ACCOUNT;
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
