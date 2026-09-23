"use client";

import { useState } from "react";
import { ChevronDown, Filter, FileText, Eye, Pencil, Trash2 } from "lucide-react";
import { exportToCSV, exportToPDF } from "@/lib/export";

const TRANSACTIONS = [
  { date: "24-08-2021 11:14 AM", user: "Irish watson", type: "Deposit",          amount: 10.00,    fees: 1.00,     total: "+11.00",    currency: "USD",     receiver: "-",           status: "Pending" },
  { date: "23-08-2021 4:49 PM",  user: "Kyla watson",  type: "Payment Received", amount: 87.57,    fees: 11.44,    total: "+99.00",    currency: "USD",     receiver: "Irish watson", status: "Success" },
  { date: "23-08-2021 4:49 PM",  user: "Kyla watson",  type: "Payment Sent",     amount: 99.00,    fees: 0,        total: "-99.00",    currency: "USD",     receiver: "Irish watson", status: "Success" },
  { date: "23-08-2021 4:03 PM",  user: "Irish watson", type: "Deposit",          amount: 100.00,   fees: 1.20,     total: "+101.20",   currency: "USD",     receiver: "-",           status: "Success" },
  { date: "23-08-2021 7:56 AM",  user: "Kyla watson",  type: "Crypto Received",  amount: 2.00,     fees: 0,        total: "+2.00000000", currency: "DOGETEST", receiver: "Irish watson", status: "Success" },
  { date: "23-08-2021 7:56 AM",  user: "Kyla watson",  type: "Crypto Sent",      amount: 2.00,     fees: 1.00,     total: "-4.00000000", currency: "DOGETEST", receiver: "Irish watson", status: "Success" },
  { date: "23-08-2021 7:56 AM",  user: "-",            type: "Crypto Received",  amount: 3.00,     fees: 0,        total: "+3.00000000", currency: "DOGETEST", receiver: "Kyla watson",  status: "Success" },
  { date: "23-08-2021 7:56 AM",  user: "-",            type: "Crypto Sent",      amount: 3.00,     fees: 1.00,     total: "-5.00000000", currency: "DOGETEST", receiver: "Kyla watson",  status: "Success" },
  { date: "07-08-2021 7:56 AM",  user: "Kyla watson",  type: "Request To",       amount: 43.00,    fees: 0,        total: "-43.00",    currency: "GBP",     receiver: "Irish watson", status: "Pending" },
  { date: "07-08-2021 7:56 AM",  user: "Kyla watson",  type: "Request From",     amount: 43.00,    fees: 0,        total: "+43.00",    currency: "GBP",     receiver: "Irish watson", status: "Pending" },
  { date: "07-08-2021 7:56 AM",  user: "Kyla watson",  type: "Received",         amount: 41.00,    fees: 0,        total: "+41.00",    currency: "GBP",     receiver: "Irish watson", status: "Success" },
  { date: "07-08-2021 7:56 AM",  user: "Kyla watson",  type: "Transferred",      amount: 41.00,    fees: 6.44,     total: "-47.44",    currency: "GBP",     receiver: "Irish watson", status: "Success" },
  { date: "07-08-2021 7:56 AM",  user: "Kyla watson",  type: "Deposit",          amount: 700.00,   fees: 167.00,   total: "+867.00",   currency: "GBP",     receiver: "-",           status: "Pending" },
  { date: "07-08-2021 7:56 AM",  user: "Kyla watson",  type: "Exchange To",      amount: 1550.00,  fees: 0,        total: "+1,550.00", currency: "EUR",     receiver: "-",           status: "Success" },
  { date: "07-08-2021 7:56 AM",  user: "Kyla watson",  type: "Exchange From",    amount: 155.00,   fees: 1.19,     total: "-156.19",   currency: "USD",     receiver: "-",           status: "Success" },
];

const STATUS_COLORS: Record<string, string> = {
  Pending: "bg-blue-500",
  Success: "bg-green-600",
  Failed: "bg-red-600",
};

