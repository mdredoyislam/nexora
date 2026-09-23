"use client";

import { useState, useRef } from "react";
import { Pencil, ChevronDown, Filter, FileText, Trash2, Eye, Plus, Upload, Image as ImageIcon } from "lucide-react";

const MERCHANTS = [
  {
    id: 1,
    date: "18-08-2021 7:56 AM",
    merchantId: "LDWOFPPW6YEOJ",
    type: "express",
    name: "Berger",
    user: "Irish watson",
    url: "http://berger.com",
    group: "Silver",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Berger_Paints_logo.svg/200px-Berger_Paints_logo.svg.png",
    status: "Disapproved",
  },
  {
    id: 2,
    date: "19-08-2021 7:56 AM",
    merchantId: "Z3IKX4CNC2ULK",
    type: "standard",
    name: "Flipkart",
    user: "Irish watson",
    url: "http://www.flipkart.com",
    group: "Silver",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Online_shoping_through_Flipkart.png/220px-Online_shoping_through_Flipkart.png",
    status: "Approved",
  },
  {
    id: 3,
    date: "20-08-2021 7:56 AM",
    merchantId: "J7OJ4STR4ZMXJ",
    type: "standard",
    name: "eBay",
    user: "Irish watson",
    url: "http://eBay.com",
    group: "Silver",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/200px-EBay_logo.svg.png",
    status: "Approved",
  },
  {
    id: 4,
    date: "21-08-2021 7:56 AM",
    merchantId: "X43BS17Y7PL81",
    type: "standard",
    name: "Amazon",
    user: "Irish watson",
    url: "http://amazon.com",
    group: "Silver",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
    status: "Moderation",
  },
];

const STATUS_COLORS: Record<string, string> = {
  Approved: "bg-green-600",
  Disapproved: "bg-red-600",
  Moderation: "bg-blue-500",
  Pending: "bg-orange-500",
};

