"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState<"paymoney" | "stripe" | "paypal" | null>(null);
  const [step, setStep] = useState<"select" | "pay">("select");

  return (
    <div className="min-h-screen bg-[#161722] flex items-center justify-center p-4">
      {step === "select" ? (
        <div className="bg-[#1a1b26] border border-white/5 rounded-2xl w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
          <h2 className="text-2xl font-bold text-white mb-8">Transaction Details</h2>
          
          <div className="space-y-4 text-sm mb-6 border-b border-dashed border-white/10 pb-6">
            <div className="flex justify-between items-center text-gray-300">
              <span>Shirt</span>
              <span className="font-bold text-white">USD 29.5</span>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400">Merchant ID: <span className="font-mono text-gray-300">#Z3IKX4CNC2ULK</span></p>
              <p className="text-gray-400">Order ID: <span className="font-mono text-gray-300">#PM000129</span></p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold text-white">Total (USD)</span>
            <span className="text-xl font-bold text-primary">29.5</span>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-sm text-gray-400">Accepted payment methods</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setSelectedMethod("paymoney")}
                className={`flex-1 h-16 rounded-xl border flex items-center justify-center bg-white transition-all ${selectedMethod === "paymoney" ? "border-primary ring-2 ring-primary/20 scale-105" : "border-transparent opacity-80 hover:opacity-100"}`}
              >
                {/* Mock Pay Money Logo */}
                <div className="font-bold text-xl text-blue-900 tracking-tighter">Pay<span className="text-primary">money</span></div>
              </button>
              
              <button 
                onClick={() => setSelectedMethod("stripe")}
                className={`flex-1 h-16 rounded-xl border flex items-center justify-center bg-white transition-all ${selectedMethod === "stripe" ? "border-primary ring-2 ring-primary/20 scale-105" : "border-transparent opacity-80 hover:opacity-100"}`}
              >
                <div className="font-bold text-xl text-indigo-600 tracking-tight">stripe</div>
              </button>
              
              <button 
                onClick={() => setSelectedMethod("paypal")}
                className={`flex-1 h-16 rounded-xl border flex items-center justify-center bg-white transition-all ${selectedMethod === "paypal" ? "border-primary ring-2 ring-primary/20 scale-105" : "border-transparent opacity-80 hover:opacity-100"}`}
              >
                <div className="font-bold text-xl text-blue-800 italic tracking-tighter">PayPal</div>
              </button>
            </div>
          </div>

          <Button 
            className="w-full h-12 text-lg" 
            disabled={!selectedMethod}
            onClick={() => setStep("pay")}
          >
            Continue
          </Button>
        </div>
      ) : (
        <div className="bg-[#1a1b26] border border-white/5 rounded-2xl w-full max-w-md p-8 shadow-2xl animate-in slide-in-from-right-4 duration-300">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Transaction Details</h2>
          
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-400">You are sending</p>
            <p className="text-sm text-gray-400">Medium</p>
          </div>

          <div className="flex justify-between items-center mb-8 border-b border-dashed border-white/10 pb-8">
            <span className="text-2xl font-bold text-primary">USD 29.5</span>
            {selectedMethod === "paypal" && (
              <div className="font-bold text-2xl text-blue-400 italic tracking-tighter">PayPal</div>
            )}
            {selectedMethod === "stripe" && (
              <div className="font-bold text-2xl text-indigo-400 tracking-tight">stripe</div>
            )}
            {selectedMethod === "paymoney" && (
              <div className="font-bold text-xl text-white tracking-tighter">Pay<span className="text-primary">money</span></div>
            )}
          </div>

          <div className="space-y-4">
            <Button className="w-full h-12 text-lg">
              Pay with {selectedMethod === "paypal" ? "PayPal" : selectedMethod === "stripe" ? "Stripe" : "Wallet"}
            </Button>
            
            <button 
              onClick={() => setStep("select")}
              className="w-full flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors py-2"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
