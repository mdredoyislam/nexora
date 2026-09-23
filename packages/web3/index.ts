import { http, createConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains'
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors'

// Define the projectId for WalletConnect (this should be in env vars eventually)
export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'dummy-project-id'

export const wagmiConfig = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    // coinbaseWallet({ appName: 'NEXORA' }), // Disabled temporarily due to Next 16 webpack resolution issue
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
})
