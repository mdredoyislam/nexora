"use client";

import { useState } from "react";
import { ChevronDown, Filter, FileText, Pencil, Eye, Trash2 } from "lucide-react";

const VERIFICATIONS = [
  { date: "23-08-2021 3:04 PM", user: "Irish watson", identityType: "Passport", identityNumber: "95681537", status: "Approved" },
];

const STATUS_COLORS: Record<string, string> = {
  Approved: "bg-green-600",
  Pending: "bg-orange-500",
  Rejected: "bg-red-600",
};

export default function AdminVerificationsPage() {
  const [search, setSearch] = useState("");

  const filtered = VERIFICATIONS.filter(v =>
    `${v.user} ${v.identityType}`.toLowerCase().includes(search.toLowerCase())
  );

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [itemToView, setItemToView] = useState<any>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<any>(null);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<any>(null);

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
          <div className="space-y-1.5 w-32">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Status</label>
            <div className="relative">
              <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none text-sm appearance-none">
                <option>All</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Rejected</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shrink-0">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-white/5 gap-4">
          <h2 className="text-lg font-bold text-white">All Identity Verifications</h2>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs font-medium border border-white/10 rounded text-gray-300 hover:text-white transition-colors flex items-center gap-1.5">
              <FileText className="w-3 h-3" /> CSV
            </button>
            <button className="px-3 py-1.5 text-xs font-medium border border-white/10 rounded text-gray-300 hover:text-white transition-colors flex items-center gap-1.5">
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
                <th className="px-5 py-3 font-medium"><div className="flex items-center gap-1">Date <ChevronDown className="w-3 h-3" /></div></th>
                <th className="px-5 py-3 font-medium">User</th>
                <th className="px-5 py-3 font-medium">Identity Type</th>
                <th className="px-5 py-3 font-medium">Identity Number</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((v, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 text-primary text-xs whitespace-nowrap">{v.date}</td>
                  <td className="px-5 py-4 text-primary cursor-pointer hover:underline">{v.user}</td>
                  <td className="px-5 py-4 text-gray-300">{v.identityType}</td>
                  <td className="px-5 py-4 text-gray-300 font-mono">{v.identityNumber}</td>
                  <td className="px-5 py-4">
                    <span className={`${STATUS_COLORS[v.status]} text-white text-xs px-2.5 py-1 rounded-sm font-medium`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => { setItemToView(v); setIsViewOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setItemToEdit(v); setIsEditOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setItemToDelete(v); setIsDeleteOpen(true); }}
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
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">Previous</button>
            <button className="px-3 py-1.5 text-sm bg-primary text-white rounded font-medium">1</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">Next</button>
          </div>
        </div>
      </div>

      {/* View Modal */}
      {isViewOpen && itemToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Identity Verification Details</h2>
              <button onClick={() => setIsViewOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Date</p>
                  <p className="text-sm text-white font-medium">{itemToView.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">User</p>
                  <p className="text-sm text-primary font-medium">{itemToView.user}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Identity Type</p>
                  <p className="text-sm text-white font-medium">{itemToView.identityType}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Identity Number</p>
                  <p className="text-sm text-white font-medium">{itemToView.identityNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Status</p>
                  <span className={`${STATUS_COLORS[itemToView.status]} text-white text-xs px-2.5 py-1 rounded-sm font-medium inline-block mt-1`}>
                    {itemToView.status}
                  </span>
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
      {isEditOpen && itemToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Edit Verification Status</h2>
              <button onClick={() => setIsEditOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Status</label>
                <select defaultValue={itemToEdit.status} className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50">
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>Rejected</option>
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
      {isDeleteOpen && itemToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Delete Verification?</h2>
              <p className="text-sm text-gray-400">Are you sure you want to delete this verification record? This action cannot be undone.</p>
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
