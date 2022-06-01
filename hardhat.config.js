require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const projectId = 'c695f583e2df43eaacd2d33ad9644143';

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: ["<your privateKey>"],
    },
   
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
