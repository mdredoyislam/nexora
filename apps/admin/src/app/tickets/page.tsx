"use client";

import { useState } from "react";
import { ChevronDown, Filter, Pencil, Trash2, Plus, Eye, FileText } from "lucide-react";
import { exportToCSV, exportToPDF } from "@/lib/export";

const TICKETS = [
  { date: "20-08-2021 7:56 AM", user: "Kyla watson", subject: "New Tickets",           status: "Open", priority: "Normal", lastReply: "20-08-2021 7:56 AM" },
  { date: "21-08-2021 7:56 AM", user: "Kyla watson", subject: "Issues on product color", status: "Hold", priority: "Normal", lastReply: "21-08-2021 7:56 AM" },
  { date: "22-08-2021 7:56 AM", user: "Irish watson", subject: "New Ticket",           status: "Open", priority: "Low",    lastReply: "22-08-2021 7:56 AM" },
];

const STATUS_COLORS: Record<string, string> = {
  Open: "bg-green-600",
  Hold: "bg-orange-500",
  Closed: "bg-red-600",
  "In Progress": "bg-blue-500",
};

export default function AdminTicketsPage() {
  const [search, setSearch] = useState("");

  const filtered = TICKETS.filter(t =>
    `${t.subject} ${t.user}`.toLowerCase().includes(search.toLowerCase())
  );

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [ticketToView, setTicketToView] = useState<any>(null);
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [ticketToEdit, setTicketToEdit] = useState<any>(null);
  
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [ticketToDelete, setTicketToDelete] = useState<any>(null);

  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleExportCSV = () => {
    const headers = ["Date", "User", "Subject", "Status", "Priority", "Last Reply"];
    const rows = filtered.map(t => [
      t.date, t.user, `"${t.subject}"`, t.status, t.priority, t.lastReply
    ]);
    exportToCSV("tickets", headers, rows);
  };

  const counts = {
    Open: TICKETS.filter(t => t.status === "Open").length,
    InProgress: TICKETS.filter(t => t.status === "In Progress").length,
    Hold: TICKETS.filter(t => t.status === "Hold").length,
    Closed: TICKETS.filter(t => t.status === "Closed").length,
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Filter */}
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
                <option>Open</option>
                <option>Hold</option>
                <option>In Progress</option>
                <option>Closed</option>
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

      {/* Title + Add Button */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-white">Tickets</h2>
        <div className="flex items-center gap-2">
          <button onClick={handleExportCSV} className="px-3 py-2 text-xs font-medium border border-white/10 rounded-lg text-gray-300 hover:border-primary/50 hover:text-white transition-colors flex items-center gap-1.5">
            <FileText className="w-3 h-3" /> CSV
          </button>
          <button onClick={exportToPDF} className="px-3 py-2 text-xs font-medium border border-white/10 rounded-lg text-gray-300 hover:border-primary/50 hover:text-white transition-colors flex items-center gap-1.5">
            <FileText className="w-3 h-3" /> PDF
          </button>
          <button onClick={() => setIsAddOpen(true)} className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ml-2">
            <Plus className="w-4 h-4" /> Add Ticket
          </button>
        </div>
      </div>

      {/* Status Summary */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-6">
        <div className="flex justify-around">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{counts.Open}</p>
            <p className="text-sm text-primary">Open</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">{counts.InProgress}</p>
            <p className="text-sm text-blue-400">In Progress</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-400">{counts.Hold}</p>
            <p className="text-sm text-orange-400">Hold</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-400">{counts.Closed}</p>
            <p className="text-sm text-red-400">Closed</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 pb-4 pt-5 gap-4">
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
                <th className="px-5 py-3 font-medium">User</th>
                <th className="px-5 py-3 font-medium">Subject</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Priority</th>
                <th className="px-5 py-3 font-medium">Last Reply</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((t, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 text-primary text-xs whitespace-nowrap">{t.date}</td>
                  <td className="px-5 py-4 text-primary cursor-pointer hover:underline whitespace-nowrap">{t.user}</td>
                  <td className="px-5 py-4 text-primary cursor-pointer hover:underline">{t.subject}</td>
                  <td className="px-5 py-4">
                    <span className={`${STATUS_COLORS[t.status]} text-white text-xs px-2.5 py-1 rounded-sm font-medium`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-300">{t.priority}</td>
                  <td className="px-5 py-4 text-gray-400 text-xs whitespace-nowrap">{t.lastReply}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => { setTicketToView(t); setIsViewOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setTicketToEdit(t); setIsEditOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Edit Ticket"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setTicketToDelete(t); setIsDeleteOpen(true); }}
                        className="w-7 h-7 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Delete Ticket"
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

      {/* Add Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Add New Ticket</h2>
              <button onClick={() => setIsAddOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Subject</label>
                <input type="text" placeholder="Enter subject" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">User</label>
                <input type="text" placeholder="Enter user name" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">Status</label>
                  <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50">
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Hold</option>
                    <option>Closed</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">Priority</label>
                  <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50">
                    <option>Low</option>
                    <option>Normal</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setIsAddOpen(false)} className="px-5 py-2.5 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">Cancel</button>
              <button onClick={() => setIsAddOpen(false)} className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">Add Ticket</button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {isViewOpen && ticketToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Ticket Details</h2>
              <button onClick={() => setIsViewOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Date</p>
                  <p className="text-sm text-white font-medium">{ticketToView.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">User</p>
                  <p className="text-sm text-primary font-medium">{ticketToView.user}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-400 mb-1">Subject</p>
                  <p className="text-sm text-white font-medium">{ticketToView.subject}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Priority</p>
                  <p className="text-sm text-white font-medium">{ticketToView.priority}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Last Reply</p>
                  <p className="text-sm text-white font-medium">{ticketToView.lastReply}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Status</p>
                  <span className={`${STATUS_COLORS[ticketToView.status]} text-white text-xs px-2.5 py-1 rounded-sm font-medium inline-block mt-1`}>
                    {ticketToView.status}
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

      {/* Edit Modal (Mock) */}
      {isEditOpen && ticketToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Edit Ticket</h2>
              <button onClick={() => setIsEditOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Subject</label>
                <input type="text" defaultValue={ticketToEdit.subject} className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Status</label>
                <select defaultValue={ticketToEdit.status} className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50">
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Hold</option>
                  <option>Closed</option>
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
      {isDeleteOpen && ticketToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Delete Ticket?</h2>
              <p className="text-sm text-gray-400">Are you sure you want to delete this ticket? This action cannot be undone.</p>
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
