import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync-node";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

const config: HardhatUserConfig = {
  defaultNetwork: "zklinkNova",
  networks: {
    zklinkNovaTestnet: {
      url: "https://goerli.rpc.zklink.io",
      ethNetwork: "goerli",
      zksync: true,
      // verifyURL: "https://goerli.explorer.zklink.io/contract_verification",
    },
    zklinkNova: {
      url: 'https://rpc.zklink.io',
      ethNetwork: 'mainnet',
      zksync: true,
      verifyURL: 'https://explorer.zklink.io/contract_verification',
    },
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "goerli", // RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
    zkSyncMainnet: {
      url: "https://zksync2-mainnet.zksync.io",
      ethNetwork: "https://mainnet.infura.io/v3/",
      zksync: true,
      verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    },
    hardhat: {
      zksync: true,
    },
  },
  etherscan: {
    apiKey: ""
  },
  zksolc: {
    version: "1.3.22",
    settings: {
      // find all available options in the official documentation
      // https://era.zksync.io/docs/tools/hardhat/hardhat-zksync-solc.html#configuration
    },
  },
  solidity: {
    version: "0.8.16",
  },
};

export default config;
