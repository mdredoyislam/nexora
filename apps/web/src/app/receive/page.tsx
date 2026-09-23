"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function UserReceiveCryptoPage() {
  const [copied, setCopied] = useState(false);
  const address = "QeHRaqT9CsPqZgbpQ4bL6w4dsK3ftcHVYv";
  const coin = "LTCTEST";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate simple QR-code representation using inline SVG pattern
  const QRPlaceholder = () => (
    <div className="w-48 h-48 mx-auto border-4 border-white bg-white p-2 rounded-lg">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Simple QR-like pattern */}
        {[...Array(20)].map((_, i) =>
          [...Array(20)].map((_, j) => (
            Math.random() > 0.4 ? (
              <rect
                key={`${i}-${j}`}
                x={i * 10}
                y={j * 10}
                width={9}
                height={9}
                fill="black"
              />
            ) : null
          ))
        )}
        {/* Corner markers */}
        {[[0,0],[150,0],[0,150]].map(([x,y],i) => (
          <g key={i}>
            <rect x={x} y={y} width={50} height={50} fill="black" />
            <rect x={x+7} y={y+7} width={36} height={36} fill="white" />
            <rect x={x+14} y={y+14} width={22} height={22} fill="black" />
          </g>
        ))}
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#13141f] flex items-center justify-center p-4">
      <div className="bg-[#1a1b26] border border-white/5 rounded-2xl shadow-2xl w-full max-w-lg p-8 text-center space-y-8">
        <h1 className="text-xl font-bold text-white tracking-widest">RECEIVE {coin}</h1>

        <div className="space-y-4">
          <p className="text-sm text-gray-400">Receiving Address Qr Code</p>
          <QRPlaceholder />
        </div>

        <div className="bg-[#161722] rounded-xl p-4 space-y-2 text-left">
          <p className="text-xs text-center text-gray-400">
            Only receive <span className="text-primary">{coin}</span> to this address,{" "}
            receiving any other coin will result in <span className="text-red-400">permanent loss</span>.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-400">Receiving Address</p>
          <div className="flex items-center gap-2">
            <input
              readOnly
              value={address}
              className="flex-1 bg-[#161722] border border-white/10 rounded-xl px-4 py-3 text-gray-300 font-mono text-sm focus:outline-none truncate"
            />
            <button
              onClick={handleCopy}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
