const hre = require("hardhat");

async function main() {
  console.log("Deploying contracts...");
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  // const helloWorld = await HelloWorld.deploy("Hello, World!");

  // await helloWorld.deployed();

  // console.log("Deployed HelloWorld contract at:", helloWorld.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
