"use client";

import { useState, useRef } from "react";
import { Pencil, Trash2, ChevronDown, Plus, Eye, Upload, Image as ImageIcon } from "lucide-react";

const ADMINS = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    phone: "-",
    email: "john.doe@gmail.com",
    group: "Super Admin",
    lastLogin: "3 hours ago",
    ip: "103.197.152.79",
    status: "Active",
    badges: [],
  },
  {
    id: 2,
    firstName: "Mahfuza",
    lastName: "Sinthy",
    phone: "-",
    email: "mahfuzasinthy@gmail.com",
    group: "Super Admin",
    lastLogin: "-",
    ip: "-",
    status: "Suspended",
    badges: [],
  },
  {
    id: 3,
    firstName: "Kyla",
    lastName: "watson",
    phone: "+12015556987",
    email: "kyla@gmail.com",
    group: "Super Admin",
    lastLogin: "19 hours ago",
    ip: "103.197.152.79",
    status: "Active",
    badges: [],
  },
  {
    id: 4,
    firstName: "Irish",
    lastName: "watson",
    phone: "-",
    email: "irish@gmail.com",
    group: "Moderator",
    lastLogin: "7 minutes ago",
    ip: "103.197.152.79",
    status: "Active",
    badges: ["Identity Verified", "Address Verified"],
  },
  {
    id: 5,
    firstName: "Mary",
    lastName: "Row",
    phone: "-",
    email: "borna.techvill@gmail.com",
    group: "Super Admin",
    lastLogin: "-",
    ip: "-",
    status: "Inactive",
    badges: [],
  },
];

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-green-600",
  Suspended: "bg-orange-500",
  Inactive: "bg-red-600",
};

const BADGE_COLORS: Record<string, string> = {
  "Identity Verified": "bg-blue-500",
  "Address Verified": "bg-teal-500",
};

