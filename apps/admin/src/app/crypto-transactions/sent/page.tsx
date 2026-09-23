"use client";

import { useState } from "react";
import { ChevronDown, Copy, Check, Eye, Filter, FileText, Pencil, Trash2 } from "lucide-react";
import { exportToCSV, exportToPDF } from "@/lib/export";

const SENT_TXS = [
  { date: "20-08-2022 6:19 PM", sender: "-",                amount: "0.00030", fees: "0.00000", total: "-0.00034", currency: "LTCTEST", receiver: "Brynn Floyd",     status: "Success" },
  { date: "20-08-2022 6:18 PM", sender: "-",                amount: "0.00030", fees: "0.00000", total: "-0.00034", currency: "LTCTEST", receiver: "Brynn Floyd",     status: "Success" },
  { date: "20-08-2022 6:04 PM", sender: "Brynn Floyd",      amount: "0.00030", fees: "0.00000", total: "-0.00042", currency: "LTCTEST", receiver: "-",             status: "Success" },
  { date: "20-08-2022 5:50 PM", sender: "-",                amount: "0.00200", fees: "0.00000", total: "-0.00212", currency: "LTCTEST", receiver: "Brynn Floyd",     status: "Success" },
  { date: "20-08-2022 4:33 PM", sender: "Imtiaze Techvill", amount: "0.00020", fees: "0.00000", total: "-0.00027", currency: "LTCTEST", receiver: "Sufian Techvill", status: "Success" },
  { date: "20-08-2022 4:27 PM", sender: "Sufian Techvill",  amount: "0.00030", fees: "0.00000", total: "-0.00034", currency: "LTCTEST", receiver: "Imtiaze Techvill",status: "Success" },
  { date: "20-08-2022 4:14 PM", sender: "-",                amount: "0.00100", fees: "0.00000", total: "-0.00107", currency: "LTCTEST", receiver: "Sufian Techvill", status: "Success" },
];

export default function AdminCryptoSentPage() {
  const [search, setSearch] = useState("");

  const filtered = SENT_TXS.filter(t =>
    `${t.sender} ${t.receiver} ${t.currency}`.toLowerCase().includes(search.toLowerCase())
  );

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [transactionToView, setTransactionToView] = useState<any>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState<any>(null);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState<any>(null);

  const handleExportCSV = () => {
    const headers = ["Date", "Sender", "Amount", "Fees", "Total", "Currency", "Receiver", "Status"];
    const rows = filtered.map(t => [
      t.date, t.sender, t.amount, t.fees, t.total, t.currency, t.receiver, t.status
    ]);
    exportToCSV("crypto_sent_transactions", headers, rows);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Filter Bar */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-5">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="space-y-1.5 flex-1 min-w-[160px]">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Date Range</label>
            <div className="relative">
              <input type="text" placeholder="Pick a date range" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none text-sm pl-10" />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
            </div>
          </div>
          <div className="space-y-1.5 w-36">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Crypto Currency</label>
            <div className="relative">
              <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none text-sm appearance-none">
                <option>All</option>
                <option>LTCTEST</option>
                <option>BTC</option>
                <option>DOGETEST</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 w-32">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Status</label>
            <div className="relative">
              <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none text-sm appearance-none">
                <option>All</option>
                <option>Success</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 flex-1 min-w-[140px]">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">User</label>
            <input type="text" placeholder="Enter Name" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none text-sm" />
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shrink-0">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-white/5 gap-4">
          <h2 className="text-lg font-bold text-white">All Crypto Sent Transactions</h2>
          <div className="flex items-center gap-2">
            <button onClick={handleExportCSV} className="px-3 py-1.5 text-xs font-medium border border-white/10 rounded text-gray-300 hover:text-white hover:border-primary/50 transition-colors flex items-center gap-1.5">
              <FileText className="w-3 h-3" /> CSV
            </button>
            <button onClick={exportToPDF} className="px-3 py-1.5 text-xs font-medium border border-white/10 rounded text-gray-300 hover:text-white hover:border-primary/50 transition-colors flex items-center gap-1.5">
              <FileText className="w-3 h-3" /> PDF
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 pb-4 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Show
            <select className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 pr-8 focus:outline-none text-sm">
              <option>25</option>
              <option>50</option>
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
                <th className="px-5 py-3 font-medium whitespace-nowrap"><div className="flex items-center gap-1">Date <ChevronDown className="w-3 h-3" /></div></th>
                <th className="px-5 py-3 font-medium">Sender</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Fees</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Crypto Currency</th>
                <th className="px-5 py-3 font-medium">Receiver</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((t, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-3 text-primary text-xs whitespace-nowrap">{t.date}</td>
                  <td className="px-5 py-3 text-primary cursor-pointer hover:underline whitespace-nowrap">{t.sender}</td>
                  <td className="px-5 py-3 text-gray-300 font-mono">{t.amount}</td>
                  <td className="px-5 py-3 text-gray-300 font-mono">{t.fees}</td>
                  <td className="px-5 py-3 font-mono text-red-400">{t.total}</td>
                  <td className="px-5 py-3 text-gray-300">{t.currency}</td>
                  <td className="px-5 py-3 text-primary cursor-pointer hover:underline whitespace-nowrap">{t.receiver}</td>
                  <td className="px-5 py-3">
                    <span className="bg-green-600 text-white text-xs px-2.5 py-1 rounded-sm font-medium">{t.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => { setTransactionToView(t); setIsViewOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setTransactionToEdit(t); setIsEditOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setTransactionToDelete(t); setIsDeleteOpen(true); }}
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
          <p className="text-sm text-gray-400">Showing 1 to {filtered.length} of {filtered.length} entries</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded">Previous</button>
            <button className="px-3 py-1.5 text-sm bg-primary text-white rounded font-medium">1</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded">Next</button>
          </div>
        </div>
      </div>

      {/* View Modal */}
      {isViewOpen && transactionToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Crypto Transaction Details</h2>
              <button onClick={() => setIsViewOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Date</p>
                  <p className="text-sm text-white font-medium">{transactionToView.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Sender</p>
                  <p className="text-sm text-primary font-medium">{transactionToView.sender}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Receiver</p>
                  <p className="text-sm text-primary font-medium">{transactionToView.receiver}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Currency</p>
                  <p className="text-sm text-white font-medium">{transactionToView.currency}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Status</p>
                  <span className={`bg-green-600 text-white text-xs px-2.5 py-1 rounded-sm font-medium inline-block mt-1`}>
                    {transactionToView.status}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-white/5 pt-4 mt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Amount</span>
                    <span className="text-white font-mono">{transactionToView.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Fees</span>
                    <span className="text-gray-300 font-mono">{transactionToView.fees}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold pt-2 border-t border-white/5">
                    <span className="text-white">Total</span>
                    <span className="text-red-400 font-mono">{transactionToView.total}</span>
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

      {/* Edit Modal */}
      {isEditOpen && transactionToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Edit Crypto Sent Transaction</h2>
              <button onClick={() => setIsEditOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Status</label>
                <select defaultValue={transactionToEdit.status} className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50">
                  <option>Success</option>
                  <option>Pending</option>
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
              <p className="text-sm text-gray-400">Are you sure you want to delete this sent transaction? This action cannot be undone.</p>
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
