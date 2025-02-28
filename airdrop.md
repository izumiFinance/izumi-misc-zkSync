# Airdrop

### clone and build


```
$ git clone git@github.com:izumiFinance/izumi-misc-zkSync.git
$ cd izumi-misc-zkSync
$ yarn
```

.env

```
$ touch .env
```

write following content.

```
WALLET_PRIVATE_KEY=${private key without '0x'}
```

compile:

```
$ yarn hardhat compile
```

### deploy Airdrop

assume we are deploying on `zkSyncSepoliaTestnet`.

first, edit `hardhat.config.ts` and update `defaultNetwork` as `zkSyncSepoliaTestnet`.

second, deploy via following command:
```
$ yarn hardhat deploy-zksync --script deployAirdrop.ts
```

and we can get output like following

```
...

"Airdrop" was successfully deployed:
 - Contract address: 0xd1B4D87f69e0B7bd86A6f9525E25C9ccBaD008Ee
 - Contract source: contracts/airdrop/Airdrop.sol:Airdrop
 - Encoded constructor arguments: 0x

...
Successfully verified contract ...
...
```

in this example, the deployed contract is `0xd1B4D87f69e0B7bd86A6f9525E25C9ccBaD008Ee`, and this script will verify the contract after deployment.

**Notice:**, we should transfer contract ownership to admin's address, we can do that on `zksync-explorer` or via `admin-tool`.