export default function AdminAdminsPage() {
  const [admins, setAdmins] = useState(ADMINS);
  const [search, setSearch] = useState("");
  const [showEntries, setShowEntries] = useState(25);
  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState<any>({
    firstName: "", lastName: "", email: "", password: "", group: "Super Admin", profileImage: ""
  });
  const [isEditAdminOpen, setIsEditAdminOpen] = useState(false);
  const [adminToEdit, setAdminToEdit] = useState<any>(null);
  const [isDeleteAdminOpen, setIsDeleteAdminOpen] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState<any>(null);
  const [isViewAdminOpen, setIsViewAdminOpen] = useState(false);
  const [adminToView, setAdminToView] = useState<any>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);

  const filtered = admins.filter(a =>
    `${a.firstName} ${a.lastName} ${a.email}`.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = () => {
    if (adminToDelete) {
      setAdmins(admins.filter(a => a.id !== adminToDelete.id));
      setIsDeleteAdminOpen(false);
      setAdminToDelete(null);
    }
  };

  const handleEditSave = () => {
    if (adminToEdit) {
      setAdmins(admins.map(a => (a.id === adminToEdit.id ? adminToEdit : a)));
      setIsEditAdminOpen(false);
      setAdminToEdit(null);
    }
  };

  const handleAddAdmin = () => {
    if (newAdmin.firstName && newAdmin.lastName && newAdmin.email) {
      const newId = Math.max(...admins.map(a => a.id)) + 1;
      const adminToAdd = {
        ...newAdmin,
        id: newId,
        phone: "-",
        lastLogin: "Just now",
        ip: "-",
        status: "Active",
        badges: []
      };
      setAdmins([adminToAdd, ...admins]);
      setIsAddAdminOpen(false);
      setNewAdmin({ firstName: "", lastName: "", email: "", password: "", group: "Super Admin", profileImage: "" });
    }
  };

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isEdit) {
          setAdminToEdit({ ...adminToEdit, profileImage: reader.result });
        } else {
          setNewAdmin({ ...newAdmin, profileImage: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Admins</h1>
        <button
          onClick={() => setIsAddAdminOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          + Add Admin
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        {/* Table Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4 border-b border-white/5">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Show
            <div className="relative">
              <select
                value={showEntries}
                onChange={e => setShowEntries(Number(e.target.value))}
                className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 pr-8 focus:outline-none focus:border-primary/50 appearance-none cursor-pointer"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
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
              className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 focus:outline-none focus:border-primary/50 w-48"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="px-5 py-4 font-medium">
                  <div className="flex items-center gap-1 cursor-pointer">First Name <ChevronDown className="w-3 h-3" /></div>
                </th>
                <th className="px-5 py-4 font-medium">
                  <div className="flex items-center gap-1 cursor-pointer">Last Name <ChevronDown className="w-3 h-3" /></div>
                </th>
                <th className="px-5 py-4 font-medium">Phone</th>
                <th className="px-5 py-4 font-medium">Email</th>
                <th className="px-5 py-4 font-medium">Group</th>
                <th className="px-5 py-4 font-medium">Last Login</th>
                <th className="px-5 py-4 font-medium">IP</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map(admin => (
                <tr key={admin.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-5 py-4 text-primary font-medium cursor-pointer hover:underline">{admin.firstName}</td>
                  <td className="px-5 py-4 text-primary font-medium cursor-pointer hover:underline">{admin.lastName}</td>
                  <td className="px-5 py-4 text-gray-300">{admin.phone}</td>
                  <td className="px-5 py-4 text-gray-300">{admin.email}</td>
                  <td className="px-5 py-4 text-gray-300">{admin.group}</td>
                  <td className="px-5 py-4 text-gray-400">{admin.lastLogin}</td>
                  <td className="px-5 py-4 text-gray-400 font-mono text-xs">{admin.ip}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-1">
                      <span className={`${STATUS_COLORS[admin.status]} text-white text-xs px-2.5 py-0.5 rounded-sm font-medium inline-block w-fit`}>
                        {admin.status}
                      </span>
                      {admin.badges.map(badge => (
                        <span key={badge} className={`${BADGE_COLORS[badge]} text-white text-xs px-2.5 py-0.5 rounded-sm font-medium inline-block w-fit`}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => { setAdminToView(admin); setIsViewAdminOpen(true); }}
                        className="w-7 h-7 bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white rounded flex items-center justify-center transition-colors"
                        title="View Admin"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setAdminToEdit(admin); setIsEditAdminOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Edit Admin"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setAdminToDelete(admin); setIsDeleteAdminOpen(true); }}
                        className="w-7 h-7 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Delete Admin"
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

      {/* Add Admin Modal */}
      {isAddAdminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Add New User</h2>
              <button onClick={() => setIsAddAdminOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">First Name *</label>
                  <input 
                    type="text" 
                    value={newAdmin.firstName}
                    onChange={e => setNewAdmin({...newAdmin, firstName: e.target.value})}
                    className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">Last Name *</label>
                  <input 
                    type="text" 
                    value={newAdmin.lastName}
                    onChange={e => setNewAdmin({...newAdmin, lastName: e.target.value})}
                    className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Email *</label>
                <input 
                  type="email" 
                  value={newAdmin.email}
                  onChange={e => setNewAdmin({...newAdmin, email: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Password *</label>
                <input 
                  type="password" 
                  value={newAdmin.password}
                  onChange={e => setNewAdmin({...newAdmin, password: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Admin Group</label>
                <select 
                  value={newAdmin.group}
                  onChange={e => setNewAdmin({...newAdmin, group: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm"
                >
                  <option>Super Admin</option>
                  <option>Moderator</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Profile Image</label>
                <div className="flex items-center gap-4">
                  {newAdmin.profileImage ? (
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img src={newAdmin.profileImage} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary border border-white/10 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                  )}
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-[#161722] border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-primary/50 transition-colors flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    {newAdmin.profileImage ? 'Change Image' : 'Upload Image'}
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={e => handleProfileUpload(e, false)} 
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setIsAddAdminOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors">
                Cancel
              </button>
              <button onClick={handleAddAdmin} className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors">
                Create Admin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Admin Modal */}
      {isEditAdminOpen && adminToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Edit Admin</h2>
              <button onClick={() => setIsEditAdminOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">First Name *</label>
                  <input 
                    type="text" 
                    value={adminToEdit.firstName}
                    onChange={(e) => setAdminToEdit({...adminToEdit, firstName: e.target.value})}
                    className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">Last Name *</label>
                  <input 
                    type="text" 
                    value={adminToEdit.lastName}
                    onChange={(e) => setAdminToEdit({...adminToEdit, lastName: e.target.value})}
                    className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Email *</label>
                <input 
                  type="email" 
                  value={adminToEdit.email}
                  onChange={(e) => setAdminToEdit({...adminToEdit, email: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Admin Group</label>
                <select 
                  value={adminToEdit.group}
                  onChange={(e) => setAdminToEdit({...adminToEdit, group: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm"
                >
                  <option>Super Admin</option>
                  <option>Moderator</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Profile Image</label>
                <div className="flex items-center gap-4">
                  {adminToEdit.profileImage ? (
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img src={adminToEdit.profileImage} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary border border-white/10 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                  )}
                  <button 
                    onClick={() => editFileInputRef.current?.click()}
                    className="px-4 py-2 bg-[#161722] border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-primary/50 transition-colors flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    {adminToEdit.profileImage ? 'Change Image' : 'Upload Image'}
                  </button>
                  <input 
                    type="file" 
                    ref={editFileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={e => handleProfileUpload(e, true)} 
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setIsEditAdminOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors">
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
      {isDeleteAdminOpen && adminToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Delete Admin</h2>
              <p className="text-gray-400 text-sm">
                Are you sure you want to delete <span className="text-white font-medium">{adminToDelete.firstName} {adminToDelete.lastName}</span>? This action cannot be undone.
              </p>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-center gap-3">
              <button onClick={() => setIsDeleteAdminOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors flex-1">
                Cancel
              </button>
              <button onClick={handleDelete} className="px-5 py-2.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Admin Modal */}
      {isViewAdminOpen && adminToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Admin Details</h2>
              <button onClick={() => setIsViewAdminOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                {adminToView.profileImage ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                    <img src={adminToView.profileImage} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center text-2xl font-bold uppercase border-2 border-white/10">
                    {adminToView.firstName.charAt(0)}{adminToView.lastName.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white">{adminToView.firstName} {adminToView.lastName}</h3>
                  <p className="text-gray-400">{adminToView.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="text-white font-medium">{adminToView.phone || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">User Group</p>
                  <p className="text-white font-medium">{adminToView.group}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Status</p>
                  <span className={`${STATUS_COLORS[adminToView.status]} text-white text-xs px-2.5 py-0.5 rounded-sm font-medium inline-block mt-1`}>
                    {adminToView.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Last Login</p>
                  <p className="text-white font-medium">{adminToView.lastLogin}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">IP Address</p>
                  <p className="text-white font-medium font-mono text-sm">{adminToView.ip}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Badges</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {adminToView.badges.length > 0 ? adminToView.badges.map((badge: string) => (
                      <span key={badge} className={`${BADGE_COLORS[badge]} text-white text-[10px] px-1.5 py-0.5 rounded-sm font-medium inline-block`}>
                        {badge}
                      </span>
                    )) : <span className="text-gray-500 text-sm">None</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end">
              <button onClick={() => setIsViewAdminOpen(false)} className="px-5 py-2.5 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
