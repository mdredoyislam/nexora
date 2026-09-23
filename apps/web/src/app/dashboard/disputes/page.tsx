"use client";

import { useState } from "react";
import { Filter, ChevronLeft, Send as SendIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Dispute {
  id: string;
  disputeId: string;
  title: string;
  claimant: string;
  defendant: string;
  transactionId: string;
  date: string;
  status: "Solve" | "Closed" | "Open";
  reason: string;
  avatar: string;
}

const mockDisputes: Dispute[] = [
  {
    id: "1",
    disputeId: "DIS-WUTUZP",
    title: "Product received isssue",
    claimant: "Kyla watson",
    defendant: "Irish watson",
    transactionId: "CJIGRGEWD28HB",
    date: "22-07-2023 5:27 PM",
    status: "Solve",
    reason: "I have not received the goods",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: "2",
    disputeId: "DIS-656MEZ",
    title: "Description does not match with product",
    claimant: "Kyla watson",
    defendant: "Irish watson",
    transactionId: "9HNQSGQSIWL3Q",
    date: "19-07-2023 5:27 PM",
    status: "Closed",
    reason: "Product was damaged on arrival",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  }
];

export default function DisputesPage() {
  const [selectedDispute, setSelectedDispute] = useState<Dispute | null>(null);

  if (selectedDispute) {
    return (
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-wide">Dispute details</h1>
          <p className="text-gray-400">Everything you need to know about the dispute</p>
        </div>

        <button 
          onClick={() => setSelectedDispute(null)}
          className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" /> Back to list
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Details */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6 space-y-6">
              <h2 className="text-lg font-bold border-b border-white/5 pb-4">Detailed Information</h2>
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">Dispute ID : <span className="text-primary font-medium">{selectedDispute.disputeId}</span></p>
                <span className={`text-sm font-bold ${selectedDispute.status === "Solve" ? "text-green-500" : "text-red-500"}`}>
                  {selectedDispute.status}
                </span>
              </div>

              <div className="bg-[#161722] p-4 rounded-xl border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Title</p>
                <p className="font-medium">{selectedDispute.title}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Claimant</p>
                  <p className="font-medium text-sm">{selectedDispute.claimant}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Defendant</p>
                  <p className="font-medium text-sm">{selectedDispute.defendant}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Transaction ID</p>
                <p className="font-medium text-sm font-mono text-gray-300">{selectedDispute.transactionId}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Time</p>
                <p className="font-medium text-sm">{selectedDispute.date}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Reason Details</p>
                <p className="font-medium text-sm">{selectedDispute.reason}</p>
              </div>
            </div>
          </div>

          {/* Right Area - Chat */}
          <div className="w-full md:w-2/3">
            <div className="bg-[#1a1b26] rounded-2xl border border-white/5 overflow-hidden flex flex-col h-[700px]">
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h2 className="text-lg font-bold">Conversations</h2>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Message 1 */}
                <div className="flex gap-4 max-w-[90%]">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={selectedDispute.avatar} alt="Avatar" />
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex items-center gap-2 justify-between">
                      <div>
                        <h4 className="font-bold text-sm">{selectedDispute.claimant}</h4>
                        <p className="text-xs text-gray-500">22-07-2023 5:27 PM</p>
                      </div>
                      <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded uppercase font-bold tracking-wider">Starter</span>
                    </div>
                    <div className="bg-[#161722] p-4 rounded-xl rounded-tl-none border border-white/5 text-sm text-gray-300">
                      consectetur adipiscing elit. Maecenas sed enim eu orci scelerisque lobortis porttitor id erat. Quis
                    </div>
                  </div>
                </div>

                {/* Message 2 */}
                <div className="flex gap-4 max-w-[90%]">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={selectedDispute.avatar} alt="Avatar" />
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm">{selectedDispute.claimant}</h4>
                      <p className="text-xs text-gray-500">14-07-2023 5:27 PM</p>
                    </div>
                    <div className="bg-[#161722] p-4 rounded-xl rounded-tl-none border border-white/5 text-sm text-gray-300 leading-relaxed">
                      Hello admin, Duis in bibendum nisl. Praesent vel vestibulum enim. Sed ultrices pellentesque massa non sodales. Vestibulum ut magna in risus dignissim hendrerit. Aenean aliquet, massa et rutrum varius, nunc nisi ullamcorper ante, varius auctor sem nisl vel nisl. Cras gravida lectus at tempus sodales. Vivamus molestie dui nec bibendum rutrum. Nulla id purus a nibh fringilla dapibus at eu enim. Sed nunc leo, mattis vitae tempor nec, lobortis in diam. Cras nunc erat, aliquam vel sodales nec, scelerisque eget sem. Nulla dignissim facilisis feugiat. Nullam quis enim id libero fringilla accumsan ut ac eros. Nulla id interdum velit. Donec dictum nunc augue, vitae porta enim pharetra ut. Thank you
                    </div>
                  </div>
                </div>

                {/* Message 3 Admin */}
                <div className="flex gap-4 max-w-[90%]">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-blue-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-blue-400">Admin Techvill</h4>
                      <p className="text-xs text-gray-500">22-07-2023 5:27 PM</p>
                    </div>
                    <div className="bg-blue-500/10 p-4 rounded-xl rounded-tl-none border border-blue-500/20 text-sm text-gray-300 leading-relaxed">
                      Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in purus sem. Phasellus auctor facilisis velit at rhoncus. Maecenas sed enim eu orci scelerisque lobortis porttitor id erat. Quisque congue porttitor placerat. Fusce malesuada hendrerit est ut luctus. Cras sed molestie nulla, nec placerat nibh. Donec placerat interdum libero eu blandit. Quisque at nulla ut mi porttitor eleifend nec nec erat. Thank you
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 h-8 text-xs">Load more</Button>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-white/5 bg-[#161722]">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="Write your message here..."
                    className="w-full bg-[#1a1b26] border border-white/10 rounded-full px-6 py-3 pr-14 text-sm text-white focus:outline-none focus:border-primary/50"
                  />
                  <button className="absolute right-2 w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center transition-colors">
                    <SendIcon className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-wide">Disputes</h1>
        <p className="text-gray-400">Your conservations with admin relating problems</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-white">All lists of disputes</h2>
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-[#1a1b26] border border-white/5 px-4 py-2 rounded-lg">
          Filter <Filter className="w-4 h-4 text-primary" />
        </button>
      </div>

      <div className="space-y-4">
        {mockDisputes.map((dispute) => (
          <div key={dispute.id} className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10">
                <img src={dispute.avatar} alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{dispute.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <span className="text-primary font-medium">{dispute.disputeId}</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span>Claimant: {dispute.claimant}</span>
                </div>
                <p className="text-sm text-gray-500 font-mono">Transaction ID: {dispute.transactionId}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 flex-shrink-0">
              <Button variant="outline" onClick={() => setSelectedDispute(dispute)} className="w-32 border-white/20 hover:bg-white/5">
                See Details
              </Button>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className={dispute.status === "Solve" ? "text-green-500" : "text-red-500"}>{dispute.status}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="text-gray-500">{dispute.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
