"use client";

import { useState } from "react";
import { ChevronDown, Filter, FileText, Eye } from "lucide-react";
import { exportToCSV, exportToPDF } from "@/lib/export";

const REVENUES = [
  { date: "23-08-2021 4:49 PM", type: "Payment Received", pct: 6.44,  fixed: 5.00, total: "+11.44", currency: "USD" },
  { date: "23-08-2021 4:03 PM", type: "Deposit",          pct: 0.20,  fixed: 1.00, total: "+1.20",  currency: "USD" },
  { date: "23-08-2021 7:56 AM", type: "Crypto Sent",      pct: 0,     fixed: 1.00, total: "+1.00",  currency: "DOGETEST" },
  { date: "23-08-2021 7:56 AM", type: "Crypto Sent",      pct: 0,     fixed: 1.00, total: "+1.00",  currency: "DOGETEST" },
  { date: "07-08-2021 7:56 AM", type: "Transferred",      pct: 1.44,  fixed: 5.00, total: "+6.44",  currency: "GBP" },
  { date: "07-08-2021 7:56 AM", type: "Exchange From",    pct: 0.19,  fixed: 1.00, total: "+1.19",  currency: "USD" },
  { date: "07-08-2021 7:56 AM", type: "Deposit",          pct: 1.00,  fixed: 2.00, total: "+3.00",  currency: "GBP" },
  { date: "07-08-2021 7:56 AM", type: "Exchange From",    pct: 0.01,  fixed: 1.00, total: "+1.01",  currency: "USD" },
  { date: "08-08-2021 7:56 AM", type: "Exchange From",    pct: 0.12,  fixed: 3.00, total: "+3.12",  currency: "USD" },
  { date: "09-08-2021 7:56 AM", type: "Exchange From",    pct: 0.25,  fixed: 3.00, total: "+3.25",  currency: "USD" },
  { date: "09-08-2021 7:56 AM", type: "Payout",           pct: 0.02,  fixed: 2.00, total: "+2.02",  currency: "EUR" },
  { date: "10-08-2021 7:56 AM", type: "Deposit",          pct: 2.00,  fixed: 2.00, total: "+4.00",  currency: "EUR" },
  { date: "11-08-2021 7:56 AM", type: "Deposit",          pct: 26.50, fixed: 5.00, total: "+31.50", currency: "USD" },
  { date: "11-08-2021 7:56 AM", type: "Deposit",          pct: 0.50,  fixed: 5.00, total: "+5.50",  currency: "USD" },
  { date: "11-08-2021 7:56 AM", type: "Deposit",          pct: 40.00, fixed: 2.00, total: "+42.00", currency: "GBP" },
  { date: "18-08-2021 7:56 AM", type: "Request To",       pct: 0.25,  fixed: 5.00, total: "+5.25",  currency: "EUR" },
  { date: "18-08-2021 7:56 AM", type: "Deposit",          pct: 0.60,  fixed: 5.00, total: "+5.60",  currency: "EUR" },
  { date: "18-08-2021 7:56 AM", type: "Transferred",      pct: 1.00,  fixed: 5.00, total: "+6.00",  currency: "USD" },
  { date: "06-08-2021 7:56 AM", type: "Deposit",          pct: 24.00, fixed: 1.00, total: "+25.00", currency: "GBP" },
];

export default function AdminRevenuesPage() {
  const [search, setSearch] = useState("");

  const filtered = REVENUES.filter(r =>
    `${r.type} ${r.currency}`.toLowerCase().includes(search.toLowerCase())
  );

  const handleExportCSV = () => {
    const headers = ["Date", "Transaction Type", "Percentage Charge", "Fixed Charge", "Total", "Currency"];
    const rows = filtered.map(r => [
      r.date, r.type, r.pct > 0 ? r.pct.toFixed(2) : "-", r.fixed > 0 ? r.fixed.toFixed(2) : "-", r.total, r.currency
    ]);
    exportToCSV("revenues", headers, rows);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Filter Bar */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-5">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="space-y-1.5 flex-1 min-w-[160px]">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Date Range</label>
            <div className="relative">
              <input type="text" placeholder="Pick a date range" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 text-sm pl-10" />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
            </div>
          </div>
          <div className="space-y-1.5 w-32">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Currency</label>
            <div className="relative">
              <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
                <option>All</option>
                <option>USD</option>
                <option>GBP</option>
                <option>EUR</option>
                <option>DOGETEST</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 w-40">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Transaction Type</label>
            <div className="relative">
              <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
                <option>All</option>
                <option>Deposit</option>
                <option>Transfer</option>
                <option>Exchange</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shrink-0">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      {/* Revenue Summary Tiles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total USD Revenue", value: "USD 2,572.44" },
          { label: "Total DOGETEST Revenue", value: "DOGETEST 2.00" },
          { label: "Total GBP Revenue", value: "GBP 80.45" },
          { label: "Total EUR Revenue", value: "EUR 351.87" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-[#1a1b26] border border-white/5 rounded-xl p-5 text-center space-y-2">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</p>
            <p className="text-lg font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-white/5 gap-4">
          <h2 className="text-lg font-bold text-white">All Revenues</h2>
          <div className="flex items-center gap-2">
            <button onClick={handleExportCSV} className="px-3 py-1.5 text-xs font-medium border border-white/10 rounded text-gray-300 hover:border-primary/50 hover:text-white transition-colors flex items-center gap-1.5">
              <FileText className="w-3 h-3" /> CSV
            </button>
            <button onClick={exportToPDF} className="px-3 py-1.5 text-xs font-medium border border-white/10 rounded text-gray-300 hover:border-primary/50 hover:text-white transition-colors flex items-center gap-1.5">
              <FileText className="w-3 h-3" /> PDF
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 pb-4 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Show
            <select className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 pr-8 focus:outline-none focus:border-primary/50 text-sm">
              <option>25</option>
              <option>50</option>
            </select>
            entries
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Search:
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 focus:outline-none focus:border-primary/50 w-48 text-sm" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="px-5 py-3 font-medium whitespace-nowrap"><div className="flex items-center gap-1">Date <ChevronDown className="w-3 h-3" /></div></th>
                <th className="px-5 py-3 font-medium">Transaction Type</th>
                <th className="px-5 py-3 font-medium">Percentage Charge</th>
                <th className="px-5 py-3 font-medium">Fixed Charge</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Currency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((rev, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-3 text-primary text-xs whitespace-nowrap">{rev.date}</td>
                  <td className="px-5 py-3 text-gray-300">{rev.type}</td>
                  <td className="px-5 py-3 text-gray-300 font-mono">{rev.pct > 0 ? rev.pct.toFixed(2) : "-"}</td>
                  <td className="px-5 py-3 text-gray-300 font-mono">{rev.fixed > 0 ? rev.fixed.toFixed(2) : "-"}</td>
                  <td className="px-5 py-3 font-mono font-semibold text-green-400">{rev.total}</td>
                  <td className="px-5 py-3 text-gray-300">{rev.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-t border-white/5 gap-4">
          <p className="text-sm text-gray-400">Showing 1 to {filtered.length} of {filtered.length} entries</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">Previous</button>
            <button className="px-3 py-1.5 text-sm bg-primary text-white rounded font-medium">1</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">2</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
