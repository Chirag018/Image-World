require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync('.secret').toString()
const projectId = 'c695f583e2df43eaacd2d33ad9644143';

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/plHg9aNM4D0JqA0uTGx6sZblE-Qe6vmr',
      accounts: [privateKey],
    },
    // ropsten: {
    //   url: "https://ropsten.infura.io/v3/c695f583e2df43eaacd2d33ad9644143",
    //   accounts: ["9643cd7e54abc73c2faafa658c78b01323cfa87c7aa29eef40732270c72c74a0"]
    // },
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
