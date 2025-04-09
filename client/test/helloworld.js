const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const ethers = require("hardhat").ethers;

describe("Hello World Testing", function () {
  async function deployFixture() {
    const [owner, addr1] = await ethers.getSigners();
    console.log("Owner address:", owner.address);
    console.log("Addr1 address:", addr1.address);
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();
    return { helloWorld, owner, addr1 };
  }
  describe("Deployment", function () {
    it("Should deploy HelloWorld contract and log owner address", async function () {
      const { helloWorld, owner } = await loadFixture(deployFixture);
      console.log("Owner address:", owner.address);
    });
  });
});
