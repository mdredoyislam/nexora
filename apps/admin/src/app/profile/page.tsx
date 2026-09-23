"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, Shield, Key } from "lucide-react";

export default function AdminProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Admin",
    lastName: "Techvill",
    email: "admin@techvill.net",
    phone: "+1 234 567 8900",
    role: "Super Admin",
    location: "New York, USA"
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">My Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          {isEditing ? "Cancel Editing" : "Edit Profile"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-6 flex flex-col items-center text-center h-fit">
          <div className="w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center text-3xl font-bold mb-4 overflow-hidden border-4 border-[#161722]">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold text-white">{profile.firstName} {profile.lastName}</h2>
          <p className="text-primary text-sm font-medium mt-1">{profile.role}</p>
          
          <div className="w-full mt-6 space-y-4 text-left border-t border-white/5 pt-6">
            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{profile.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{profile.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Details Form */}
        <div className="md:col-span-2 bg-[#1a1b26] border border-white/5 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Profile Information</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">First Name</label>
                <input 
                  type="text" 
                  value={profile.firstName}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm disabled:opacity-50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Last Name</label>
                <input 
                  type="text" 
                  value={profile.lastName}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-gray-400">Email Address</label>
              <input 
                type="email" 
                value={profile.email}
                disabled={!isEditing}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm disabled:opacity-50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Phone Number</label>
                <input 
                  type="text" 
                  value={profile.phone}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm disabled:opacity-50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Location</label>
                <input 
                  type="text" 
                  value={profile.location}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                  className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm disabled:opacity-50"
                />
              </div>
            </div>

            {isEditing && (
              <div className="pt-4 flex justify-end">
                <button 
                  onClick={() => setIsEditing(false)}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>

          <div className="mt-10 pt-8 border-t border-white/5">
            <h3 className="text-lg font-bold text-white mb-6">Security</h3>
            <div className="flex items-center justify-between p-4 bg-[#161722] border border-white/5 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Password</h4>
                  <p className="text-sm text-gray-400">Last changed 3 months ago</p>
                </div>
              </div>
              <button className="px-4 py-2 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
