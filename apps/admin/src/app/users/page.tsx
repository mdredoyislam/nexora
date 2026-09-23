"use client";

import { useState, useRef } from "react";
import { Pencil, Trash2, ChevronDown, Plus, Eye, Upload, Image as ImageIcon } from "lucide-react";

const USERS = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    phone: "-",
    email: "john.doe@gmail.com",
    group: "Default User",
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
    group: "Default User",
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
    group: "Default User",
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
    group: "Merchant Regular",
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
    group: "Default User",
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

export default function AdminUsersPage() {
  const [users, setUsers] = useState(USERS);
  const [search, setSearch] = useState("");
  const [showEntries, setShowEntries] = useState(25);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [newUser, setNewUser] = useState<any>({
    firstName: "", lastName: "", email: "", password: "", group: "Default User", profileImage: ""
  });
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<any>(null);
  const [isDeleteUserOpen, setIsDeleteUserOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<any>(null);
  const [isViewUserOpen, setIsViewUserOpen] = useState(false);
  const [userToView, setUserToView] = useState<any>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);

  const filtered = users.filter(u =>
    `${u.firstName} ${u.lastName} ${u.email}`.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = () => {
    if (userToDelete) {
      setUsers(users.filter(u => u.id !== userToDelete.id));
      setIsDeleteUserOpen(false);
      setUserToDelete(null);
    }
  };

  const handleEditSave = () => {
    if (userToEdit) {
      setUsers(users.map(u => (u.id === userToEdit.id ? userToEdit : u)));
      setIsEditUserOpen(false);
      setUserToEdit(null);
    }
  };

  const handleAddUser = () => {
    if (newUser.firstName && newUser.lastName && newUser.email) {
      const newId = Math.max(...users.map(u => u.id)) + 1;
      const userToAdd = {
        ...newUser,
        id: newId,
        phone: "-",
        lastLogin: "Just now",
        ip: "-",
        status: "Active",
        badges: []
      };
      setUsers([userToAdd, ...users]);
      setIsAddUserOpen(false);
      setNewUser({ firstName: "", lastName: "", email: "", password: "", group: "Default User", profileImage: "" });
    }
  };

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isEdit) {
          setUserToEdit({ ...userToEdit, profileImage: reader.result });
        } else {
          setNewUser({ ...newUser, profileImage: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <button
          onClick={() => setIsAddUserOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          + Add User
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
              {filtered.map(user => (
                <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-5 py-4 text-primary font-medium cursor-pointer hover:underline">{user.firstName}</td>
                  <td className="px-5 py-4 text-primary font-medium cursor-pointer hover:underline">{user.lastName}</td>
                  <td className="px-5 py-4 text-gray-300">{user.phone}</td>
                  <td className="px-5 py-4 text-gray-300">{user.email}</td>
                  <td className="px-5 py-4 text-gray-300">{user.group}</td>
                  <td className="px-5 py-4 text-gray-400">{user.lastLogin}</td>
                  <td className="px-5 py-4 text-gray-400 font-mono text-xs">{user.ip}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-1">
                      <span className={`${STATUS_COLORS[user.status]} text-white text-xs px-2.5 py-0.5 rounded-sm font-medium inline-block w-fit`}>
                        {user.status}
                      </span>
                      {user.badges.map(badge => (
                        <span key={badge} className={`${BADGE_COLORS[badge]} text-white text-xs px-2.5 py-0.5 rounded-sm font-medium inline-block w-fit`}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => { setUserToView(user); setIsViewUserOpen(true); }}
                        className="w-7 h-7 bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white rounded flex items-center justify-center transition-colors"
                        title="View User"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setUserToEdit(user); setIsEditUserOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Edit User"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => { setUserToDelete(user); setIsDeleteUserOpen(true); }}
                        className="w-7 h-7 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded flex items-center justify-center transition-colors"
                        title="Delete User"
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

      {/* Add User Modal */}
      {isAddUserOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Add New User</h2>
              <button onClick={() => setIsAddUserOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">First Name *</label>
                  <input 
                    type="text" 
                    value={newUser.firstName}
                    onChange={e => setNewUser({...newUser, firstName: e.target.value})}
                    className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">Last Name *</label>
                  <input 
                    type="text" 
                    value={newUser.lastName}
                    onChange={e => setNewUser({...newUser, lastName: e.target.value})}
                    className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Email *</label>
                <input 
                  type="email" 
                  value={newUser.email}
                  onChange={e => setNewUser({...newUser, email: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Password *</label>
                <input 
                  type="password" 
                  value={newUser.password}
                  onChange={e => setNewUser({...newUser, password: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">User Group</label>
                <select 
                  value={newUser.group}
                  onChange={e => setNewUser({...newUser, group: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm"
                >
                  <option>Default User</option>
                  <option>Merchant Regular</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Profile Image</label>
                <div className="flex items-center gap-4">
                  {newUser.profileImage ? (
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img src={newUser.profileImage} alt="Preview" className="w-full h-full object-cover" />
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
                    {newUser.profileImage ? 'Change Image' : 'Upload Image'}
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
              <button onClick={() => setIsAddUserOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors">
                Cancel
              </button>
              <button onClick={handleAddUser} className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors">
                Create User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {isEditUserOpen && userToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Edit User</h2>
              <button onClick={() => setIsEditUserOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">First Name *</label>
                  <input 
                    type="text" 
                    value={userToEdit.firstName}
                    onChange={(e) => setUserToEdit({...userToEdit, firstName: e.target.value})}
                    className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">Last Name *</label>
                  <input 
                    type="text" 
                    value={userToEdit.lastName}
                    onChange={(e) => setUserToEdit({...userToEdit, lastName: e.target.value})}
                    className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Email *</label>
                <input 
                  type="email" 
                  value={userToEdit.email}
                  onChange={(e) => setUserToEdit({...userToEdit, email: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">User Group</label>
                <select 
                  value={userToEdit.group}
                  onChange={(e) => setUserToEdit({...userToEdit, group: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm"
                >
                  <option>Default User</option>
                  <option>Merchant Regular</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Profile Image</label>
                <div className="flex items-center gap-4">
                  {userToEdit.profileImage ? (
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img src={userToEdit.profileImage} alt="Preview" className="w-full h-full object-cover" />
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
                    {userToEdit.profileImage ? 'Change Image' : 'Upload Image'}
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
              <button onClick={() => setIsEditUserOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors">
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
      {isDeleteUserOpen && userToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Delete User</h2>
              <p className="text-gray-400 text-sm">
                Are you sure you want to delete <span className="text-white font-medium">{userToDelete.firstName} {userToDelete.lastName}</span>? This action cannot be undone.
              </p>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-center gap-3">
              <button onClick={() => setIsDeleteUserOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors flex-1">
                Cancel
              </button>
              <button onClick={handleDelete} className="px-5 py-2.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View User Modal */}
      {isViewUserOpen && userToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">User Details</h2>
              <button onClick={() => setIsViewUserOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                {userToView.profileImage ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                    <img src={userToView.profileImage} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center text-2xl font-bold uppercase border-2 border-white/10">
                    {userToView.firstName.charAt(0)}{userToView.lastName.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white">{userToView.firstName} {userToView.lastName}</h3>
                  <p className="text-gray-400">{userToView.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="text-white font-medium">{userToView.phone || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">User Group</p>
                  <p className="text-white font-medium">{userToView.group}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Status</p>
                  <span className={`${STATUS_COLORS[userToView.status]} text-white text-xs px-2.5 py-0.5 rounded-sm font-medium inline-block mt-1`}>
                    {userToView.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Last Login</p>
                  <p className="text-white font-medium">{userToView.lastLogin}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">IP Address</p>
                  <p className="text-white font-medium font-mono text-sm">{userToView.ip}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Badges</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {userToView.badges.length > 0 ? userToView.badges.map((badge: string) => (
                      <span key={badge} className={`${BADGE_COLORS[badge]} text-white text-[10px] px-1.5 py-0.5 rounded-sm font-medium inline-block`}>
                        {badge}
                      </span>
                    )) : <span className="text-gray-500 text-sm">None</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end">
              <button onClick={() => setIsViewUserOpen(false)} className="px-5 py-2.5 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
