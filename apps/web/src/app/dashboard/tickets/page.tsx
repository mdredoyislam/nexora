"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Ticket {
  id: string;
  ticketId: string;
  subject: string;
  priority: "Low" | "Medium" | "High";
  time: string;
  status: "Open" | "Closed" | "Pending";
}

const mockTickets: Ticket[] = [
  {
    id: "1",
    ticketId: "TIC-E3PRAZ",
    subject: "New Ticket",
    priority: "Low",
    time: "23-07-2023 5:27 PM",
    status: "Open"
  }
];

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(mockTickets[0]);

  if (!selectedTicket) {
    return (
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-3xl font-bold uppercase tracking-wide">TICKETS</h1>
          <p className="text-gray-400">List of all your support tickets</p>
        </div>
        <div className="space-y-4">
          {mockTickets.map((ticket) => (
            <div key={ticket.id} className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6 flex items-center justify-between hover:border-white/10 transition-colors">
              <div>
                <h3 className="font-bold text-lg mb-1">{ticket.subject}</h3>
                <p className="text-sm text-gray-400">ID: <span className="text-primary">{ticket.ticketId}</span></p>
              </div>
              <Button onClick={() => setSelectedTicket(ticket)}>View Details</Button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-wide">TICKETS</h1>
        <p className="text-gray-400">Detailed information of ticket.</p>
      </div>

      <button 
        onClick={() => setSelectedTicket(null)}
        className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" /> Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar - Details */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6 space-y-6">
            <h2 className="text-lg font-bold border-b border-white/5 pb-4">Detailed Information</h2>
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Ticket ID: <span className="text-primary font-medium">{selectedTicket.ticketId}</span></p>
              <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded font-bold uppercase tracking-wider">
                {selectedTicket.status}
              </span>
            </div>

            <div className="bg-[#161722] p-4 rounded-xl border border-white/5">
              <p className="text-xs text-gray-500 mb-1">Subject</p>
              <p className="font-medium">{selectedTicket.subject}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Priority</p>
              <p className="font-medium text-sm">{selectedTicket.priority}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Time</p>
              <p className="font-medium text-sm">{selectedTicket.time}</p>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-3">
              <p className="text-sm font-bold">Change Status</p>
              <div className="flex gap-2">
                <select className="flex-1 bg-[#161722] border border-white/10 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50">
                  <option>Open</option>
                  <option>Closed</option>
                  <option>Pending</option>
                </select>
                <Button className="bg-primary hover:bg-primary/90">Update</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Area - Chat */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="bg-[#1a1b26] rounded-2xl border border-white/5 p-6">
            <h2 className="text-lg font-bold border-b border-white/5 pb-4 mb-6">Conversations</h2>
            
            {/* Write Message Form */}
            <div className="space-y-4 mb-8">
              <p className="text-sm font-medium">Write Message</p>
              <textarea 
                className="w-full bg-[#161722] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-primary/50 min-h-[120px] resize-none"
              ></textarea>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex border border-white/10 rounded-lg overflow-hidden bg-[#161722]">
                    <button className="bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition-colors">Choose File</button>
                    <span className="px-4 py-2 text-sm text-gray-500 border-l border-white/5">No file chosen</span>
                  </div>
                  <p className="text-xs text-gray-500">Upload your documents (Max: 2 mb)</p>
                </div>
                <Button className="px-8 bg-primary hover:bg-primary/90 text-white">Reply</Button>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-6 border-t border-white/5 pt-8">
              {/* Message 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Avatar" />
                </div>
                <div className="space-y-2 w-full">
                  <div className="flex items-center gap-2 justify-between">
                    <div>
                      <h4 className="font-bold text-sm">Irish watson</h4>
                      <p className="text-xs text-gray-500">23-07-2023 5:27 PM</p>
                    </div>
                    <span className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Starter</span>
                  </div>
                  <div className="bg-[#161722] p-5 rounded-xl rounded-tl-none border border-white/5 text-sm text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et augue leo. Aenean nec pharetra orci. Phasellus nec malesuada orci, vel hendrerit lorem. In nunc nunc, tristique eu augue quis, tempor laoreet dolor. Vivamus malesuada nisl in arcu pharetra finibus. Sed vitae ligula a magna dignissim rhoncus vel eget elit. Morbi malesuada lacus a sagittis sodales. Maecenas quis nisi sit amet justo luctus pellentesque at ut risus. In fringilla aliquam ipsum nec faucibus. Vestibulum sit amet commodo velit. Quisque tellus arcu, faucibus scelerisque viverra id, euismod at lectus. Vivamus arcu nibh, consectetur sit amet felis vel, convallis egestas massa. Aenean sapien risus, porttitor quis magna vel, vehicula dapibus nulla. Maecenas facilisis volutpat nunc.
                  </div>
                </div>
              </div>

              {/* Message 2 Admin */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-blue-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="space-y-2 w-full">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-blue-400">Admin Techvill</h4>
                    <p className="text-xs text-gray-500">22-07-2023 5:27 PM</p>
                  </div>
                  <div className="bg-[#161722] p-5 rounded-xl rounded-tl-none border border-white/5 text-sm text-gray-300 leading-relaxed">
                    Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et augue leo. Aenean nec pharetra orci. Phasellus nec malesuada orci, vel hendrerit lorem. In nunc nunc, tristique eu augue quis, tempor laoreet dolor. Vivamus malesuada nisl in arcu pharetra finibus. Sed vitae ligula a magna dignissim rhoncus vel eget elit. Morbi malesuada lacus a sagittis sodales.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
