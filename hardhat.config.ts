import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import {apiKey} from "./.secret"

module.exports = {
  zksolc: {
    version: "1.3.8",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkSyncTestnet",
  //defaultNetwork: "zkSyncMainnet",
  networks: {
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
    }
  },
  solidity: {
    version: "0.8.18",
  },
};