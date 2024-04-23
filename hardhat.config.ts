import * as dotenv from "dotenv";

import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    MerlinTestnet: {
      url: "https://testnet-rpc.merlinchain.io",
      accounts: [process.env.SECRET_KEY || ""],
      gas: 30000000,
      gasPrice: 60000000,
    },
  },
  sourcify: {
    enabled: false,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
  // npx hardhat verify --network scrollTestnet 0x95ad51f4406bf2AF31e3A2e2d75262EE19432261 123
  etherscan: {
    apiKey: {
      MerlinTestnet: "abc",
    },
    customChains: [
      {
        network: "MerlinTestnet",
        chainId: 686868,
        urls: {
          apiURL: "https://testnet-scan-v1.merlinchain.io/api",
          browserURL: "https://testnet-scan-v1.merlinchain.io",
        },
      },
    ],
  },
};

export default config;