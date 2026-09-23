"use client";

import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { getPortfolioData } from "@/lib/services/portfolio";
import { Card } from "@/components/ui/Card";

export function PortfolioList() {
  const { address, isConnected } = useAccount();

  const { data: portfolio, isLoading, error } = useQuery({
    queryKey: ["portfolio", address],
    queryFn: () => getPortfolioData(address as string),
    enabled: isConnected && !!address,
  });

  if (!isConnected) {
    return (
      <Card className="flex h-32 items-center justify-center text-muted-foreground border-dashed">
        Please connect your wallet to view your portfolio.
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="flex h-32 items-center justify-center text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <div className="h-6 w-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <span className="text-sm">Loading portfolio data...</span>
        </div>
      </Card>
    );
  }

  if (error || !portfolio) {
    return (
      <Card className="flex h-32 items-center justify-center text-destructive border-destructive/20 bg-destructive/5">
        Failed to load portfolio data.
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-foreground">
          <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium">Asset</th>
              <th scope="col" className="px-6 py-4 font-medium">Balance</th>
              <th scope="col" className="px-6 py-4 font-medium">Value (USD)</th>
              <th scope="col" className="px-6 py-4 text-right font-medium">24h Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {portfolio.tokens.map((token) => (
              <tr key={token.symbol} className="hover:bg-accent/50 transition-colors">
                <td className="px-6 py-4 font-medium flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center font-bold text-sm text-foreground">
                    {token.symbol[0]}
                  </div>
                  <div>
                    <div className="text-foreground">{token.name}</div>
                    <div className="text-xs text-muted-foreground">{token.symbol}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-foreground">
                  {token.balance}
                </td>
                <td className="px-6 py-4 text-foreground font-medium">
                  ${token.usdValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className={`px-6 py-4 text-right font-medium ${token.change24h >= 0 ? "text-success" : "text-destructive"}`}>
                  <div className="flex items-center justify-end gap-1">
                    {token.change24h >= 0 ? (
                      <span className="text-xs">▲</span>
                    ) : (
                      <span className="text-xs">▼</span>
                    )}
                    {Math.abs(token.change24h)}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
