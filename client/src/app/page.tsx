"use client";
import { useDataContext } from "@/context/DataContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { useAccount } from "wagmi";
export default function Home() {
  const { address } = useAccount();
  const { latestMessage, submitMessageOnChain } = useDataContext();
  const [data, setData] = useState({
    message: "",
    sender: "",
  });
  const sendMessage = async () => {
    if (data.message && data.sender) {
      await submitMessageOnChain(data.message, data.sender);
      setData({ ...data, message: "" });
    } else {
      alert("Please enter a message");
    }
  };
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col gap-4 gap-y-4 items-center justify-center">
      <ConnectButton />
      <div className="text-xs text-blue-800 font-bold ">
        {address
          ? `Your address is ${address.slice(0, 5) + "..." + address.slice(-5)}`
          : "Please connect your wallet"}
      </div>

      <div className="mt-4">
        <input
          className="border-2 border-blue-800 rounded-md py-2 px-3"
          type="text"
          name="message"
          id="message"
          value={data.message}
          onChange={(e) =>
            setData({ ...data, message: e.target.value, sender: address })
          }
          placeholder="Enter your message"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-800 text-white rounded-md py-2 px-4 ml-2"
        >
          Send on Chain
        </button>
      </div>

      <div className="text-md text-blue-500 font-bold  mt-5">
        {latestMessage
          ? <><span className="text-black">Latest message : </span> {latestMessage}</>
          : "No message found"}
      </div>
    </div>
  );
}
