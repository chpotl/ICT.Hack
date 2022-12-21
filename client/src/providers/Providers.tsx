import React, { FC } from "react"
import { ChildrenType } from "../types/ChildrenType"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import "@rainbow-me/rainbowkit/styles.css"
import { CookiesProvider } from "react-cookie"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"
// import { ErrorBoundary } from "react-error-boundary"

export const Providers: FC<ChildrenType> = ({ children }) => {
  const queryClient = new QueryClient()

  const { chains, provider } = configureChains(
    [chain.mainnet, chain.goerli],
    [
      infuraProvider({ apiKey: "79efcae20ff140e1a9e5be75a8eea762" }),
      publicProvider(),
    ]
  )

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  })

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  })

  return (
    // <ErrorBoundary fallback={<h1>oops...</h1>}>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
        </WagmiConfig>
        <ReactQueryDevtools initialIsOpen={false} />
      </CookiesProvider>
    </QueryClientProvider>
    // </ErrorBoundary>
  )
}
