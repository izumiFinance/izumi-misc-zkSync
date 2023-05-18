# izumi-misc-zkSync

## usage

### install depends

you can use following command

```
$ yarn
```

or 

```
$ npm install
```

### deploy

here we take example of deploying SharedLiquidityToken in source file `contracts/SharedLiquidityToken.sol`  and suppose that we deploy it on zksync mainnet

##### 1. config hardhat

Open hardhat.config.ts and set `defaultNetwork` as `zkSyncMainnet` or `zkSyncTestnet`.

##### 2. config secret key

first

```
$ cp .secret.js.example .secret.js
```

then, edit `.secret.js` file and fill the `sk` field and `apiKey` field.

`sk` is your private key for deployment. `apiKey` is used if you want to verify your contract.

##### 3. deploy SharedLiquidityToken

```
$ FEE=0.08 CONTRACT_NAME=SharedLiquidityToken yarn hardhat deploy-zksync --script deploy/token/deployContractNoParam.ts
```

`FEE` is `max-gas-fee` you want to pay, you can set arbitrary value, `CONTRACT_NAME` specify the name of contract in this example `SharedLiquidityToken`.


##### 4. verify

```
$ yarn hardhat verify --network zkSyncMainnet 0x.....
```

here `0x.....` is address of deployed token.

