"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { useAccount } from "wagmi";
import { useEthersSigner } from "@/utils/signer";
import { ethers, Contract } from "ethers";
import {contractAddress,contractAbi} from "@/constant/index";
interface DataContextProps {
  latestMessage: string | undefined;
  submitMessageOnChain: (message: string, sender: string) => Promise<void>;
}

interface DataContextProviderProps {
  children: ReactNode;
}

// Context initialization
const DataContext = React.createContext<DataContextProps | undefined>(
  undefined
);

const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}) => {
  const { chain } = useAccount();
  const [activeChain, setActiveChainId] = useState<number | undefined>(
    chain?.id
  );
  const { address } = useAccount();
  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);

  const signer = useEthersSigner({ chainId: activeChain });
  const [latestMessage, setLatestMessage] = useState<string | undefined>("");
  const getContractInstance = async (
    _contractAddress: string,
    _contractAbi: any
  ): Promise<Contract | undefined> => {
    try {
      const contractInstance = new ethers.Contract(
        _contractAddress,
        _contractAbi,
        signer
      );

      return contractInstance;
    } catch (error) {
      console.log("Error in deploying contract");
      return undefined;
    }
  };


  const submitMessageOnChain = async (
    message: string,
    sender: string
  ) => {
    const contractInstance = await getContractInstance(
      contractAddress,
      contractAbi
    );
    if (!contractInstance) return;

    try {
      const tx = await contractInstance.setGreeting(message,{
        from:address
      });
      await tx.wait();
      await getMessageFromChain();
      console.log("Transaction successful:", tx);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  }
  const getMessageFromChain = async () => {
    const contractInstance = await getContractInstance(
      contractAddress,
      contractAbi
    );
    if (!contractInstance) return;

    try {
      const message = await contractInstance.getGreeting();
      console.log("Message from chain:", message);
      setLatestMessage(message);
      return message;
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  }



  useEffect(() => {
    if(!signer) return;
    const fetchMessage = async () => {
      await getMessageFromChain();
    };
    fetchMessage();
  }, [signer]);


  return <DataContext.Provider value={{
    latestMessage,
    submitMessageOnChain
  }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export default DataContextProvider;
