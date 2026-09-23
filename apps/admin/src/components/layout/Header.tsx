"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, Bell, MessageSquare, User, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) setIsNotifOpen(false);
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) setIsChatOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) setIsProfileOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-20 border-b border-border bg-[#1a1b26] flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center">
        <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Chat / Messages */}
        <div className="relative" ref={chatRef}>
          <button 
            onClick={() => { setIsChatOpen(!isChatOpen); setIsNotifOpen(false); setIsProfileOpen(false); }}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 relative"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>
          
          {isChatOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-[#1f202e] border border-white/10 rounded-xl shadow-lg shadow-black/50 overflow-hidden z-50">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-semibold text-white">Messages</h3>
                <span className="text-xs text-blue-400 cursor-pointer hover:underline">Mark all as read</span>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center text-blue-400">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">John Doe</p>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">Hey, can you check the recent transaction?</p>
                      <p className="text-[10px] text-gray-500 mt-1">2 mins ago</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-white/10">
                <Link href="/messages" onClick={() => setIsChatOpen(false)} className="text-sm text-blue-400 hover:text-blue-300 font-medium">View All Messages</Link>
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => { setIsNotifOpen(!isNotifOpen); setIsChatOpen(false); setIsProfileOpen(false); }}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-[#1f202e] border border-white/10 rounded-xl shadow-lg shadow-black/50 overflow-hidden z-50">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-semibold text-white">Notifications</h3>
                <span className="text-xs text-blue-400 cursor-pointer hover:underline">Clear all</span>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                    <p className="text-sm text-gray-300">New user registration <span className="font-medium text-white">#9021</span></p>
                    <p className="text-xs text-gray-500 mt-1">10 mins ago</p>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-white/10">
                <Link href="/notifications" onClick={() => setIsNotifOpen(false)} className="text-sm text-blue-400 hover:text-blue-300 font-medium">View All Notifications</Link>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <div 
            onClick={() => { setIsProfileOpen(!isProfileOpen); setIsChatOpen(false); setIsNotifOpen(false); }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 py-1.5 px-3 rounded-full cursor-pointer hover:bg-white/10 transition-colors"
          >
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Admin" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-sm font-medium text-white pr-2">Admin Techvill</span>
          </div>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#1f202e] border border-white/10 rounded-xl shadow-lg shadow-black/50 overflow-hidden z-50 py-1">
              <div className="px-4 py-3 border-b border-white/10">
                <p className="text-sm font-medium text-white">Admin Techvill</p>
                <p className="text-xs text-gray-400 mt-0.5">admin@techvill.net</p>
              </div>
              <div className="py-1">
                <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                  <User className="h-4 w-4" />
                  My Profile
                </Link>
                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </div>
              <div className="py-1 border-t border-white/10">
                <button 
                  onClick={() => {
                    document.cookie = "nexora_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.href = "/auth/login";
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
