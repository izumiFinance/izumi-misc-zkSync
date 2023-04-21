import { Wallet, Provider, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

import { sk } from "../.secret"

export default async function (hre: HardhatRuntimeEnvironment) {

  const fee = process.env.FEE
  const contractName = process.env.CONTRACT_NAME
  console.log('fee: ', fee)
  console.log('contractName: ', contractName)

  // Initialize the wallet.
  const wallet = new Wallet(sk);

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const contractFactory = await deployer.loadArtifact(contractName);

  const deploymentFee = await deployer.estimateDeployFee(contractFactory, []);
  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  if (Number(parsedFee) >= Number(fee)) {
    console.log('too much fee ' + parsedFee + '>' + fee + ', revert!')
    return
  }
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

  const contract = await deployer.deploy(contractFactory, []);

  //obtain the Constructor Arguments
  console.log("constructor args:" + contract.interface.encodeDeploy([]));

  // Show the contract info.
  const contractAddress = contract.address;
  console.log(`${contractFactory.contractName} was deployed to ${contractAddress}`);
}