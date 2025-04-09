"use client";
import { WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import DataContextProvider from "@/context/DataContext";
import { wagmiConfig } from "@/utils/wallet-utils";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <DataContextProvider>{children}</DataContextProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiConfig>
    </>
  );
};

export default Providers;
