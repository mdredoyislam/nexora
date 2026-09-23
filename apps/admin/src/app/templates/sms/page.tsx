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

const TEMPLATE_CONTENT = `Txn ID: {uuid}
Amount: {amount} {code}
Fee: {fee}
Status: Success

Thank you,
{soft_name}`;

export default function AdminSMSTemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState("Notify Admin on Deposit");
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
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <h2 className="text-lg font-bold text-white">{activeTemplate}</h2>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-medium">SMS Template</span>
        </div>

        {/* Editor Content */}
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Message Content</label>
          <div className="bg-[#161722] border border-white/10 rounded-lg p-1.5 flex flex-wrap items-center gap-1 mb-2">
            <span className="text-xs text-gray-500 px-2 py-1">Available Tags: </span>
            {["{uuid}", "{amount}", "{code}", "{fee}", "{soft_name}"].map(tag => (
              <button key={tag} className="px-2 py-1 text-xs bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 rounded font-mono transition-colors">
                {tag}
              </button>
            ))}
          </div>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={6}
            className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-primary/50 font-mono resize-none"
            placeholder="Type your SMS content here..."
          />
          <p className="text-xs text-gray-500 flex justify-end">
            Characters: {content.length} | SMS Parts: {Math.ceil(content.length / 160)}
          </p>
        </div>

        {/* Language Tabs */}
        <div className="space-y-3 pt-4 border-t border-white/5">
          <h4 className="text-sm font-medium text-white">Translate Template</h4>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map(lang => (
              <button
                key={lang}
                className="px-3 py-1.5 text-xs border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 rounded-lg transition-colors"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-white/5">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-lg text-sm font-medium transition-colors">
            Save SMS Template
          </button>
        </div>
      </div>
    </div>
  );
}
