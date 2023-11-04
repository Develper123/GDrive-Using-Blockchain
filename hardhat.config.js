require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/UVamw4fuyK9fz2v5pGIjfKo1rCiZT_Ym",
      accounts:["6f53b8d75b1cacc22ca3e13c93e897073895fbbe5ab13075befdca276dfb5655"],

    },
  },
};
