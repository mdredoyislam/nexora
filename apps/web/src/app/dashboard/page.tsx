"use client";

import { Button } from "@/components/ui/Button";
import { Download, Upload, Bitcoin, Euro, DollarSign, PoundSterling, Wallet, QrCode, MessageSquare, Store } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Header Profile Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-[#1a1b26] p-6 rounded-2xl border border-white/5">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 overflow-hidden flex items-center justify-center border-4 border-[#161722]">
            <span className="font-bold text-2xl">IW</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              Irish watson <span className="text-gray-500 text-sm cursor-pointer hover:text-white">✎</span>
            </h1>
            <p className="text-gray-400 mt-1">Welcome, here is a brief summary of your account.</p>
          </div>
        </div>
        
        <div className="flex gap-4 mt-6 md:mt-0">
          <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
            Deposit Money <Download className="w-4 h-4" />
          </Button>
          <Button className="bg-orange-400 hover:bg-orange-500 text-black flex items-center gap-2">
            Withdraw Money <Upload className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Wallet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BTC */}
        <div className="bg-[#1a1b26] p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-orange-400">BTC</h3>
              <p className="text-xs text-gray-500">Crypto Asset</p>
            </div>
            <div className="bg-orange-500 p-2 rounded-full">
              <Bitcoin className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-2xl font-bold">0</div>
        </div>

        {/* LTC */}
        <div className="bg-[#1a1b26] p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-gray-300">LTCTEST</h3>
              <p className="text-xs text-gray-500">Crypto Asset</p>
            </div>
            <div className="bg-gray-400 p-2 rounded-full">
              <span className="font-bold text-white text-lg leading-none flex items-center justify-center w-5 h-5">Ł</span>
            </div>
          </div>
          <div className="text-2xl font-bold">0.0336</div>
        </div>

        {/* ETH */}
        <div className="bg-[#1a1b26] p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-blue-400">ETH</h3>
              <p className="text-xs text-gray-500">Crypto</p>
            </div>
            <div className="bg-blue-500 p-2 rounded-full">
              <span className="font-bold text-white text-lg leading-none flex items-center justify-center w-5 h-5">Ξ</span>
            </div>
          </div>
          <div className="text-2xl font-bold">0.6172</div>
        </div>

        {/* EUR */}
        <div className="bg-[#1a1b26] p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-blue-500">EUR</h3>
              <p className="text-xs text-gray-500">Fiat</p>
            </div>
            <div className="bg-blue-600 p-2 rounded-full">
              <Euro className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-2xl font-bold">41</div>
        </div>

        {/* USD */}
        <div className="bg-[#1a1b26] p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-green-500">USD</h3>
              <p className="text-xs text-gray-500">Fiat</p>
            </div>
            <div className="bg-green-500 p-2 rounded-full">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-2xl font-bold">115.83</div>
            <span className="text-xs text-green-500">Default</span>
          </div>
        </div>

        {/* GBP */}
        <div className="bg-[#1a1b26] p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-purple-400">GBP</h3>
              <p className="text-xs text-gray-500">Fiat</p>
            </div>
            <div className="bg-primary p-2 rounded-full">
              <PoundSterling className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-2xl font-bold">1,977.98</div>
        </div>
        
        {/* Check All Balances */}
        <div className="bg-[#2a2b3d] p-6 rounded-2xl border border-transparent hover:border-primary/50 transition-colors flex items-center gap-4 cursor-pointer col-span-1 md:col-span-2 lg:col-span-1 h-32">
          <div className="bg-[#1a1b26] p-3 rounded-xl">
            <Wallet className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Check all</p>
            <h3 className="font-bold text-lg">Wallet Balance →</h3>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="bg-[#1a1b26] p-6 rounded-2xl border border-white/5 relative">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg">Profile QR Code</h3>
            <span className="text-gray-500 cursor-pointer hover:text-white">✎</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-24 h-24 bg-white rounded-lg p-2 flex items-center justify-center">
              <QrCode className="w-full h-full text-black" />
            </div>
            <div className="flex-1">
              <p className="font-bold">Send or Receive</p>
              <p className="text-xs text-gray-400 mt-1">Scan to pay directly.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1b26] p-6 rounded-2xl border border-white/5 flex items-center gap-4 cursor-pointer hover:bg-[#1f202e] transition-colors">
          <div className="bg-primary/20 p-4 rounded-xl text-primary relative">
            <MessageSquare className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">?</span>
          </div>
          <h3 className="font-bold text-lg">Contact Ticket Support</h3>
        </div>

        <div className="bg-[#1a1b26] p-6 rounded-2xl border border-white/5 flex items-center gap-4 cursor-pointer hover:bg-[#1f202e] transition-colors">
          <div className="bg-orange-500/20 p-4 rounded-xl text-orange-400 relative">
            <Store className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">?</span>
          </div>
          <h3 className="font-bold text-lg">Create Merchant</h3>
        </div>
      </div>
    </div>
  );
}