export default function AdminTransactionsPage() {
  const [search, setSearch] = useState("");
  const [showEntries, setShowEntries] = useState(25);
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [currencyFilter, setCurrencyFilter] = useState("All");

  const filtered = TRANSACTIONS.filter(t => {
    const matchSearch = `${t.user} ${t.type}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || t.status === statusFilter;
    const matchType = typeFilter === "All" || t.type === typeFilter;
    const matchCurrency = currencyFilter === "All" || t.currency === currencyFilter;
    return matchSearch && matchStatus && matchType && matchCurrency;
  });

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [transactionToView, setTransactionToView] = useState<any>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState<any>(null);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState<any>(null);

  const handleExportCSV = () => {
    const headers = ["Date", "User", "Type", "Amount", "Fees", "Total", "Currency", "Receiver", "Status"];
    const rows = filtered.map(t => [
      t.date, t.user, t.type, t.amount.toFixed(2), t.fees > 0 ? t.fees.toFixed(2) : "-", t.total, t.currency, t.receiver, t.status
    ]);
    exportToCSV("transactions", headers, rows);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Filters Bar */}
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
              <select value={currencyFilter} onChange={e => setCurrencyFilter(e.target.value)} className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
                <option>All</option>
                <option>USD</option>
                <option>GBP</option>
                <option>EUR</option>
                <option>DOGETEST</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 w-32">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Status</label>
            <div className="relative">
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
                <option>All</option>
                <option>Pending</option>
                <option>Success</option>
                <option>Failed</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 w-36">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Type</label>
            <div className="relative">
              <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
                <option>All</option>
                <option>Deposit</option>
                <option>Transfer</option>
                <option>Exchange To</option>
                <option>Exchange From</option>
                <option>Crypto Sent</option>
                <option>Crypto Received</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 flex-1 min-w-[140px]">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">User</label>
            <input type="text" placeholder="Enter Name" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 text-sm" />
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shrink-0">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-white/5 gap-4">
          <h2 className="text-lg font-bold text-white">All Transactions</h2>
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
            <div className="relative">
              <select value={showEntries} onChange={e => setShowEntries(Number(e.target.value))} className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 pr-8 focus:outline-none focus:border-primary/50 appearance-none cursor-pointer text-sm">
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
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
                <th className="px-5 py-3 font-medium">User</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Fees</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Currency</th>
                <th className="px-5 py-3 font-medium">Receiver</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.slice(0, showEntries).map((tx, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-3 text-primary text-xs whitespace-nowrap">{tx.date}</td>
                  <td className="px-5 py-3 text-primary cursor-pointer hover:underline whitespace-nowrap">{tx.user}</td>
                  <td className="px-5 py-3 text-gray-300 whitespace-nowrap">{tx.type}</td>
                  <td className="px-5 py-3 text-gray-300 font-mono">{tx.amount.toFixed(2)}</td>
                  <td className="px-5 py-3 text-gray-400 font-mono">{tx.fees > 0 ? tx.fees.toFixed(2) : "-"}</td>
                  <td className={`px-5 py-3 font-mono font-semibold ${tx.total.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                    {tx.total}
                  </td>
                  <td className="px-5 py-3 text-gray-300">{tx.currency}</td>
                  <td className="px-5 py-3 text-primary cursor-pointer hover:underline whitespace-nowrap">{tx.receiver}</td>
                  <td className="px-5 py-3">
                    <span className={`${STATUS_COLORS[tx.status]} text-white text-xs px-2.5 py-1 rounded-sm font-medium`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => { setTransactionToView(tx); setIsViewOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setTransactionToEdit(tx); setIsEditOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setTransactionToDelete(tx); setIsDeleteOpen(true); }}
                        className="w-7 h-7 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-t border-white/5 gap-4">
          <p className="text-sm text-gray-400">
            Showing 1 to {Math.min(filtered.length, showEntries)} of {filtered.length} entries (filtered from {TRANSACTIONS.length} total)
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded hover:border-white/20 transition-colors">Previous</button>
            <button className="px-3 py-1.5 text-sm bg-primary text-white rounded font-medium">1</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded hover:border-white/20 transition-colors">2</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded hover:border-white/20 transition-colors">3</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded hover:border-white/20 transition-colors">4</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded hover:border-white/20 transition-colors">Next</button>
          </div>
        </div>
      </div>

      {/* View Modal */}
      {isViewOpen && transactionToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Transaction Details</h2>
              <button onClick={() => setIsViewOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Date</p>
                  <p className="text-sm text-white font-medium">{transactionToView.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">User</p>
                  <p className="text-sm text-primary font-medium">{transactionToView.user}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Type</p>
                  <p className="text-sm text-white font-medium">{transactionToView.type}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Currency</p>
                  <p className="text-sm text-white font-medium">{transactionToView.currency}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Receiver</p>
                  <p className="text-sm text-primary font-medium">{transactionToView.receiver}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Status</p>
                  <span className={`${STATUS_COLORS[transactionToView.status]} text-white text-xs px-2.5 py-1 rounded-sm font-medium inline-block mt-1`}>
                    {transactionToView.status}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-white/5 pt-4 mt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Amount</span>
                    <span className="text-white font-mono">{transactionToView.amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Fees</span>
                    <span className="text-red-400 font-mono">{transactionToView.fees > 0 ? transactionToView.fees.toFixed(2) : "-"}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold pt-2 border-t border-white/5">
                    <span className="text-white">Total</span>
                    <span className={`${transactionToView.total.startsWith("+") ? "text-green-400" : "text-red-400"} font-mono`}>
                      {transactionToView.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end">
              <button onClick={() => setIsViewOpen(false)} className="px-5 py-2.5 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal (Mock) */}
      {isEditOpen && transactionToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Edit Transaction</h2>
              <button onClick={() => setIsEditOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Status</label>
                <select defaultValue={transactionToEdit.status} className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50">
                  <option>Pending</option>
                  <option>Success</option>
                  <option>Failed</option>
                </select>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setIsEditOpen(false)} className="px-5 py-2.5 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">Cancel</button>
              <button onClick={() => setIsEditOpen(false)} className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteOpen && transactionToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Delete Transaction?</h2>
              <p className="text-sm text-gray-400">Are you sure you want to delete this transaction? This action cannot be undone.</p>
            </div>
            <div className="p-6 border-t border-white/5 flex gap-3">
              <button onClick={() => setIsDeleteOpen(false)} className="flex-1 px-5 py-2.5 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">Cancel</button>
              <button onClick={() => setIsDeleteOpen(false)} className="flex-1 px-5 py-2.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
