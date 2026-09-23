"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/Input";

export default function RequestMoneyPage() {
  const [step, setStep] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const renderStepIndicator = () => {
    return (
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide">REQUEST MONEY</h2>
        <p className="text-gray-400 text-sm mb-4">Step: {step} of 3</p>
        <p className="font-medium text-lg mb-4">
          {step === 1 && "Create Request"}
          {step === 2 && "Confirm Request"}
          {step === 3 && "Request Complete"}
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
        Enter your recipients email address & then add an amount with currency. You can also provide a note for reference.
      </p>

      <div className="space-y-6">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">Recipient</label>
          <Input 
            type="email" 
            placeholder="Please enter valid email (ex: user@gmail.com)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#161722] border-white/10 text-white h-12" 
          />
          <p className="text-xs text-gray-500 italic mt-1">We will never share your email with anyone else.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
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
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300">Amount</label>
            <Input 
              type="number" 
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-[#161722] border-white/10 text-white h-12" 
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">Note</label>
          <textarea 
            className="w-full bg-[#161722] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 min-h-[100px] resize-none"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
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
        Check your request information before confirmation.
      </p>

      <div className="space-y-4 mb-8 bg-[#161722] p-6 rounded-xl border border-white/5">
        <div className="flex justify-between items-center py-3 border-b border-white/5">
          <span className="text-gray-400">Requesting From</span>
          <span className="font-medium">{email || "Not specified"}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-white/5">
          <span className="text-gray-400">Amount</span>
          <span className="font-bold text-lg text-primary">{currency} {amount || "0.00"}</span>
        </div>
        {note && (
          <div className="py-3">
            <span className="text-gray-400 block mb-1">Note</span>
            <p className="text-sm text-gray-300 italic">"{note}"</p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <Button onClick={() => setStep(3)} className="w-full h-12 text-base flex items-center justify-center gap-2">
          Confirm Request <ChevronRight className="w-4 h-4" />
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
          Money request has been successfully sent to <span className="text-white">{email}</span>.
        </p>
      </div>

      <div className="bg-[#1a1b26] border border-white/10 rounded-xl p-8">
        <p className="text-primary text-sm font-medium mb-2">Requested Amount</p>
        <h2 className="text-4xl font-bold">{currency} {parseFloat(amount || "0").toFixed(2)}</h2>
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="outline" onClick={() => setStep(1)} className="flex-1 h-12 border-white/20 text-white hover:bg-white/5">
          Dashboard
        </Button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto pt-4 pb-12">
      <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-8 md:p-12 min-h-[600px]">
        {step !== 3 && renderStepIndicator()}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </div>
  );
}
