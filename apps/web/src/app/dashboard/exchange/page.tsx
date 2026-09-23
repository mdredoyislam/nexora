"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft, ChevronDown, ArrowRightLeft, Printer } from "lucide-react";
import { Input } from "@/components/ui/Input";

export default function ExchangeMoneyPage() {
  const [step, setStep] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GBP");
  const [amount, setAmount] = useState("");

  const exchangeRate = 0.75;
  const fee = 1.06;
  
  const parsedAmount = parseFloat(amount || "0");
  const convertedAmount = parsedAmount * exchangeRate;
  const totalAmount = parsedAmount + fee;

  const renderStepIndicator = () => {
    return (
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide">EXCHANGE MONEY</h2>
        <p className="text-gray-400 text-sm mb-4">Step: {step} of 3</p>
        <p className="font-medium text-lg mb-4">
          {step === 1 && "Setup Money"}
          {step === 2 && "Confirm Exchange Money"}
          {step === 3 && "Exchange Complete"}
        </p>
        <div className="flex gap-2">
          <div className={`h-1.5 w-16 rounded-full ${step >= 1 ? "bg-primary" : "bg-white/10"}`}></div>
          <div className={`h-1.5 w-16 rounded-full ${step >= 2 ? "bg-primary" : "bg-white/10"}`}></div>
          <div className={`h-1.5 w-16 rounded-full ${step >= 3 ? "bg-primary" : "bg-white/10"}`}></div>
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="max-w-xl mx-auto">
      <p className="text-center text-gray-400 mb-8">
        Save time and exchange your currency at an attractive rate. You are just one click away to exchange your currency.
      </p>

      <div className="space-y-8">
        {/* Currencies Row */}
        <div className="flex items-center gap-4">
          <div className="flex-1 space-y-1.5">
            <label className="text-sm font-medium text-gray-300">From Currency</label>
            <div className="relative">
              <select 
                className="w-full bg-[#161722] border border-white/10 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-primary/50 cursor-pointer"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Fee (1%+1) Total Fee: {fee.toFixed(2)}</p>
          </div>

          <div className="pt-6">
            <div className="w-10 h-10 rounded-full bg-[#2a2b3d] flex items-center justify-center cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors">
              <ArrowRightLeft className="w-5 h-5 text-gray-400 hover:text-primary" />
            </div>
          </div>

          <div className="flex-1 space-y-1.5">
            <label className="text-sm font-medium text-gray-300">To Currency</label>
            <div className="relative">
              <select 
                className="w-full bg-[#161722] border border-white/10 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-primary/50 cursor-pointer"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}</p>
          </div>
        </div>

        {/* Amount Row */}
        <div className="flex items-center gap-4">
          <div className="flex-1 space-y-1.5">
            <label className="text-sm font-medium text-gray-300">Your Amount</label>
            <Input 
              type="number" 
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-[#161722] border-white/10 text-white h-12" 
            />
          </div>

          <div className="w-10"></div> {/* Spacer to align with Arrow */}

          <div className="flex-1 space-y-1.5">
            <label className="text-sm font-medium text-gray-300">Converted Amount</label>
            <Input 
              type="text" 
              readOnly
              value={convertedAmount > 0 ? convertedAmount.toFixed(2) : ""}
              placeholder="0.00"
              className="bg-[#161722] border-white/10 text-gray-400 h-12" 
            />
          </div>
        </div>

        <Button onClick={() => setStep(2)} className="w-full h-12 text-base mt-4 flex items-center justify-center gap-2">
          Proceed <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-xl mx-auto">
      <p className="text-center text-gray-400 mb-8">
        Save time and exchange your currency at an attractive rate. You are just one click away to exchange your currency.
      </p>

      <div className="flex flex-col items-center justify-center mb-8">
        <p className="text-primary font-medium mb-1">Exchanged Amount</p>
        <h3 className="text-3xl font-bold">{fromCurrency} {parsedAmount || "0"}</h3>
      </div>

      <div className="space-y-4 mb-8 bg-[#161722] p-6 rounded-xl border border-white/5">
        <div className="flex justify-between items-center py-3 border-b border-white/5">
          <span className="text-gray-400">Rate</span>
          <span className="font-medium">{fromCurrency} 1 = {toCurrency} {exchangeRate}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-white/5">
          <span className="text-gray-400">Fee</span>
          <span className="font-medium">{fromCurrency} {fee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-white/5">
          <span className="text-gray-400 font-bold">Total</span>
          <span className="font-bold text-lg text-primary">{fromCurrency} {totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-4">
        <Button onClick={() => setStep(3)} className="w-full h-12 text-base flex items-center justify-center gap-2">
          Confirming... <ChevronRight className="w-4 h-4" />
        </Button>
        <button onClick={() => setStep(1)} className="w-full text-center text-gray-400 hover:text-white flex items-center justify-center gap-1 py-2 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-md mx-auto text-center space-y-8">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full border-2 border-primary border-t-transparent flex items-center justify-center animate-[spin_3s_linear_infinite]">
          <div className="w-16 h-16 rounded-full border-2 border-white/5 flex items-center justify-center animate-[spin_3s_linear_infinite_reverse]">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-2">Success!</h3>
        <p className="text-gray-400 text-sm">
          Currency exchange has been completed successfully.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-[#161722] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-center gap-4 mb-2">
            <h2 className="text-2xl font-bold">{fromCurrency} {parsedAmount || "0"}</h2>
            <ArrowRightLeft className="w-4 h-4 text-gray-500" />
            <h2 className="text-2xl font-bold">{toCurrency} {convertedAmount.toFixed(2)}</h2>
          </div>
          <p className="text-gray-400 text-xs">Exchange rate: {fromCurrency} 1 = {toCurrency} {exchangeRate}</p>
        </div>

        <div className="bg-[#1a1b26] border border-white/10 rounded-xl p-6">
          <p className="text-primary text-sm font-medium mb-1">New Balance</p>
          <h2 className="text-2xl font-bold text-primary">{fromCurrency} {(164.77).toFixed(2)}</h2>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button className="flex-1 h-12 bg-orange-400 hover:bg-orange-500 text-black">
          <Printer className="w-4 h-4 mr-2" />
          Print
        </Button>
        <Button variant="outline" onClick={() => { setStep(1); setAmount(""); }} className="flex-1 h-12 border-white/20 text-white hover:bg-white/5">
          Exchange Again
        </Button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto pt-4 pb-12">
      <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-8 md:p-12 min-h-[600px]">
        {renderStepIndicator()}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </div>
  );
}
