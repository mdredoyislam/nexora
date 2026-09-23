"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Pencil, Camera, Printer, RefreshCw, Key, Mail, X } from "lucide-react";

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-wide">YOUR PROFILE</h1>
        <p className="text-gray-400">You have full control to manage your own account setting</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Profile Photo Card */}
          <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6 md:p-8 flex items-center justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Irish watson</h2>
              <div className="space-y-1">
                <p className="text-sm text-gray-300">Please set your profile image.</p>
                <p className="text-xs text-gray-500 italic">Supported format: jpeg, png, bmp, gif, or svg</p>
              </div>
              <Button className="flex items-center gap-2">
                <Camera className="w-4 h-4" /> Change Photo
              </Button>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/5 flex-shrink-0">
              <img src="https://i.pravatar.cc/300?u=a042581f4e29026024d" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Default Wallet */}
          <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6 md:p-8 flex items-center justify-between">
            <h2 className="text-lg font-bold flex items-center gap-2 text-white">
              Default Wallet
              <button className="text-gray-500 hover:text-white transition-colors">
                <Pencil className="w-4 h-4" />
              </button>
            </h2>
            <span className="font-bold text-primary text-xl">USD</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6 md:p-8 space-y-8">
          {/* QR Code */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-8">
            <div className="space-y-6 flex-1">
              <div className="space-y-2">
                <h3 className="flex items-center gap-2 font-bold text-white text-lg">
                  Profile QR Code
                </h3>
                <p className="text-sm text-gray-400">Use the QR code to easily handle your transactions.</p>
              </div>
              <div className="flex gap-4">
                <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white flex-1 md:flex-none justify-center">
                  <Printer className="w-4 h-4" /> Print Code
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 flex-1 md:flex-none justify-center">
                  Update Code
                </Button>
              </div>
            </div>
            <div className="w-32 h-32 bg-white rounded-xl p-2 flex-shrink-0">
               {/* Mock QR Code */}
               <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=nexora-profile-demo')] bg-cover"></div>
            </div>
          </div>

          {/* Security Summary */}
          <div className="space-y-6">
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3 text-gray-300">
                <Key className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Change Password</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">*************</span>
                <button className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-white">
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Email Address</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">irish@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6 md:p-8">
        <h2 className="text-xl font-bold flex items-center gap-2 text-white mb-8">
          Personal Information
          <button 
            onClick={() => setIsEditModalOpen(true)}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Pencil className="w-4 h-4" />
          </button>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-sm text-gray-400">Name</span>
            <span className="text-sm font-medium">Irish watson</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-sm text-gray-400">City</span>
            <span className="text-sm font-medium text-gray-600">N/A</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-sm text-gray-400">Phone</span>
            <span className="text-sm font-medium text-gray-600">N/A</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-sm text-gray-400">State</span>
            <span className="text-sm font-medium text-gray-600">N/A</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-sm text-gray-400">Address 1</span>
            <span className="text-sm font-medium text-gray-600">N/A</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-sm text-gray-400">Country</span>
            <span className="text-sm font-medium">Afghanistan</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-sm text-gray-400">Address 2</span>
            <span className="text-sm font-medium text-gray-600">N/A</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-sm text-gray-400">Time Zone</span>
            <span className="text-sm font-medium">Asia/Dhaka</span>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-xl font-bold">Profile Information</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">First Name *</label>
                  <input type="text" defaultValue="Irish" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Last Name *</label>
                  <input type="text" defaultValue="watson" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Phone</label>
                <div className="flex">
                  <select className="bg-[#161722] border border-white/10 border-r-0 rounded-l-lg px-3 py-2.5 text-white focus:outline-none">
                    <option>🇺🇸 +1</option>
                  </select>
                  <input type="text" placeholder="201-555-0123" className="flex-1 bg-[#161722] border border-white/10 rounded-r-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Address 1</label>
                  <textarea className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 resize-none h-20"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Address 2</label>
                  <textarea className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 resize-none h-20"></textarea>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">City</label>
                  <input type="text" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">State</label>
                  <input type="text" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Country</label>
                  <select defaultValue="Afghanistan" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50">
                    <option>Afghanistan</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Time Zone</label>
                  <select defaultValue="Asia/Dhaka" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-xs">
                    <option value="Asia/Dhaka">UTC/GMT +06:00 - Asia/Dhaka</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-white/5 bg-[#161722]">
              <Button className="w-full" onClick={() => setIsEditModalOpen(false)}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
