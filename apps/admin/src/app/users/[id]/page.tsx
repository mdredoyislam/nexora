"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

type Tab = "profile" | "transactions" | "wallets" | "tickets" | "disputes";
type SendStep = "form" | "confirm" | "success";

const USER = {
  name: "Irish watson",
  status: "Active",
  firstName: "Irish",
  lastName: "watson",
  email: "irish@gmail.com",
  group: "Merchant Regular",
};

export default function AdminUserDetailPage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [sendStep, setSendStep] = useState<SendStep>("form");
  const [amount, setAmount] = useState("2");

  const tabs: { id: Tab; label: string }[] = [
    { id: "profile", label: "Profile" },
    { id: "transactions", label: "Transactions" },
    { id: "wallets", label: "Wallets" },
    { id: "tickets", label: "Tickets" },
    { id: "disputes", label: "Disputes" },
  ];

  return (
    <div className="space-y-0 animate-in fade-in duration-500">
      {/* Tab Bar */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-t-xl">
        <div className="flex border-b border-white/5">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-[#1a1b26] border border-white/5 border-t-0 rounded-b-xl p-6">
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">{USER.name}</h2>
                <span className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded font-medium">Active</span>
              </div>
              <div className="flex gap-3">
                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                  Deposit
                </button>
                <button className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                  Withdraw
                </button>
              </div>
            </div>

            <div className="bg-[#161722] border border-white/5 rounded-xl p-8 space-y-6 max-w-2xl">
              <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                <label className="text-sm text-gray-400 text-right">First Name</label>
                <input defaultValue={USER.firstName} className="bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
              </div>
              <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                <label className="text-sm text-gray-400 text-right">Last Name</label>
                <input defaultValue={USER.lastName} className="bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
              </div>
              <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                <label className="text-sm text-gray-400 text-right">Phone</label>
                <div className="flex">
                  <div className="bg-[#1a1b26] border border-white/10 border-r-0 rounded-l-lg px-3 py-2.5 text-sm text-gray-300 flex items-center gap-1">
                    🇺🇸 +1
                  </div>
                  <input placeholder="201-555-0123" className="flex-1 bg-[#1a1b26] border border-white/10 rounded-r-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                <label className="text-sm text-gray-400 text-right">Email *</label>
                <input defaultValue={USER.email} className="bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
              </div>
              <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                <label className="text-sm text-gray-400 text-right">Group *</label>
                <select defaultValue={USER.group} className="bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
                  <option>Merchant Regular</option>
                  <option>Default User</option>
                </select>
              </div>
              <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                <label className="text-sm text-gray-400 text-right">Password</label>
                <input type="password" placeholder="Enter new Password" className="bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
              </div>
              <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                <label className="text-sm text-gray-400 text-right">Confirm Password</label>
                <input type="password" placeholder="Confirm password" className="bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
              </div>
              <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                <label className="text-sm text-gray-400 text-right">Status *</label>
                <select defaultValue="Active" className="bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Suspended</option>
                </select>
              </div>

              <div className="flex gap-3 justify-start pl-[196px]">
                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                  Cancel
                </button>
                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "wallets" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Crypto Send — <span className="text-gray-400 text-base font-normal">John Doe</span></h2>
              <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Crypto Send
              </button>
            </div>

            {sendStep === "form" && (
              <div className="bg-[#161722] border border-white/5 rounded-xl p-8 max-w-2xl space-y-6">
                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                  <label className="text-sm text-gray-400 text-right">Crypto Currency</label>
                  <select className="bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
                    <option>DOGETEST</option>
                    <option>BTCTEST</option>
                  </select>
                </div>
                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                  <label className="text-sm text-gray-400 text-right">Merchant Address</label>
                  <input readOnly defaultValue="2N6Z53YbM3fVucD49vLY9FDkfjb1UwJ4xjg" className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-gray-300 text-sm font-mono cursor-not-allowed" />
                </div>
                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                  <label className="text-sm text-gray-400 text-right">Merchant Balance</label>
                  <input readOnly defaultValue="904.18000000" className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-gray-300 text-sm font-mono cursor-not-allowed" />
                </div>
                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                  <label className="text-sm text-gray-400 text-right">User Address</label>
                  <input readOnly defaultValue="2Mw7mohF6e6AgHKcK9rpmKdYjkPnSJGiXsL" className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-gray-300 text-sm font-mono cursor-not-allowed" />
                </div>
                <div className="grid grid-cols-[200px_1fr] items-start gap-4">
                  <label className="text-sm text-gray-400 text-right pt-2.5">Amount *</label>
                  <div className="space-y-2">
                    <input 
                      type="number" 
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      className="w-full bg-[#1a1b26] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm"
                    />
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>*Crypto transactions might take few moments to complete.</p>
                      <p>*The amount withdrawn/sent must at least be 2 DOGETEST.</p>
                      <p>*Please keep at least 1 DOGETEST for network fees.</p>
                      <p>*Allowed upto 8 decimal places.</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pl-[216px]">
                  <button className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-2 rounded-lg text-sm transition-colors">
                    &lt; Back
                  </button>
                  <button onClick={() => setSendStep("confirm")} className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-2 rounded-lg text-sm transition-colors">
                    Next &gt;
                  </button>
                </div>
              </div>
            )}

            {sendStep === "confirm" && (
              <div className="bg-[#161722] border border-white/5 rounded-xl p-8 max-w-2xl space-y-6">
                <h3 className="text-center text-lg font-bold text-white">Details</h3>
                <div className="space-y-3 border-b border-white/10 pb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sent Amount</span>
                    <span className="text-white font-mono">Ð {parseFloat(amount).toFixed(8)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-400">Network Fee</span>
                    <span className="text-white font-mono">Ð 1.00000000</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-white font-mono">Ð {(parseFloat(amount) + 1).toFixed(8)}</span>
                </div>
                <div className="flex justify-between">
                  <button onClick={() => setSendStep("form")} className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-2 rounded-lg text-sm transition-colors">
                    &lt; Back
                  </button>
                  <button onClick={() => setSendStep("success")} className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-2 rounded-lg text-sm transition-colors">
                    Confirm &gt;
                  </button>
                </div>
              </div>
            )}

            {sendStep === "success" && (
              <div className="bg-[#161722] border border-white/5 rounded-xl p-8 max-w-2xl text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-green-400 text-xl font-bold">Success!</h3>
                <p className="text-white font-medium">DOGETEST Sent Successfully.</p>
                <p className="text-gray-400 text-sm">Amount will be added after 1 confirmations.</p>
                <p className="text-primary text-sm font-mono">Address: 2Mw7mohF6e6AgHKcK9rpmKdYjkPnSJGiXsL</p>
                <p className="text-gray-400 text-sm">Sent Amount : Ð {parseFloat(amount).toFixed(8)}</p>
                <div className="flex justify-between pt-4">
                  <button className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-2 rounded-lg text-sm transition-colors">
                    Print
                  </button>
                  <button onClick={() => setSendStep("form")} className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-2 rounded-lg text-sm transition-colors">
                    Send DOGETEST Again
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {(activeTab === "transactions" || activeTab === "tickets" || activeTab === "disputes") && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg font-medium">No {activeTab} found for this user.</p>
          </div>
        )}
      </div>
    </div>
  );
}
