"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const MESSAGES = [
  {
    user: "Kyla watson",
    time: "21-08-2021 7:56 AM",
    avatar: "K",
    color: "bg-orange-500",
    text: "consectetur adipiscing elit. Maecenas sed enim eu orci scelerisque lobortis porttitor id erat. Quis",
  },
  {
    user: "Kyla watson",
    time: "13-08-2021 7:56 AM",
    avatar: "K",
    color: "bg-orange-500",
    text: "Hello admin, Duis in bibendum nisl. Praesent vel vestibulum enim. Sed ultrices pellentesque massa non sodales. Vestibulum ut magna in risus dignissim hendrerit. Aenean aliquet, massa et rutrum varius, nunc nisl ullamcorper ante, varius auctor sem nisl vel nisl. Cras gravida lectus at tempus sodales. Vivamus molestie dui nec bibendum rutrum. Nulla id purus a nibh fringilla dapibus at eu enim. Sed nunc leo, mattis vitae tempor nec, lobortis in diam. Cras nunc erat, aliquam vel sodales nec, scelerisque eget sem. Nulla dignissim facilisis feugiat. Nullam quis enim id libero fringilla accumsan ut ac eros. Nulla id interdum velit. Donec dictum nunc augue, vitae porta enim pharetra ut. Thank you",
  },
  {
    user: "Admin Techvill",
    time: "21-08-2021 7:56 AM",
    avatar: "A",
    color: "bg-blue-500",
    isAdmin: true,
    text: "Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in purus sem. Phasellus auctor facilisis velit at rhoncus. Maecenas sed enim eu orci scelerisque lobortis porttitor id erat. Quisque congue porttitor placerat. Fusce malesuada hendrerit est ut luctus. Cras sed molestie nulla, nec placerat nibh. Donec placerat interdum libero eu blandit. Quisque at nulla ut mi porttitor eleifend nec nec erat. Thank you",
  },
];

export default function AdminDisputeDetailPage() {
  const [replyText, setReplyText] = useState("");
  const [status, setStatus] = useState("Solved");

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Dispute</h2>
        <div className="relative">
          <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white text-sm appearance-none pr-8 focus:outline-none focus:border-primary/50"
          >
            <option>Open</option>
            <option>Closed</option>
            <option>Solved</option>
          </select>
          <ChevronDown className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Dispute Info */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-sm font-semibold text-gray-400 w-36 shrink-0">Title</span>
              <span className="text-sm text-primary">Product received isssue</span>
            </div>
            <div className="flex gap-4">
              <span className="text-sm font-semibold text-gray-400 w-36 shrink-0">Transaction ID</span>
              <span className="text-sm text-white font-mono">CJIGRGEWD28HB</span>
            </div>
            <div className="flex gap-4">
              <span className="text-sm font-semibold text-gray-400 w-36 shrink-0">Status</span>
              <span className="bg-green-600 text-white text-xs px-2.5 py-1 rounded-sm font-medium">Solved</span>
            </div>
            <div className="flex gap-4">
              <span className="text-sm font-semibold text-gray-400 w-36 shrink-0">Date</span>
              <span className="text-sm text-gray-300">21-08-2021 7:56 AM</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-sm font-semibold text-gray-400 w-24 shrink-0">Claimant</span>
              <span className="text-sm text-primary">Kyla watson</span>
            </div>
            <div className="flex gap-4">
              <span className="text-sm font-semibold text-gray-400 w-24 shrink-0">Defendant</span>
              <span className="text-sm text-primary">Irish watson</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reply Box */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-6 space-y-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Reply</h3>
        <textarea
          value={replyText}
          onChange={e => setReplyText(e.target.value)}
          rows={4}
          className="w-full bg-[#161722] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 resize-none"
          placeholder="Write your reply..."
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">File</span>
            <label className="bg-[#161722] border border-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-white/5">
              Choose File
            </label>
            <span className="text-sm text-gray-500">No file chosen</span>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
            Submit
          </button>
        </div>
      </div>

      {/* Message Thread */}
      <div className="space-y-4">
        {MESSAGES.map((msg, i) => (
          <div key={i} className="bg-[#1a1b26] border border-white/5 rounded-xl p-5 flex gap-4">
            <div className={`w-10 h-10 rounded-full ${msg.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
              {msg.avatar}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <span className={`text-sm font-semibold ${msg.isAdmin ? "text-blue-400" : "text-orange-400"}`}>{msg.user}</span>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
