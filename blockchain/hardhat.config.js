require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: '.env' });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.QUICK_NODE_GUERLI_RPC,
      accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`],
    },
  },
};
