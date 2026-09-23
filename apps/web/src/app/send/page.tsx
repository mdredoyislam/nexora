"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle, Printer } from "lucide-react";

type Step = 1 | 2 | 3;

export default function UserSendCryptoPage() {
  const [step, setStep] = useState<Step>(1);
  const [address, setAddress] = useState("QY12HwCwDULZmWeEjKQxX3sX7pCDJ1wcRJ");
  const [amount, setAmount] = useState("0.0002");
  const [priority, setPriority] = useState("Medium");
  const [copied, setCopied] = useState(false);

  const coin = "LTCTEST";
  const networkFee = "0.0002";
  const total = (parseFloat(amount) + parseFloat(networkFee)).toFixed(4);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Steps = () => (
    <div className="text-center mb-8">
      <h1 className="text-xl font-bold text-white tracking-widest mb-1">SEND {coin}</h1>
      <p className="text-sm text-primary">Step: {step} of 3</p>
      <p className="text-base font-semibold text-white mt-1">Send {coin}</p>
      <div className="flex gap-2 justify-center mt-3">
        {[1, 2, 3].map(n => (
          <div
            key={n}
            className={`h-1.5 rounded-full flex-1 max-w-[80px] transition-all ${
              n <= step ? "bg-primary" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#13141f] flex items-center justify-center p-4">
      <div className="bg-[#1a1b26] border border-white/5 rounded-2xl shadow-2xl w-full max-w-lg p-8">
        <Steps />

        {/* Step 1: Enter Details */}
        {step === 1 && (
          <div className="space-y-6">
            <p className="text-center text-sm text-gray-400">Enter recipient address and amount.</p>

            <div className="space-y-2">
              <label className="text-sm text-gray-300 font-medium">Recipient Address</label>
              <input
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="w-full bg-[#161722] border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary/50"
              />
              <p className="text-xs text-gray-500">*Crypto transactions might take few moments to complete.</p>
              <p className="text-xs text-gray-500">*Only send {coin} to this address, receiving any other coin will result in permanent loss.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300 font-medium">Amount</label>
              <input
                value={amount}
                onChange={e => setAmount(e.target.value)}
                type="number"
                className="w-full bg-[#161722] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50"
              />
              <p className="text-xs text-gray-500">*The amount withdrawn/sent must at least be 0.0002 {coin}.</p>
              <p className="text-xs text-gray-500">*Please keep at least 0.0001 {coin} for network fees.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300 font-medium">Priority</label>
              <div className="relative">
                <select
                  value={priority}
                  onChange={e => setPriority(e.target.value)}
                  className="w-full bg-[#161722] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 appearance-none"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-500">*Larger transactions incur higher network fees.</p>
              <p className="text-xs text-gray-500">*You can specify the priority for your transactions to adjust the network fee you wish to pay.</p>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              Proceed ›
            </button>
          </div>
        )}

        {/* Step 2: Confirm */}
        {step === 2 && (
          <div className="space-y-6">
            <p className="text-center text-sm text-gray-400">Take a look before you send. Once the coin sent to this address, its never be undone.</p>

            <div className="text-center space-y-1">
              <p className="text-sm text-gray-300">You are about to send {coin} to</p>
              <p className="text-primary font-mono text-sm break-all">{address}</p>
            </div>

            <div className="bg-[#161722] rounded-xl divide-y divide-white/5">
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm text-gray-400">Send Amount</span>
                <span className="text-sm text-white font-mono">Ł {amount}</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm text-gray-400">Estimate Network Fee</span>
                <span className="text-sm text-white font-mono">Ł {networkFee}</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-semibold text-white">Total</span>
                <span className="text-sm font-bold text-white font-mono">Ł {total}</span>
              </div>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-semibold text-sm transition-all"
            >
              Confirm & Send ›
            </button>
            <button onClick={() => setStep(1)} className="w-full text-center text-sm text-gray-400 hover:text-white transition-colors">
              ‹ Back
            </button>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Success!!</h2>
              <p className="text-sm text-gray-400 mt-2">Coin has been transferred to the address. Amount will be added to the user wallet after 1 confirmation.</p>
              <p className="text-sm text-green-400 mt-1">{coin} Sent Successfully.</p>
              <p className="text-xs text-gray-500 mt-1">Amount will be added after 1 confirmations.</p>
            </div>

            <div className="bg-[#161722] rounded-xl p-4 space-y-2">
              <p className="text-xs text-gray-500">Address</p>
              <p className="text-primary font-mono text-sm break-all">{address}</p>
            </div>

            <div className="bg-[#161722] rounded-xl p-4 space-y-1">
              <p className="text-xs text-gray-500">Send Amount</p>
              <p className="text-xl font-bold text-white">Ł {amount}</p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                <Printer className="w-4 h-4" /> Print
              </button>
              <button
                onClick={() => setStep(1)}
                className="flex-1 border border-white/10 hover:bg-white/5 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                Send {coin} Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
