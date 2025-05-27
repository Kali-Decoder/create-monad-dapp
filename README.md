<div align="center">
    <img src="https://res.cloudinary.com/delg5k1gs/image/upload/v1708035198/daic/n/b5121cb2-0fcd-4ffd-ba92-a744f967dd3b/monad__a_parallelized_evm_layer_1_at_hyper_speed.png" alt="Platform">
</div><br>

<h1 align="center">create-monad-dapp ⚡️</h1>

A full-stack starter template built with **React**, **Hardhat**, and **Next.js** to develop, deploy, and test Solidity smart contracts on the **Monad** network. It’s tailored for speed and hackathon productivity – zero configuration needed.

---

## 📦 Features

- ✅ **Hardhat for Monad**: Pre-configured for Monad’s parallel EVM Layer 1.
- 🎛️ **Wagmi**: React Hooks for seamless blockchain interaction.
- 🌈 **RainbowKit**: Easy-to-use wallet connector.
- 🧬 **Privy**: Secure user data management.
- ⚡ **TailwindCSS**: Utility-first CSS framework.
- 🧱 **Next.js**: Optimized for production-ready apps.
- 🔗 **DataContext Integration**: Includes a `DataContext` file with Ether.js contract interaction functions for streamlined blockchain communication.

---

## 🚀 Quickstart

```sh
npx create-monad-dapp <your-dapp-name>
cd <your-dapp-name>
pnpm install # or yarn install
npx hardhat compile # to compile contracts
npx hardhat test # to run tests
npx hardhat run scripts/deploy.js --network monad  # to deploy contracts
pnpm run dev # or yarn start # to start the React app
```

---

## 🔧 Environment Setup

Create a `.env` file in the root directory and add:

```env
PRIVATE_KEY=
NEXT_PUBLIC_PROJECT_ID= // From Reown SDK 
```

> 🔐 Use your Metamask private key and respective API IDs.

---

## 🛠️ Development

### 🔨 Compile Contracts

```sh
npx hardhat compile
```

### 🧪 Run Tests

```sh
npx hardhat test
```

### ✍️ Write Contracts

- Place them in the `./contracts/` folder
- Example: Replace `Greeter.sol` with your custom `.sol` file

### ✍️ Write Tests

- Place them in the `./test/` folder
- Format: `<contract-name>.test.js`

---

## ⛓️ Deploy to Monad Testnet

Make sure you're connected to the Monad testnet and have funds.

Update `scripts/deploy.js` with your contract name and run:

```sh
npx hardhat run --network monad scripts/deploy.js
```

> 📜 Contract deployed to: `0x...` – paste this address into `src/App.js`

---

## 💻 Start the React App

```sh
pnpm run dev # or yarn start
```

Visit [http://localhost:3000](http://localhost:3000) to see your app live.

---

## 📂 File Structure

```
create-monad-dapp/
├── contracts/           # Solidity contracts
├── test/                # Hardhat test files
├── scripts/             # Deployment scripts
├── src/                 # Frontend in Next.js App Router
│   ├── app/             # App Router entry point
│   ├── components/      # Reusable React components
│   ├── styles/          # CSS and Tailwind styles
│   ├── App.js           # Main frontend app
│   ├── artifacts/       # ABI and Bytecode
│   └── ...
├── .env                 # Environment variables
├── hardhat.config.js    # Hardhat config
├── tailwind.config.js   # Tailwind setup
└── README.md            # You're here!

---

## 🔗 Resources

- [Monad Documentation](https://www.monad.xyz/ecosystem)
- [Hardhat Docs](https://hardhat.org/hardhat-runner/docs)
- [RainbowKit](https://www.rainbowkit.com)
- [Wagmi](https://wagmi.sh)

---

## 🤝 Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for details.

---

## ⚖️ License

Licensed under the [MIT License](https://github.com/Kali-Decoder/create-monad-dapp/blob/main/LICENSE).

---

## ⭐️ Show Some Love

If this starter kit helped you, drop a star ⭐️ and connect with me:

<a href="https://x.com/itsNikku876" target="_blank">
  <img src="https://img.shields.io/twitter/follow/itsNikku876?style=social" alt="twitter" />
</a>
