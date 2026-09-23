export interface TokenBalance {
  symbol: string;
  name: string;
  balance: string;
  usdValue: number;
  change24h: number;
  logoUrl?: string;
}

export interface PortfolioData {
  totalUsd: number;
  change24h: number;
  tokens: TokenBalance[];
}

export const getPortfolioData = async (address: string): Promise<PortfolioData> => {
  // TODO: Replace with actual Moralis/Alchemy API call
  // Example: await fetch(`https://deep-index.moralis.io/api/v2.2/wallets/${address}/tokens?chain=eth`, { headers: { "X-API-Key": process.env.MORALIS_API_KEY }})
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalUsd: 16200.00,
        change24h: 5.24,
        tokens: [
          {
            symbol: "ETH",
            name: "Ethereum",
            balance: "2.45",
            usdValue: 7322.40,
            change24h: 3.2,
          },
          {
            symbol: "USDC",
            name: "USD Coin",
            balance: "4941.00",
            usdValue: 4941.00,
            change24h: 0.01,
          },
          {
            symbol: "MATIC",
            name: "Polygon",
            balance: "4500.00",
            usdValue: 2478.60,
            change24h: -1.2,
          },
          {
            symbol: "ARB",
            name: "Arbitrum",
            balance: "1250.00",
            usdValue: 1458.00,
            change24h: 8.5,
          }
        ]
      });
    }, 500); // Simulate network latency
  });
};
