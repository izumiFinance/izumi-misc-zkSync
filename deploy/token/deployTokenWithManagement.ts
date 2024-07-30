
import { BigNumber } from "bignumber.js";
import { deployContract } from "../utils";

export default async function () {
    const contractArtifactName = "SharedLiquidityToken";
    const tokenName = process.env.TOKEN_NAME
    const tokenSymbol = process.env.TOKEN_SYMBOL
    const tokenDecimal = process.env.TOKEN_DECIMAL
    const amount = new BigNumber(process.env.AMOUNT as string).times(10 ** Number(tokenDecimal)).toFixed(0)
    console.log('name: ', tokenName)
    console.log('tokenSymbol: ', tokenSymbol)
    console.log('tokenDecimal: ', tokenDecimal)

    const args = [
      tokenName, tokenSymbol, tokenDecimal, amount
    ]
    const contract = await deployContract(contractArtifactName, args);
}
