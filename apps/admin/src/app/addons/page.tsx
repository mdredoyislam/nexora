"use client";

import { Upload } from "lucide-react";

const ADDONS = [
  {
    name: "CryptoExchange",
    description: "Easiest way to buy, sell, and swap the most popular crypto-currencies in just a few minutes safely and securely.",
    version: "2.0.0",
    banner: "🔄",
    bannerBg: "from-violet-600 to-indigo-700",
  },
  {
    name: "Investment",
    description: "Manage investment portfolios, track performance, and enable users to invest in various financial instruments.",
    version: "2.0.0",
    banner: "📈",
    bannerBg: "from-green-600 to-emerald-700",
  },
];

export default function AdminAddonManagerPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-white/5 gap-4">
          <h2 className="text-lg font-bold text-white">Addons</h2>
          <button className="border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
            <Upload className="w-4 h-4" /> Upload Addon
          </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 px-5 py-3 border-b border-white/5 text-sm font-medium text-gray-400">
          <span>Addons</span>
          <span>Module</span>
          <span>Description</span>
        </div>

        {/* Addon Rows */}
        <div className="divide-y divide-white/5">
          {ADDONS.map(addon => (
            <div key={addon.name} className="grid grid-cols-[1fr_2fr_1fr] gap-4 px-5 py-5 items-start hover:bg-white/5 transition-colors">
              {/* Banner */}
              <div className={`w-24 h-16 rounded-lg bg-gradient-to-br ${addon.bannerBg} flex items-center justify-center text-4xl shadow-lg`}>
                {addon.banner}
              </div>

              {/* Module Info */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">{addon.name}</h3>
                <div className="flex items-center gap-3">
                  <button className="text-sm text-red-400 hover:text-red-300 transition-colors">Deactivate</button>
                  <span className="text-gray-600">|</span>
                  <button className="text-sm text-primary hover:text-primary/80 transition-colors">Settings</button>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-sm text-gray-400 leading-relaxed">{addon.description}</p>
                <p className="text-xs text-gray-500">Version: {addon.version}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
