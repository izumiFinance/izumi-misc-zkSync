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
$ touch .env
```

then, add `WALLET_PRIVATE_KEY=${your pk}` to `.env` file

##### 3. compile
```
$ yarn hardhat compile
```
or
```
$ npx hardhat compile
```

##### 4. deploy SharedLiquidityToken

Fill `TOKEN_NAME` `TOKEN_SYMBOL` `TOKEN_DECIMAL` `AMOUNT` in the file `.env` mentioned above, and then

```
$ yarn hardhat deploy-zksync --script token/deployTokenWithManagement.ts
```


##### 5. verify


Usually after deployment in step 4, the verification is also completed.