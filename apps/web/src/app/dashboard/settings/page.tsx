"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Upload } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"identity" | "address">("identity");

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-8">
        <div className="text-center space-y-2 mb-10">
          <h1 className="text-3xl font-bold uppercase tracking-wide">SETTINGS</h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-[#161722] rounded-full p-1 border border-white/5">
            <button
              onClick={() => setActiveTab("identity")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === "identity" 
                  ? "bg-primary text-white" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Identity Verification
            </button>
            <button
              onClick={() => setActiveTab("address")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === "address" 
                  ? "bg-primary text-white" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Address Verification
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto space-y-8">
          {activeTab === "identity" ? (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  Identity Type 
                  <span className="text-green-500 font-medium text-xs">(approved)</span>
                </label>
                <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 appearance-none">
                  <option>Passport</option>
                  <option>National ID</option>
                  <option>Driver's License</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Identity Number</label>
                <input 
                  type="text" 
                  defaultValue="1520004698" 
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 font-mono" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Attach Identity Proof</label>
                <div className="flex border border-white/10 rounded-lg overflow-hidden bg-[#161722]">
                  <button className="bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-medium border-r border-white/5 transition-colors">
                    Choose File
                  </button>
                  <span className="px-4 py-3 text-sm text-gray-500 flex-1">No file chosen</span>
                </div>
                <p className="text-xs text-gray-500 pt-1">Upload your documents (Max: 2 mb)</p>
              </div>

              {/* Uploaded File preview */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border border-white/10 rounded px-3 py-1.5 bg-[#161722]">
                  <span className="text-xs text-gray-300">passport.png</span>
                  <div className="bg-primary/20 p-1 rounded text-primary">
                    <Upload className="w-3 h-3" />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full h-12">Verify Identity</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center gap-2">
                  Address Proof Document
                  <span className="text-orange-400 font-medium text-xs">(pending)</span>
                </label>
                <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 appearance-none">
                  <option>Utility Bill</option>
                  <option>Bank Statement</option>
                  <option>Lease Agreement</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Attach Address Proof</label>
                <div className="flex border border-white/10 rounded-lg overflow-hidden bg-[#161722]">
                  <button className="bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-medium border-r border-white/5 transition-colors">
                    Choose File
                  </button>
                  <span className="px-4 py-3 text-sm text-gray-500 flex-1">No file chosen</span>
                </div>
                <p className="text-xs text-gray-500 pt-1">Upload your documents (Max: 2 mb)</p>
              </div>

              <div className="pt-4">
                <Button className="w-full h-12">Submit Address Proof</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
