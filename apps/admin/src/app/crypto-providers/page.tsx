"use client";

import { useState } from "react";
import { MoreVertical, Plus } from "lucide-react";

const CRYPTO_ASSETS = [
  {
    name: "Litecoin (Test)",
    symbol: "LTC",
    code: "LTCTEST",
    logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=025",
    address: "mmxYC261zVX6zP3BUeBCsbVjrwrbBYDksR",
    balance: "Ł 1.49726806",
    networkCode: "LTCTEST",
    status: "Active",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    code: "BTC",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025",
    address: "bc1qqfe6v2fr3yctegsj3mys4nalqppgfe8n7smmkf",
    balance: "₿ 0",
    networkCode: "BTC",
    status: "Active",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    code: "DOGETEST",
    logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=025",
    address: "ndWBXBpiaov2dFqNmnfhX4LffGF7xJHBju",
    balance: "Ð 85.90789072",
    networkCode: "DOGETEST",
    status: "Active",
  },
];

export default function AdminCryptoProvidersPage() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Provider Tab */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-4">
        <div className="flex gap-2">
          <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium">
            Tatumlo
          </button>
        </div>
      </div>

      {/* Provider Card */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-5 bg-[#161722]">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-white">Tatumlo</h2>
            <span className="text-sm text-green-400 font-medium">( Free )</span>
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setEnabled(!enabled)}
              className={`w-12 h-6 rounded-full transition-colors relative ${enabled ? "bg-primary" : "bg-gray-600"}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${enabled ? "left-6" : "left-0.5"}`} />
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
              <Plus className="w-4 h-4" /> Add New Asset
            </button>
          </div>
        </div>

        {/* Asset Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRYPTO_ASSETS.map(asset => (
            <div key={asset.code} className="bg-[#161722] border border-white/10 rounded-xl p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
                  <img
                    src={asset.logo}
                    alt={asset.symbol}
                    className="w-12 h-12 object-contain"
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white">{asset.name}</h3>
                  <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded font-medium">Active</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Merchant Address</p>
                <p className="text-primary text-xs font-mono mt-1 truncate">{asset.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Acount Balance</p>
                  <p className="text-sm font-bold text-white mt-1">{asset.balance}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Network Code</p>
                  <p className="text-sm font-bold text-white mt-1">{asset.networkCode}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-primary hover:bg-primary/90 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  Send
                </button>
                <button className="bg-primary/30 hover:bg-primary/50 text-primary py-2 rounded-lg text-sm font-medium transition-colors border border-primary/30">
                  Receive
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
