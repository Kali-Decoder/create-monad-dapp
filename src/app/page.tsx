"use client";
import { ConnectButton } from "@/components/ConnectWallet";
import { useState } from "react";
import { useAccount } from "wagmi";
export default function Home() {
  const { address } = useAccount();
  return (
    <>
      <div className="container mx-auto border-4 border-black h-[100vh] flex items-center justify-center">
        <ConnectButton />
      </div>
    </>
  );
}
