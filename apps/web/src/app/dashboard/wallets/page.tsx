"use client";

import { PoundSterling, DollarSign, Euro, Bitcoin, Download, Upload } from "lucide-react";

interface Wallet {
  id: string;
  type: "Fiat" | "Crypto Asset" | "Crypto";
  code: string;
  name?: string;
  balance: string;
  lastAction: string;
  isDefault?: boolean;
  iconType: "gbp" | "usd" | "eur" | "ltc" | "btc" | "eth";
}

const mockWallets: Wallet[] = [
  {
    id: "1",
    type: "Fiat",
    code: "GBP",
    balance: "1,977.98",
    lastAction: "£ 50 ( Withdrawal )",
    iconType: "gbp"
  },
  {
    id: "2",
    type: "Fiat",
    code: "USD",
    balance: "115.83",
    lastAction: "$ 13 ( Request Money )",
    isDefault: true,
    iconType: "usd"
  },
  {
    id: "3",
    type: "Fiat",
    code: "EUR",
    balance: "41",
    lastAction: "€ 85 ( Money Exchange )",
    iconType: "eur"
  },
  {
    id: "4",
    type: "Crypto",
    code: "ETH",
    balance: "0.6172",
    lastAction: "Ξ 0.05 ( Withdrawal )",
    iconType: "eth"
  },
  {
    id: "5",
    type: "Crypto Asset",
    code: "LTCTEST",
    balance: "0.0336",
    lastAction: "Ł 0 ( Crypto Received )",
    iconType: "ltc"
  },
  {
    id: "6",
    type: "Crypto Asset",
    code: "BTC",
    balance: "0",
    lastAction: "No transaction available.",
    iconType: "btc"
  }
];

export default function WalletsPage() {
  const renderIcon = (type: string) => {
    switch (type) {
      case "gbp":
        return <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center"><PoundSterling className="w-7 h-7 text-white" /></div>;
      case "usd":
        return <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center"><DollarSign className="w-7 h-7 text-white" /></div>;
      case "eur":
        return <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center"><Euro className="w-7 h-7 text-white" /></div>;
      case "ltc":
        return <div className="w-14 h-14 rounded-full bg-gray-400 flex items-center justify-center"><span className="text-white font-bold text-2xl">Ł</span></div>;
      case "eth":
        return <div className="w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center"><span className="text-white font-bold text-3xl mb-1">Ξ</span></div>;
      case "btc":
        return <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center"><Bitcoin className="w-7 h-7 text-white" /></div>;
      default:
        return <div className="w-14 h-14 rounded-full bg-gray-500 flex items-center justify-center">?</div>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-wide">WALLET LIST</h1>
        <p className="text-gray-400">Here you will get all of your Fiat and Crypto wallets including default one.<br/>You can also perform crypto send/receive of your crypto coins.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockWallets.map((wallet) => (
          <div key={wallet.id} className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6 flex flex-col justify-between hover:border-primary/30 transition-colors">
            
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                {renderIcon(wallet.iconType)}
                <div>
                  <p className="text-sm text-gray-400">{wallet.type}</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold">{wallet.code}</h3>
                    {wallet.isDefault && <span className="text-primary text-sm">(default)</span>}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Balance</p>
                <h3 className="text-2xl font-bold">{wallet.balance}</h3>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <p className="text-sm text-gray-400">
                Last Action: <span className="text-gray-300 font-medium">{wallet.lastAction}</span>
              </p>
              
              <div className="flex items-center gap-3">
                <button className="relative group w-10 h-10 rounded-xl bg-[#2a2b3d] flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-gray-400">
                  <Download className="w-5 h-5" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Deposit
                  </span>
                </button>
                <button className="relative group w-10 h-10 rounded-xl bg-[#2a2b3d] flex items-center justify-center hover:bg-orange-500/20 hover:text-orange-500 transition-colors text-gray-400">
                  <Upload className="w-5 h-5" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange-500 text-black font-medium text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Withdraw
                  </span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
