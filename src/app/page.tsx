"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
export default function Home() {

  const { address } = useAccount();

  return (
    <div className="flex h-[100vh] w-[100vw] gap-4 gap-y-4 items-center justify-center">
      <ConnectButton /> Hello WOrld {address}
    </div>
  );
}
