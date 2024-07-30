import { deployContract } from "./utils";

export default async function () {
    const contractArtifactName = "Airdrop";
    const contract = await deployContract(contractArtifactName, []);
}
