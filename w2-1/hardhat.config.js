require("@nomicfoundation/hardhat-toolbox");

let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const mnemonic = process.env.MNEMONIC
const scankey = process.env.POLYGONSCAN_API_KEY
const PRIVATE_KEY = process.env.PRIVATEKEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    hardhat: {
      chainId: 31337,
      gas: 12000000,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: {
        mnemonic: mnemonic,
      },
      chainId: 80001,
    },
  },

  etherscan: {
    apiKey: {
      polygonMumbai: scankey
    }
  },
};
