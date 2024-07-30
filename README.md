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


##### 3. compile
```
$ yarn hardhat compile
```
or
```
$ npx hardhat compile
```

##### 4. deploy SharedLiquidityToken

```
$ FEE=0.08 TOKEN_NAME='token name' TOKEN_SYMBOL='token Symbol' TOKEN_DECIMAL=18 AMOUNT=1000000000 yarn hardhat deploy-zksync --script deploy/token/deployTokenWithManagement.ts
```

`FEE` is `max-gas-fee` you want to pay, you can set arbitrary value, `CONTRACT_NAME` specify the name of contract in this example `SharedLiquidityToken`.


##### 5. verify

first, save the constructor args into a js file, we can name it arbitrarily, suppose we name it as 'args.js'

in this example, the content of 'args.js' is following

```
module.exports=[
    'token name',
    'token Symbol',
    18,
    '1000000000000000000000000000', // 1000000000 * 10**18
]
```

then use following command to verify

```
$ yarn hardhat verify --network zkSyncMainnet --constructor-args args.js 0x.....
```

here `0x.....` is address of deployed token.

