require("@nomicfoundation/hardhat-verify")
require("@nomicfoundation/hardhat-toolbox"); 
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    coston: {
      url: 'https://coston-api.flare.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
    coston2: {
      url: 'https://coston2-api.flare.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      coston: "no-api-key-required",
      coston2: "no-api-key-required",
    },
    customChains: [
      {
        network: 'coston',
        chainId: 16,
        urls: {
          apiURL: 'https://coston-explorer.flare.network/api',
          browserURL: 'https://coston-explorer.flare.network/',
        },
      },
      {
        network: 'coston2',
        chainId: 114,
        urls: {
          apiURL: 'https://coston2-explorer.flare.network/api',
          browserURL: 'https://coston2-explorer.flare.network/',
        },
      },
    ],
  },
  solidity: "0.8.24",
};
