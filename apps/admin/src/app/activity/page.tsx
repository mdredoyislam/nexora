"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LOGS = [
  { date: "24-08-2021 12:26 PM", type: "User",  username: "Irish watson",   ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "24-08-2021 11:19 AM", type: "User",  username: "Irish watson",   ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "24-08-2021 10:59 AM", type: "User",  username: "Irish watson",   ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "24-08-2021 10:57 AM", type: "Admin", username: "Admin Techvill", ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "24-08-2021 9:27 AM",  type: "User",  username: "John Doe",       ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "23-08-2021 4:57 PM",  type: "Admin", username: "Admin Techvill", ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "23-08-2021 4:51 PM",  type: "User",  username: "Kyla watson",    ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "23-08-2021 4:51 PM",  type: "User",  username: "Irish watson",   ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "23-08-2021 4:48 PM",  type: "User",  username: "Irish watson",   ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "23-08-2021 4:19 PM",  type: "Admin", username: "Admin Techvill", ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "23-08-2021 4:16 PM",  type: "User",  username: "Irish watson",   ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "23-08-2021 4:14 PM",  type: "User",  username: "Irish watson",   ip: "103.197.152.79", browser: "Google Chrome 92.0 | Windows" },
  { date: "22-08-2021 7:56 AM",  type: "User",  username: "Kyla watson",    ip: "::1",            browser: "Mozilla Firefox 61.0 | Windows" },
  { date: "22-08-2021 7:56 AM",  type: "User",  username: "Kyla watson",    ip: "192.168.0.106",  browser: "Google Chrome 67.0 | Windows" },
  { date: "22-08-2021 7:56 AM",  type: "User",  username: "Irish watson",   ip: "192.168.0.106",  browser: "Google Chrome 67.0 | Windows" },
  { date: "21-08-2021 7:56 AM",  type: "User",  username: "Mahfuza Sinthy", ip: "fe80::c8d2:ea6d:c50a:5409", browser: "Mozilla Firefox 61.0 | Windows" },
  { date: "21-08-2021 7:56 AM",  type: "User",  username: "Irish watson",   ip: "fe80::c8d2:ea6d:c50a:5409", browser: "Mozilla Firefox 61.0 | Windows" },
  { date: "21-08-2021 7:56 AM",  type: "Admin", username: "Admin Techvill", ip: "192.168.0.116",  browser: "Google Chrome 67.0 | Windows" },
];

export default function AdminActivityLogsPage() {
  const [search, setSearch] = useState("");

  const filtered = LOGS.filter(l =>
    `${l.username} ${l.ip} ${l.type}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl p-5">
        <h2 className="text-lg font-bold text-white">Activity Logs</h2>
      </div>

      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 pb-4 pt-5 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Show
            <select className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 pr-8 focus:outline-none text-sm">
              <option>25</option>
              <option>50</option>
            </select>
            entries
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Search:
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 focus:outline-none w-48 text-sm" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="px-5 py-3 font-medium whitespace-nowrap"><div className="flex items-center gap-1">Date <ChevronDown className="w-3 h-3" /></div></th>
                <th className="px-5 py-3 font-medium">User Type</th>
                <th className="px-5 py-3 font-medium">Username</th>
                <th className="px-5 py-3 font-medium">IP Address</th>
                <th className="px-5 py-3 font-medium">Browser | Platform</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((log, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-3 text-primary text-xs whitespace-nowrap">{log.date}</td>
                  <td className="px-5 py-3 text-gray-300">{log.type}</td>
                  <td className="px-5 py-3 text-primary cursor-pointer hover:underline whitespace-nowrap">{log.username}</td>
                  <td className="px-5 py-3 text-gray-300 font-mono text-xs">{log.ip}</td>
                  <td className="px-5 py-3 text-gray-400 text-xs">{log.browser}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-t border-white/5 gap-4">
          <p className="text-sm text-gray-400">Showing 1 to {filtered.length} of 58 entries</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">Previous</button>
            <button className="px-3 py-1.5 text-sm bg-primary text-white rounded font-medium">1</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">2</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">3</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
