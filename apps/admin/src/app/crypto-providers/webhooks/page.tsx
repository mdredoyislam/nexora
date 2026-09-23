"use client";

import { useState } from "react";
import { Trash2, Plus, ChevronDown } from "lucide-react";

const SUBSCRIPTIONS = [
  {
    chain: "DOGE",
    type: "ADDRESS_TRANSACTION",
    subscriptionId: "667fa16c140eb9eb28e0b0b9",
    address: "nUpMRosiSxTizhLNzAN67cUryQkrjCjMSB",
    user: "Irish Watson",
    url: "https://paymoney.homemaintaining.com/receive/tatumio-balance-change-notification",
  },
];

export default function AdminWebhooksPage() {
  const [search, setSearch] = useState("");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [createStep, setCreateStep] = useState(1);
  const [network, setNetwork] = useState("DOGETEST");
  const [user, setUser] = useState("Irish Watson");

  const filtered = SUBSCRIPTIONS.filter(s =>
    `${s.chain} ${s.user} ${s.type}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-white/5 gap-4">
          <h2 className="text-lg font-bold text-white">Webhook Notification Subscriptions of DOGETEST</h2>
          <button
            onClick={() => { setIsCreateOpen(true); setCreateStep(1); }}
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" /> + Create Subscription
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 pb-4 pt-5 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Show
            <select className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 pr-8 focus:outline-none text-sm">
              <option>25</option>
            </select>
            entries
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Search:
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 focus:outline-none w-48 text-sm" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="px-5 py-3 font-medium"><div className="flex items-center gap-1">Chain <ChevronDown className="w-3 h-3" /></div></th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Subscription ID</th>
                <th className="px-5 py-3 font-medium">Address</th>
                <th className="px-5 py-3 font-medium">User</th>
                <th className="px-5 py-3 font-medium">Url</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((s, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-3 text-gray-300 font-mono font-bold">{s.chain}</td>
                  <td className="px-5 py-3 text-gray-400 text-xs">{s.type}</td>
                  <td className="px-5 py-3 text-gray-300 font-mono text-xs">{s.subscriptionId}</td>
                  <td className="px-5 py-3 text-gray-300 font-mono text-xs truncate max-w-[140px]">{s.address}</td>
                  <td className="px-5 py-3 text-primary cursor-pointer hover:underline whitespace-nowrap">{s.user}</td>
                  <td className="px-5 py-3 text-gray-400 text-xs truncate max-w-[200px]">{s.url}</td>
                  <td className="px-5 py-3">
                    <button className="w-7 h-7 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded flex items-center justify-center transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-t border-white/5 gap-4">
          <p className="text-sm text-gray-400">Showing 1 to {filtered.length} of {filtered.length} entries</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded">Previous</button>
            <button className="px-3 py-1.5 text-sm bg-primary text-white rounded font-medium">1</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded">Next</button>
          </div>
        </div>
      </div>

      {/* Create Subscription Flow */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-xl shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">
                {createStep === 1 ? "Create Subscription" : "Webhook Subscription - Confirm"}
              </h2>
            </div>

            {createStep === 1 ? (
              <div className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">Network</label>
                  <input value={network} onChange={e => setNetwork(e.target.value)} className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">User</label>
                  <div className="relative">
                    <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none text-sm appearance-none">
                      <option>Irish Watson</option>
                      <option>Kyla Watson</option>
                      <option>Brynn Floyd</option>
                    </select>
                    <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">User Address</label>
                  <input value="nUpMRosiSxTizhLNzAN67cUryQkrjCjMSB" readOnly className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-gray-400 text-sm font-mono" />
                </div>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {[
                  ["Network", network],
                  ["User", user],
                  ["User Address", "nUpMRosiSxTizhLNzAN67cUryQkrjCjMSB"],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[140px_1fr] gap-4 items-center">
                    <span className="text-sm text-gray-400">{label}</span>
                    <span className="text-sm text-white font-mono">{value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="p-6 border-t border-white/5 flex justify-between">
              <button
                onClick={() => createStep === 1 ? setIsCreateOpen(false) : setCreateStep(1)}
                className="px-5 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                {createStep === 1 ? "Cancel" : "Back"}
              </button>
              <button
                onClick={() => createStep === 1 ? setCreateStep(2) : setIsCreateOpen(false)}
                className="px-5 py-2 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
              >
                {createStep === 1 ? "Next ›" : "Confirm ›"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
