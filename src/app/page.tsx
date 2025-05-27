"use client";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { ConnectButton } from "@/components/ConnectWallet";
import { contractAddress, contractAbi } from "@/constant";
import { Button } from "@/components/ui/button";
export default function Home() {
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const { address } = useAccount();
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    const loadContract = async () => {
      if (typeof window.ethereum !== "undefined") {
        const browserProvider = new ethers.BrowserProvider(window.ethereum);
        const signer = await browserProvider.getSigner();

        const NFTContract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setContract(NFTContract);
        console.log("Contract loaded:", NFTContract);
      }
    };
    loadContract();
  }, []);

  const handleMintButton = async () => {
    try {
      if (!contract) {
        console.error("Contract is not loaded");
        return;
      }
      if (!address) {
        console.error("Wallet is not connected");
        return;
      }
      const mintTx = await contract.mintNFT(address, {
        from: address,
        value: ethers.parseEther("1"),
      });
      await mintTx.wait();
      console.log("NFT Minted Successfully:", mintTx);
      alert("NFT Minted Successfully!");
      setMessage(`https://testnet.monadexplorer.com/tx/${mintTx.hash}`);
    } catch (error) {
      console.log(error, " Error while minting NFT");
    }
  };
  return (
    <>
      <div className="container mx-auto flex-col border-8 rounded-md border-black h-[100vh] flex items-center justify-center">
        <ConnectButton />
        <Button onClick={handleMintButton} className="mt-4">
          Mint
        </Button>
        {message && (
          <div className="mt-4">
            <p className="text-lg">Transaction Hash:</p>
            <a href={message} className="text-green-400">Transaction Completed</a>
          </div>
        )}
      </div>
    </>
  );
}
