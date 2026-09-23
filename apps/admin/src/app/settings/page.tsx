"use client";

import { useState } from "react";

const SETTINGS_MENU = [
  { id: "general",        icon: "⚙️", label: "General" },
  { id: "security",       icon: "🛡️", label: "Admin Security" },
  { id: "social",         icon: "🔗", label: "Social Links" },
  { id: "recaptcha",      icon: "🔍", label: "Google reCaptcha" },
  { id: "appstore",       icon: "🔍", label: "App Store Credentials" },
  { id: "conversion",     icon: "⇌",  label: "Currency Conversion Api" },
  { id: "email",          icon: "✉️", label: "Email Settings" },
  { id: "sms",            icon: "✉️", label: "SMS Settings" },
  { id: "notifications",  icon: "🔔", label: "Notification Settings" },
  { id: "countries",      icon: "🌍", label: "Countries" },
  { id: "languages",      icon: "📚", label: "Languages" },
  { id: "packages",       icon: "🔒", label: "Merchant Packages" },
  { id: "usergroups",     icon: "👤", label: "User Groups" },
  { id: "roles",          icon: "🔍", label: "Roles Permissions" },
  { id: "backup",         icon: "💾", label: "Database Backup" },
  { id: "metas",          icon: "ℹ️", label: "Metas" },
  { id: "pages",          icon: "📄", label: "Pages" },
  { id: "preferences",    icon: "⚙️", label: "Preferences" },
];

export default function AdminSettingsPage() {
  const [activeSection, setActiveSection] = useState("general");

  return (
    <div className="flex gap-6 animate-in fade-in duration-500">
      {/* Sidebar */}
      <div className="w-64 shrink-0 bg-[#1a1b26] border border-white/5 rounded-xl p-4 h-fit">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-3">Manage Settings</h3>
        <nav className="space-y-0.5">
          {SETTINGS_MENU.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                activeSection === item.id
                  ? "bg-primary/20 text-primary font-medium"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-xs">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 bg-[#1a1b26] border border-white/5 rounded-xl p-8">
        <h2 className="text-lg font-bold text-white mb-8">General Settings Form</h2>

        <div className="space-y-6 max-w-2xl">
          <div className="grid grid-cols-[200px_1fr] items-center gap-4">
            <label className="text-sm text-gray-400 text-right">Name</label>
            <input defaultValue="NEXORA" className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
          </div>

          <div className="grid grid-cols-[200px_1fr] items-start gap-4">
            <label className="text-sm text-gray-400 text-right pt-2.5">Logo</label>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <label className="bg-[#161722] border border-white/10 text-gray-300 px-4 py-2.5 rounded-lg text-sm cursor-pointer hover:bg-white/5 transition-colors">
                  Choose File
                </label>
                <span className="text-sm text-gray-500">No file chosen</span>
              </div>
              <p className="text-xs text-gray-500">*Recommended Dimension: 288 px * 90 px</p>
            </div>
          </div>

          <div className="grid grid-cols-[200px_1fr] items-center gap-4">
            <label className="text-sm text-gray-400 text-right">Google Analytics Code</label>
            <textarea rows={3} placeholder="Google Analytics Tracking Code" className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm resize-none" />
          </div>

          <div className="grid grid-cols-[200px_1fr] items-center gap-4">
            <label className="text-sm text-gray-400 text-right">Google reCaptcha</label>
            <select className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
              <option>Disabled</option>
              <option>Enabled</option>
            </select>
          </div>

          <div className="grid grid-cols-[200px_1fr] items-center gap-4">
            <label className="text-sm text-gray-400 text-right">Login Via</label>
            <select className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
              <option>Email Only</option>
              <option>Phone Only</option>
              <option>Email or Phone</option>
            </select>
          </div>

          <div className="grid grid-cols-[200px_1fr] items-center gap-4">
            <label className="text-sm text-gray-400 text-right">Default Currency</label>
            <select className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
              <option>US Dollar</option>
              <option>Euro</option>
              <option>Pound Sterling</option>
            </select>
          </div>

          <div className="grid grid-cols-[200px_1fr] items-start gap-4">
            <label className="text-sm text-gray-400 text-right pt-2.5">Allowed Wallets</label>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2 bg-[#161722] border border-white/10 rounded-lg px-3 py-2 min-h-[44px]">
                {["GBP", "EUR"].map(w => (
                  <span key={w} className="bg-primary text-white text-xs px-2.5 py-1 rounded font-medium flex items-center gap-1">
                    {w} <button className="hover:text-gray-300">×</button>
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">*This currency wallets will be generated during registration besides default one</p>
            </div>
          </div>

          <div className="grid grid-cols-[200px_1fr] items-center gap-4">
            <label className="text-sm text-gray-400 text-right">Default Language</label>
            <select className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm appearance-none">
              <option>English</option>
              <option>Arabic</option>
              <option>French</option>
            </select>
          </div>

          <div className="flex justify-end pt-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
