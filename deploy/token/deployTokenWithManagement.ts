import { Wallet, Provider, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { BigNumber } from "bignumber.js";
import { sk } from "../../.secret"

export default async function (hre: HardhatRuntimeEnvironment) {

  const tokenName = process.env.TOKEN_NAME
  const tokenSymbol = process.env.TOKEN_SYMBOL
  const tokenDecimal = process.env.TOKEN_DECIMAL
  const amount = new BigNumber(process.env.AMOUNT).times(10 ** Number(tokenDecimal)).toFixed(0)
  const fee = Number(process.env.FEE)
  console.log('name: ', tokenName)
  console.log('tokenSymbol: ', tokenSymbol)
  console.log('tokenDecimal: ', tokenDecimal)
  console.log('fee: ', fee)

  // Initialize the wallet.
  const provider = new Provider(hre.userConfig.zkSyncDeploy?.zkSyncNetwork);
  const wallet = new Wallet(sk);

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const contractFactory = await deployer.loadArtifact("SharedLiquidityToken");

  const args = [
    tokenName, tokenSymbol, tokenDecimal, amount
  ]
  console.log('args: ', args)
  const deploymentFee = await deployer.estimateDeployFee(contractFactory, args);
  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  console.log('parsed fee: ', parsedFee)
  if (Number(parsedFee) >= fee) {
    console.log('too much fee, revert!')
    return
  }
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

  const token = await deployer.deploy(contractFactory, args);

  //obtain the Constructor Arguments
  console.log("constructor args:" + token.interface.encodeDeploy(args));

  // Show the contract info.
  const contractAddress = token.address;
  console.log(`${contractFactory.contractName} was deployed to ${contractAddress}`);
}
