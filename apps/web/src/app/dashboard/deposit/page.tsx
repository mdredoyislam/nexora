"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/Input";

export default function DepositPage() {
  const [step, setStep] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("100");
  const [paymentMethod, setPaymentMethod] = useState("Stripe");

  const totalFee = 1.2;
  const totalAmount = parseFloat(amount || "0") + totalFee;

  const renderStepIndicator = () => {
    return (
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-2xl font-bold mb-2">DEPOSIT MONEY</h2>
        <p className="text-gray-400 text-sm mb-4">Step: {step} of 3</p>
        <p className="font-medium text-lg mb-4">
          {step === 1 && "Create Deposit"}
          {step === 2 && "Confirm Your Deposit"}
          {step === 3 && "Transaction Details"}
          {step === 4 && "Deposit Complete"}
        </p>
        <div className="flex gap-2">
          <div className={`h-1.5 w-16 rounded-full ${step >= 1 ? "bg-primary" : "bg-white/10"}`}></div>
          <div className={`h-1.5 w-16 rounded-full ${step >= 2 ? "bg-primary" : "bg-white/10"}`}></div>
          <div className={`h-1.5 w-16 rounded-full ${step >= 3 ? "bg-primary" : "bg-white/10"}`}></div>
          <div className={`h-1.5 w-16 rounded-full ${step >= 4 ? "bg-primary" : "bg-white/10"}`}></div>
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="max-w-xl mx-auto">
      <p className="text-center text-gray-400 mb-8">
        You can deposit to your wallets using our popular payment methods. Fill the details correctly & the amount you want to deposit.
      </p>

      <div className="space-y-6">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">Currency</label>
          <div className="relative">
            <select 
              className="w-full bg-[#161722] border border-white/10 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-primary/50 cursor-pointer"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Fee (0.2%+1) Total Fee: {totalFee}</p>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">Amount</label>
          <Input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-[#161722] border-white/10 text-white h-12" 
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">Payment Method</label>
          <div className="relative">
            <select 
              className="w-full bg-[#161722] border border-white/10 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-primary/50 cursor-pointer"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Stripe">Stripe</option>
              <option value="Paypal">Paypal</option>
              <option value="Crypto">Crypto Transfer</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
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
        Check your deposit information before confirmation.
      </p>

      <div className="flex flex-col items-center mb-8">
        <p className="text-sm text-gray-400 mb-2">Through</p>
        <div className="w-16 h-16 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-4xl border border-indigo-500/30">
          {paymentMethod === "Stripe" ? "S" : paymentMethod.charAt(0)}
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center py-3 border-b border-white/5">
          <span className="text-gray-400">Deposit Amount</span>
          <span className="font-bold">{currency} {amount}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-white/5">
          <span className="text-gray-400">Fee</span>
          <span className="font-bold">{currency} {totalFee}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-white/5">
          <span className="text-gray-400">Total</span>
          <span className="font-bold text-lg text-primary">{currency} {totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-4">
        <Button onClick={() => setStep(3)} className="w-full h-12 text-base flex items-center justify-center gap-2">
          Confirm & Deposit <ChevronRight className="w-4 h-4" />
        </Button>
        <button onClick={() => setStep(1)} className="w-full text-center text-gray-400 hover:text-white flex items-center justify-center gap-1 py-2 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-lg mx-auto bg-[#161722] p-8 rounded-2xl border border-white/10">
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-gray-400 text-sm">You are sending</p>
          <h3 className="text-2xl font-bold text-primary">{currency} {totalAmount.toFixed(2)}</h3>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm mb-1">Medium</p>
          <div className="text-2xl font-bold text-indigo-500 tracking-tighter">stripe</div>
        </div>
      </div>

      <div className="space-y-6 pt-6 border-t border-white/10 border-dashed">
        <div className="space-y-1.5">
          <label className="text-sm text-gray-400">Card number</label>
          <div className="relative">
            <Input 
              type="text" 
              placeholder="1234 1234 1234 1234" 
              className="bg-[#1a1b26] border-white/10 text-white h-12 pl-4 pr-32" 
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
              {/* Fake card icons */}
              <div className="w-8 h-5 bg-blue-900 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
              <div className="w-8 h-5 bg-orange-600 rounded flex items-center justify-center text-[8px] font-bold">MC</div>
              <div className="w-8 h-5 bg-blue-500 rounded flex items-center justify-center text-[8px] font-bold text-white">AMEX</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-gray-400">Expiration</label>
            <Input type="text" placeholder="MM / YY" className="bg-[#1a1b26] border-white/10 text-white h-12" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-gray-400">CVC</label>
            <div className="relative">
              <Input type="text" placeholder="CVC" className="bg-[#1a1b26] border-white/10 text-white h-12 pr-10" />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-4 bg-gray-300 rounded flex items-center justify-center text-[8px] text-black font-bold">123</div>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm text-gray-400">Country</label>
          <div className="relative">
            <select className="w-full bg-[#1a1b26] border border-white/10 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-primary/50 cursor-pointer">
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="BD">Bangladesh</option>
              <option value="IN">India</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <Button onClick={() => setStep(4)} className="w-full h-12 text-base">
            Confirm Payment
          </Button>
          <button onClick={() => setStep(2)} className="w-full text-center text-gray-400 hover:text-white flex items-center justify-center gap-1 py-2 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
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
          Money has been successfully deposited to your wallet. You can see the details under the transaction details.
        </p>
      </div>

      <div className="bg-[#1a1b26] border border-white/10 rounded-xl p-8">
        <p className="text-primary text-sm font-medium mb-2">Deposited Amount</p>
        <h2 className="text-4xl font-bold">{currency} {totalAmount.toFixed(2)}</h2>
      </div>

      <div className="flex gap-4 pt-4">
        <Button className="flex-1 h-12 bg-primary hover:bg-primary/90">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print
        </Button>
        <Button variant="outline" onClick={() => setStep(1)} className="flex-1 h-12 border-white/20 text-white hover:bg-white/5">
          Dashboard
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
        {step === 4 && renderStep4()}
      </div>
    </div>
  );
}
