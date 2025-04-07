

<div align="center">
    <img src="https://res.cloudinary.com/delg5k1gs/image/upload/v1708035198/daic/n/b5121cb2-0fcd-4ffd-ba92-a744f967dd3b/monad__a_parallelized_evm_layer_1_at_hyper_speed.png" alt="Platform">
</div><br>
<h1 align="center">create-monad-dapp</h1>

A full-stack starter template with React & Hardhat to develop, deploy, and test Solidity smart contracts on the Monad network. The starter kit also includes pre-installed `web3.storage`, `tailwindcss`, `web3.js`, etc. packages.

## 📺 Quickstart

<!-- <div align="center">
  <img src="/demo.gif" />
</div> -->

## 🛠️ Installation guide

### ⌛️ create-monad-dapp command

Open up your terminal (or command prompt) and type the following command:

```sh
npx create-monad-dapp <your-dapp-name>

# cd into the directory
cd <your-dapp-name>
```

> ⚠️ If you encounter any errors during package installation, please ensure that your `node.js` and `npm` versions are up-to-date.

### 🔑 Private key

Ensure you create a `.env` file in the `root` directory. Then paste your [Metamask private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) in `.env` with the variable name `PRIVATE_KEY` as follows:

```sh
PRIVATE_KEY=1234
```

### ⚙️ Compile

Now, you can write your contracts in `./contracts/` directory, replace `Greeter.sol` with `<your-contracts>.sol` file. To write tests, go to `./test` directory and create `<your-contracts>.test.js`.

```sh
npx hardhat compile

# for testing the smart contracts
npx hardhat test
```

After successful compilation, the artifacts directory will be created in `./src/artifacts` with a JSON `/contracts/<your-contracts>.sol/<your-contracts>.json` containing ABI and Bytecode of your compiled smart contracts.

Please make the changes while [Importing](https://github.com/Kali-Decoder/create-monad-dapp/blob/main/src/App.js#L32) the JSON in `./src/app.js`.

### ⛓️ Deploy

Before deploying the smart contracts, please make sure you have a `hyperspace testnet` in your Metamask wallet with sufficient funds, follow this [quickstart](https://github.com/filecoin-project/testnet-hyperspace#quickstart) guide if you do not have one.

Also, make changes in `./scripts/deploy.js` (replace the greeter contract name with `<your-contract-name>`).

For deploying the smart contracts to Monad network, type the following command:

```sh
npx hardhat run --network monad scripts/deploy.js

# testnet: npx hardhat run --network monad scripts/deploy.js
```

Copy-paste the deployed contract address [here](https://github.com/Kali-Decoder/create-monad-dapp/blob/main/src/App.js#L32)

```sh
📜 Contract deployed to: 0x...
```

### 💻 React client

start react app

```sh
npm start
# Starting the development server...
```

Please read the [hardhat documentation](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) and [Monad Docs](https://www.monad.xyz/ecosystem) for more details.

## ⚖️ License

create-monad-dapp is licensed under the [MIT License](https://github.com/Kali-Decoder/create-monad-dapp/blob/main/LICENSE).

<hr>
Don't forget to leave a star ⭐️ ~ <a href="https://x.com/itsNikku876" target="_blank"><img src="https://img.shields.io/twitter/follow/itsNikku876?style=social" alt="twitter" /></a>