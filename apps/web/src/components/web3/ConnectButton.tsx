"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-colors"
      >
        {address?.slice(0, 6)}...{address?.slice(-4)}
      </button>
    );
  }

  // Find the injected (browser extension) connector, or default to the first
  const connector = connectors.find((c) => c.type === 'injected') || connectors[0];

  return (
    <button
      onClick={() => connect({ connector })}
      disabled={isPending}
      className="px-4 py-2 bg-[#00E599] text-black font-semibold rounded-md hover:bg-[#00c985] transition-colors disabled:opacity-50"
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
