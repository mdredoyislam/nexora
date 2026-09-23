"use client";

import { useState } from "react";

const TEMPLATE_SECTIONS = [
  {
    title: "Deposit",
    items: ["Notify Admin on Deposit", "Notify User on Deposit via Admin"],
  },
  {
    title: "Send Money",
    items: ["Notify Money Receiver", "Notify Admin on Transfer"],
  },
  {
    title: "Request Money",
    items: ["Notify Request Receiver", "Notify Request Sender on Money Received", "Notify Admin on Money Received"],
  },
  {
    title: "Exchange",
    items: ["Notify Admin on Exchange"],
  },
  {
    title: "Withdraw",
    items: ["Notify Admin on Withdrawal", "Notify User on Withdrawal via Admin"],
  },
  {
    title: "Merchant Payment",
    items: ["Notify Merchant", "Notify Admin on Payment"],
  },
  {
    title: "Ticket",
    items: ["New Ticket", "Ticket Reply"],
  },
  {
    title: "Dispute",
    items: ["Open Dispute", "Dispute Reply"],
  },
  {
    title: "General",
    items: ["Two-fa Authentication", "Address or Identity Verification", "Email Verification", "Password Reset", "Profile Status Change", "Transaction Status Update"],
  },
  {
    title: "Crypto Exchange",
    items: ["Notify Admin on Crypto Exchange"],
  },
  {
    title: "Investment",
    items: ["Notify Admin On Investment", "Investment Status Update", "Notify User On Investment Mature"],
  },
];

const LANGUAGES = ["Arabic", "French", "Português", "Russian", "Spanish", "Turkish", "Chinese"];

const TEMPLATE_CONTENT = `Transaction ID: {uuid}

Currency: {code}

Amount: {amount}

Fee: {fee}

If you have any questions, please feel free to reply to this email.

Regards,
{soft_name}`;

export default function AdminEmailTemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState("Notify Admin on Deposit");
  const [subject, setSubject] = useState("Money Deposit Notification");
  const [content, setContent] = useState(TEMPLATE_CONTENT);

  return (
    <div className="flex gap-6 animate-in fade-in duration-500">
      {/* Sidebar */}
      <div className="w-72 shrink-0 bg-[#1a1b26] border border-white/5 rounded-xl p-4 h-fit max-h-[80vh] overflow-y-auto">
        <nav className="space-y-4">
          {TEMPLATE_SECTIONS.map(section => (
            <div key={section.title}>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider px-2 mb-1 mt-2">{section.title}</h4>
              {section.items.map(item => (
                <button
                  key={item}
                  onClick={() => setActiveTemplate(item)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeTemplate === item
                      ? "text-primary"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </div>

      {/* Editor */}
      <div className="flex-1 bg-[#1a1b26] border border-white/5 rounded-xl p-6 space-y-6">
        <h2 className="text-lg font-bold text-white">Money Deposit Notification</h2>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Subject</label>
          <input
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50"
          />
        </div>

        {/* Toolbar */}
        <div className="bg-[#161722] border border-white/10 rounded-lg p-1.5 flex flex-wrap items-center gap-1">
          <select className="bg-transparent text-gray-400 text-xs border-r border-white/10 pr-3 mr-1 focus:outline-none">
            <option>Normal text</option>
            <option>Heading 1</option>
            <option>Heading 2</option>
          </select>
          {["Bold", "Italic", "Underline", "Small"].map(tool => (
            <button key={tool} className="px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors">
              {tool}
            </button>
          ))}
          {["❝", "≡", "⋮", "↩", "🖼"].map((icon, i) => (
            <button key={i} className="px-2 py-1 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors">
              {icon}
            </button>
          ))}
        </div>

        {/* Editor Content */}
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={8}
          className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-primary/50 font-mono resize-none"
        />

        {/* Language Tabs */}
        <div className="space-y-2">
          {LANGUAGES.map(lang => (
            <button
              key={lang}
              className="block text-sm text-primary hover:underline py-1 transition-colors"
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-lg text-sm font-medium transition-colors">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
