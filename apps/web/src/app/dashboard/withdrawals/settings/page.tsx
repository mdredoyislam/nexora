"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Plus, Pencil, Trash2, Landmark, Bitcoin } from "lucide-react";

interface WithdrawalMethod {
  id: string;
  type: "Bank" | "Crypto" | "Paypal";
  name: string;
  details: string;
}

const mockMethods: WithdrawalMethod[] = [
  {
    id: "1",
    type: "Bank",
    name: "Globus Bank Limited",
    details: "Sandha Proud (********47-C)"
  },
  {
    id: "2",
    type: "Crypto",
    name: "ETH",
    details: "0x6BcA3DdEf6c42Cc8B741F8604b7cf7185f016782"
  },
  {
    id: "3",
    type: "Paypal",
    name: "Paypal",
    details: "irish@gmail.com"
  }
];

export default function WithdrawalSettingsPage() {
  const [filter, setFilter] = useState("All");

  const renderIcon = (type: string) => {
    switch (type) {
      case "Bank":
        return <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20"><Landmark className="w-6 h-6" /></div>;
      case "Crypto":
        return <div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20"><Bitcoin className="w-6 h-6" /></div>;
      case "Paypal":
        return <div className="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xl border border-cyan-500/20 italic">P</div>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-wide">WITHDRAWAL SETTINGS</h1>
        <p className="text-gray-400">All the options you have or can create to withdraw from your wallet</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="relative w-48">
          <select 
            className="w-full bg-[#161722] border border-white/10 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-primary/50 cursor-pointer"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Bank">Bank</option>
            <option value="Crypto">Crypto</option>
            <option value="Paypal">Paypal</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <Button className="flex items-center gap-2 h-12 px-6">
          <Plus className="w-4 h-4" /> Add Setting
        </Button>
      </div>

      <div className="bg-[#1a1b26] rounded-2xl border border-white/5 overflow-hidden">
        <div className="divide-y divide-white/5">
          {mockMethods
            .filter(m => filter === "All" || m.type === filter)
            .map((method) => (
            <div key={method.id} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] transition-colors gap-4">
              <div className="flex items-center gap-4 md:w-1/3">
                {renderIcon(method.type)}
                <span className="font-bold text-white text-base">{method.type}</span>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="font-medium text-white mb-1">{method.name}</h3>
                <p className="text-sm text-gray-500 font-mono">{method.details}</p>
              </div>

              <div className="flex items-center justify-end gap-3 md:w-1/6">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
