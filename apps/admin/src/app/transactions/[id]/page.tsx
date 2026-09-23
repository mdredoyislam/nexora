"use client";

import { useState } from "react";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminTransactionDetailPage() {
  const [status, setStatus] = useState("Success");

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Header Bar */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/transactions" className="text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h2 className="text-lg font-bold text-white">Transaction Details</h2>
        </div>
        <div className="text-sm font-medium">
          Status : <span className={status === "Success" ? "text-green-400" : status === "Pending" ? "text-blue-400" : "text-red-400"}>{status}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Details Card */}
        <div className="lg:col-span-2 bg-[#1a1b26] border border-white/5 rounded-xl p-8 space-y-6">
          {[
            { label: "User",           value: "Irish watson",    isLink: true },
            { label: "Receiver",       value: "-",              isLink: false },
            { label: "Transaction ID", value: "FCHG3FVJ7TSOW", isLink: false, mono: true },
            { label: "Type",           value: "Deposit",        isLink: false },
            { label: "Currency",       value: "EUR",            isLink: false },
            { label: "Payment Method", value: "Stripe",         isLink: false },
            { label: "Date",           value: "18-08-2021 7:56 AM", isLink: false },
          ].map(({ label, value, isLink, mono }) => (
            <div key={label} className="grid grid-cols-[180px_1fr] items-center gap-4">
              <span className="text-sm text-gray-400 text-right">{label}</span>
              <span className={`text-sm ${isLink ? "text-primary cursor-pointer hover:underline" : "text-gray-200"} ${mono ? "font-mono" : ""}`}>
                {value}
              </span>
            </div>
          ))}

          <div className="grid grid-cols-[180px_1fr] items-center gap-4">
            <span className="text-sm text-gray-400 text-right">Change Status</span>
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none w-64"
            >
              <option>Success</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>

          <div className="flex gap-3 pl-[196px]">
            <Link href="/transactions">
              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                Cancel
              </button>
            </Link>
            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
              Update
            </button>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-8 space-y-4 h-fit">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-sm text-gray-400">Amount</span>
            <span className="text-sm font-bold text-white">€ 500.00</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <span className="text-sm text-gray-400">Fees</span>
              <span className="text-xs text-gray-500 block">(0.12% + 5.00)</span>
            </div>
            <span className="text-sm font-bold text-white">€ 5.60</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold text-gray-200">Total</span>
            <span className="text-sm font-bold text-white">€ 505.60</span>
          </div>
        </div>
      </div>
    </div>
  );
}
