"use client";

import { useState } from "react";
import { Filter, RotateCcw } from "lucide-react";

interface Payment {
  id: string;
  date: string;
  merchant: string;
  method: string;
  orderNumber: string;
  amount: string;
  fee: string;
  total: string;
  currency: string;
  status: "Success" | "Pending" | "Failed";
}

const mockPayments: Payment[] = [
  { id: "1", date: "21-07-2023 5:27 PM", merchant: "Flipkart", method: "Pay Money", orderNumber: "111", amount: "9.85", fee: "0.15", total: "10", currency: "USD", status: "Success" },
  { id: "2", date: "21-07-2023 5:27 PM", merchant: "Flipkart", method: "Stripe", orderNumber: "111", amount: "9.85", fee: "0.15", total: "10", currency: "USD", status: "Success" },
  { id: "3", date: "21-07-2023 5:27 PM", merchant: "eBay", method: "Pay Money", orderNumber: "123", amount: "4.92", fee: "0.08", total: "5", currency: "USD", status: "Success" },
  { id: "4", date: "21-07-2023 5:27 PM", merchant: "eBay", method: "Pay Money", orderNumber: "123", amount: "1.97", fee: "0.03", total: "2", currency: "USD", status: "Success" },
  { id: "5", date: "20-07-2023 5:27 PM", merchant: "eBay", method: "Pay Money", orderNumber: "123", amount: "1.97", fee: "0.03", total: "2", currency: "USD", status: "Success" },
  { id: "6", date: "20-07-2023 5:27 PM", merchant: "eBay", method: "Stripe", orderNumber: "123", amount: "1.97", fee: "0.03", total: "2", currency: "USD", status: "Success" },
  { id: "7", date: "20-07-2023 5:27 PM", merchant: "eBay", method: "Paypal", orderNumber: "123", amount: "6.89", fee: "0.1", total: "7", currency: "USD", status: "Success" },
  { id: "8", date: "20-07-2023 6:56 AM", merchant: "Flipkart", method: "Pay Money", orderNumber: "-", amount: "38", fee: "7.99", total: "45.99", currency: "USD", status: "Success" },
  { id: "9", date: "19-07-2023 5:27 PM", merchant: "eBay", method: "Stripe", orderNumber: "123", amount: "6.89", fee: "0.1", total: "7", currency: "USD", status: "Success" },
  { id: "10", date: "19-07-2023 5:27 PM", merchant: "eBay", method: "Pay Money", orderNumber: "123", amount: "3.94", fee: "0.06", total: "4", currency: "USD", status: "Success" },
];

export default function MerchantPaymentsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-wide">Payments</h1>
        <p className="text-gray-400">List of all the payments you received from customers</p>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white">All lists of merchant payment</h2>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors">
            Filter <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 bg-[#1a1b26] p-4 rounded-xl border border-white/5">
          <select className="bg-[#161722] border border-white/10 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary/50 cursor-pointer flex-1 min-w-[140px]">
            <option>Pick a date range</option>
          </select>
          <select className="bg-[#161722] border border-white/10 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary/50 cursor-pointer flex-1 min-w-[120px]">
            <option>All Currency</option>
          </select>
          <select className="bg-[#161722] border border-white/10 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary/50 cursor-pointer flex-1 min-w-[120px]">
            <option>All Method</option>
          </select>
          <select className="bg-[#161722] border border-white/10 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary/50 cursor-pointer flex-1 min-w-[120px]">
            <option>All Status</option>
          </select>
          <select className="bg-[#161722] border border-white/10 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary/50 cursor-pointer flex-1 min-w-[140px]">
            <option>All Merchant</option>
          </select>
          
          <div className="flex items-center gap-3 ml-auto">
            <button className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors">
              Reset
            </button>
            <button className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Apply Filter
            </button>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-[#1a1b26] rounded-2xl border border-white/5 overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/5 text-sm font-bold text-white bg-white/[0.02]">
                <th className="p-4">Date</th>
                <th className="p-4">Merchant</th>
                <th className="p-4">Method</th>
                <th className="p-4">Order Number</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Fee</th>
                <th className="p-4">Total</th>
                <th className="p-4">Currency</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {mockPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 text-gray-300">{payment.date}</td>
                  <td className="p-4 font-medium text-white">{payment.merchant}</td>
                  <td className="p-4 text-gray-300">{payment.method}</td>
                  <td className="p-4 text-gray-400 font-mono">{payment.orderNumber}</td>
                  <td className="p-4 text-gray-300">{payment.amount}</td>
                  <td className="p-4 text-gray-300">{payment.fee}</td>
                  <td className="p-4 text-white font-medium">{payment.total}</td>
                  <td className="p-4 text-gray-400">{payment.currency}</td>
                  <td className="p-4">
                    <span className="text-green-500 font-medium">{payment.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