export default function AdminMerchantsPage() {
  const [merchants, setMerchants] = useState(MERCHANTS);
  const [search, setSearch] = useState("");
  const [showEntries, setShowEntries] = useState(25);
  const [statusFilter, setStatusFilter] = useState("All");
  const [userFilter, setUserFilter] = useState("");
  const [dateRange, setDateRange] = useState("");

  const [isAddMerchantOpen, setIsAddMerchantOpen] = useState(false);
  const [newMerchant, setNewMerchant] = useState<any>({
    name: "", user: "", url: "", type: "standard", logo: ""
  });
  const [isEditMerchantOpen, setIsEditMerchantOpen] = useState(false);
  const [merchantToEdit, setMerchantToEdit] = useState<any>(null);
  const [isViewMerchantOpen, setIsViewMerchantOpen] = useState(false);
  const [merchantToView, setMerchantToView] = useState<any>(null);
  const [isDeleteMerchantOpen, setIsDeleteMerchantOpen] = useState(false);
  const [merchantToDelete, setMerchantToDelete] = useState<any>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);

  const filtered = merchants.filter(m => {
    const matchSearch = `${m.name} ${m.merchantId} ${m.user}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || m.status === statusFilter;
    const matchUser = userFilter === "" || m.user.toLowerCase().includes(userFilter.toLowerCase());
    return matchSearch && matchStatus && matchUser;
  });

  const handleDelete = () => {
    if (merchantToDelete) {
      setMerchants(merchants.filter(m => m.id !== merchantToDelete.id));
      setIsDeleteMerchantOpen(false);
      setMerchantToDelete(null);
    }
  };

  const handleEditSave = () => {
    if (merchantToEdit) {
      setMerchants(merchants.map(m => (m.id === merchantToEdit.id ? merchantToEdit : m)));
      setIsEditMerchantOpen(false);
      setMerchantToEdit(null);
    }
  };

  const handleAddMerchant = () => {
    if (newMerchant.name && newMerchant.user) {
      const newId = Math.max(...merchants.map(m => m.id)) + 1;
      const merchantToAdd = {
        ...newMerchant,
        id: newId,
        merchantId: Math.random().toString(36).substring(2, 15).toUpperCase(),
        date: new Date().toLocaleString('en-GB').replace(',', ''),
        group: "Standard",
        status: "Pending"
      };
      setMerchants([merchantToAdd, ...merchants]);
      setIsAddMerchantOpen(false);
      setNewMerchant({ name: "", user: "", url: "", type: "standard", logo: "" });
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isEdit) {
          setMerchantToEdit({ ...merchantToEdit, logo: reader.result });
        } else {
          setNewMerchant({ ...newMerchant, logo: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExportCSV = () => {
    const headers = ["ID", "Date", "Name", "User", "Type", "Group", "Status", "URL"];
    const csvContent = [
      headers.join(","),
      ...filtered.map(m => [
        m.merchantId,
        m.date,
        `"${m.name}"`,
        `"${m.user}"`,
        m.type,
        m.group,
        m.status,
        `"${m.url}"`
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "merchants_export.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Merchants</h1>
        <button
          onClick={() => setIsAddMerchantOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          + Add Merchant
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-5">
        <div className="flex flex-col lg:flex-row gap-4 items-end">
          <div className="space-y-1.5 flex-1">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Date Range</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Pick a date range"
                value={dateRange}
                onChange={e => setDateRange(e.target.value)}
                className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 text-sm pl-10"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
            </div>
          </div>
          <div className="space-y-1.5 w-36">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">Status</label>
            <div className="relative">
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none"
              >
                <option>All</option>
                <option>Approved</option>
                <option>Disapproved</option>
                <option>Moderation</option>
              </select>
              <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 flex-1">
            <label className="text-xs text-gray-400 uppercase tracking-wider font-medium">User</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={userFilter}
              onChange={e => setUserFilter(e.target.value)}
              className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 text-sm"
            />
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shrink-0">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-white/5 gap-4">
          <h2 className="text-lg font-bold text-white">All Merchants</h2>
          <div className="flex items-center gap-2">
            <button onClick={handleExportCSV} className="px-3 py-1.5 text-xs font-medium border border-white/10 rounded text-gray-300 hover:border-primary/50 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
              <FileText className="w-3 h-3" /> CSV
            </button>
            <button onClick={handleExportPDF} className="px-3 py-1.5 text-xs font-medium border border-white/10 rounded text-gray-300 hover:border-primary/50 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
              <FileText className="w-3 h-3" /> PDF
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 pb-4 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Show
            <div className="relative">
              <select
                value={showEntries}
                onChange={e => setShowEntries(Number(e.target.value))}
                className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 pr-8 focus:outline-none focus:border-primary/50 appearance-none cursor-pointer text-sm"
              >
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
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 focus:outline-none focus:border-primary/50 w-48 text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="px-5 py-3 font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">Date <ChevronDown className="w-3 h-3" /></div>
                </th>
                <th className="px-5 py-3 font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">ID <ChevronDown className="w-3 h-3" /></div>
                </th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">
                  <div className="flex items-center gap-1">Name <ChevronDown className="w-3 h-3" /></div>
                </th>
                <th className="px-5 py-3 font-medium">User</th>
                <th className="px-5 py-3 font-medium">Url</th>
                <th className="px-5 py-3 font-medium">Group</th>
                <th className="px-5 py-3 font-medium">Logo</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map(merchant => (
                <tr key={merchant.id} className="hover:bg-white/5 transition-colors align-middle">
                  <td className="px-5 py-4 text-primary text-xs whitespace-nowrap">{merchant.date}</td>
                  <td className="px-5 py-4 text-primary font-mono text-xs whitespace-nowrap">{merchant.merchantId}</td>
                  <td className="px-5 py-4 text-gray-400 text-xs">{merchant.type}</td>
                  <td className="px-5 py-4 text-primary font-medium cursor-pointer hover:underline">{merchant.name}</td>
                  <td className="px-5 py-4 text-primary cursor-pointer hover:underline whitespace-nowrap">{merchant.user}</td>
                  <td className="px-5 py-4 text-gray-400 text-xs max-w-[140px] truncate">{merchant.url}</td>
                  <td className="px-5 py-4 text-gray-300">{merchant.group}</td>
                  <td className="px-5 py-4">
                    <div className="w-16 h-10 rounded overflow-hidden bg-white/5 flex items-center justify-center p-1 relative group">
                      {merchant.logo ? (
                        <img
                          src={merchant.logo}
                          alt={merchant.name}
                          className="max-w-full max-h-full object-contain"
                          onError={e => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).parentElement?.classList.add('flex', 'items-center', 'justify-center');
                            (e.target as HTMLImageElement).insertAdjacentHTML('afterend', '<div class="text-gray-500 flex flex-col items-center"><svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></div>');
                          }}
                        />
                      ) : (
                        <ImageIcon className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`${STATUS_COLORS[merchant.status]} text-white text-xs px-2.5 py-1 rounded-sm font-medium`}>
                      {merchant.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => { setMerchantToView(merchant); setIsViewMerchantOpen(true); }}
                        className="w-7 h-7 bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white rounded flex items-center justify-center transition-colors"
                        title="View Merchant"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setMerchantToEdit(merchant); setIsEditMerchantOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Edit Merchant"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setMerchantToDelete(merchant); setIsDeleteMerchantOpen(true); }}
                        className="w-7 h-7 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Delete Merchant"
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

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-t border-white/5 gap-4">
          <p className="text-sm text-gray-400">
            Showing 1 to {Math.min(filtered.length, showEntries)} of {filtered.length} entries
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded hover:border-white/20 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1.5 text-sm bg-primary text-white rounded font-medium">
              1
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded hover:border-white/20 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
      {/* Add Merchant Modal */}
      {isAddMerchantOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Add New Merchant</h2>
              <button onClick={() => setIsAddMerchantOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Merchant Name *</label>
                <input 
                  type="text" 
                  value={newMerchant.name}
                  onChange={e => setNewMerchant({...newMerchant, name: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">User *</label>
                <input 
                  type="text" 
                  value={newMerchant.user}
                  onChange={e => setNewMerchant({...newMerchant, user: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">URL</label>
                <input 
                  type="url" 
                  value={newMerchant.url}
                  onChange={e => setNewMerchant({...newMerchant, url: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Type</label>
                <select 
                  value={newMerchant.type}
                  onChange={e => setNewMerchant({...newMerchant, type: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm"
                >
                  <option>standard</option>
                  <option>express</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Merchant Logo</label>
                <div className="flex items-center gap-4">
                  {newMerchant.logo && (
                    <div className="w-16 h-16 rounded bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img src={newMerchant.logo} alt="Logo preview" className="max-w-full max-h-full object-contain p-1" />
                    </div>
                  )}
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-[#161722] border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-primary/50 transition-colors flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    {newMerchant.logo ? 'Change Logo' : 'Upload Logo'}
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={e => handleLogoUpload(e, false)} 
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setIsAddMerchantOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors">
                Cancel
              </button>
              <button onClick={handleAddMerchant} className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors">
                Create Merchant
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Merchant Modal */}
      {isEditMerchantOpen && merchantToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Edit Merchant</h2>
              <button onClick={() => setIsEditMerchantOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Merchant Name *</label>
                <input 
                  type="text" 
                  value={merchantToEdit.name}
                  onChange={(e) => setMerchantToEdit({...merchantToEdit, name: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">User *</label>
                <input 
                  type="text" 
                  value={merchantToEdit.user}
                  onChange={(e) => setMerchantToEdit({...merchantToEdit, user: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">URL</label>
                <input 
                  type="url" 
                  value={merchantToEdit.url}
                  onChange={(e) => setMerchantToEdit({...merchantToEdit, url: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Status</label>
                <select 
                  value={merchantToEdit.status}
                  onChange={(e) => setMerchantToEdit({...merchantToEdit, status: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm"
                >
                  <option>Approved</option>
                  <option>Disapproved</option>
                  <option>Moderation</option>
                  <option>Pending</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Merchant Logo</label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                    {merchantToEdit.logo ? (
                      <img src={merchantToEdit.logo} alt="Logo preview" className="max-w-full max-h-full object-contain p-1" onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                  <button 
                    onClick={() => editFileInputRef.current?.click()}
                    className="px-4 py-2 bg-[#161722] border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-primary/50 transition-colors flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Change Logo
                  </button>
                  <input 
                    type="file" 
                    ref={editFileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={e => handleLogoUpload(e, true)} 
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setIsEditMerchantOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors">
                Cancel
              </button>
              <button onClick={handleEditSave} className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteMerchantOpen && merchantToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Delete Merchant</h2>
              <p className="text-gray-400 text-sm">
                Are you sure you want to delete <span className="text-white font-medium">{merchantToDelete.name}</span>? This action cannot be undone.
              </p>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-center gap-3">
              <button onClick={() => setIsDeleteMerchantOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors flex-1">
                Cancel
              </button>
              <button onClick={handleDelete} className="px-5 py-2.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Merchant Modal */}
      {isViewMerchantOpen && merchantToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Merchant Details</h2>
              <button onClick={() => setIsViewMerchantOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded bg-white flex items-center justify-center p-1 border border-white/10">
                  <img src={merchantToView.logo} alt={merchantToView.name} className="max-w-full max-h-full object-contain" onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{merchantToView.name}</h3>
                  <p className="text-primary font-mono text-sm">{merchantToView.merchantId}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <p className="text-sm text-gray-400 mb-1">User</p>
                  <p className="text-white font-medium">{merchantToView.user}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Type</p>
                  <p className="text-white font-medium">{merchantToView.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">URL</p>
                  <p className="text-blue-400 hover:underline cursor-pointer font-medium">{merchantToView.url}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Group</p>
                  <p className="text-white font-medium">{merchantToView.group}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Status</p>
                  <span className={`${STATUS_COLORS[merchantToView.status]} text-white text-xs px-2.5 py-0.5 rounded-sm font-medium inline-block mt-1`}>
                    {merchantToView.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Date Created</p>
                  <p className="text-white font-medium">{merchantToView.date}</p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end">
              <button onClick={() => setIsViewMerchantOpen(false)} className="px-5 py-2.5 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
