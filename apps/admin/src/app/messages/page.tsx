"use client";

import { useState, useRef, useEffect } from "react";
import { Search, User, MoreVertical, Send } from "lucide-react";

// Mock data
const INITIAL_CONTACTS = [
  { id: 1, name: "John Doe", lastMessage: "Hey, can you check the recent transaction?", time: "2 mins ago", unread: 1, online: true },
  { id: 2, name: "Alice Smith", lastMessage: "My verification is pending.", time: "1 hour ago", unread: 0, online: false },
  { id: 3, name: "Tech Support", lastMessage: "The server is back online.", time: "3 hours ago", unread: 0, online: true },
];

const INITIAL_MESSAGES: Record<number, any[]> = {
  1: [
    { id: 1, text: "Hey, can you check the recent transaction? It seems to be pending for a while.", sender: "user", time: "10:30 AM" },
    { id: 2, text: "Hello John, let me take a look at it right away. Could you provide the transaction ID?", sender: "admin", time: "10:32 AM" },
  ],
  2: [
    { id: 1, text: "My verification is pending.", sender: "user", time: "1 hour ago" },
  ],
  3: [
    { id: 1, text: "The server is back online.", sender: "user", time: "3 hours ago" },
    { id: 2, text: "Thanks for the update!", sender: "admin", time: "2 hours ago" },
  ]
};

export default function AdminMessagesPage() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [activeContactId, setActiveContactId] = useState(1);
  const [messagesData, setMessagesData] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeContact = contacts.find(c => c.id === activeContactId);
  const currentMessages = messagesData[activeContactId] || [];

  const filteredContacts = contacts.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentMessages, activeContactId]);

  const handleContactClick = (id: number) => {
    setActiveContactId(id);
    // Mark as read
    setContacts(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputText.trim(),
      sender: "admin",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessagesData(prev => ({
      ...prev,
      [activeContactId]: [...(prev[activeContactId] || []), newMessage]
    }));

    // Update last message in contact list
    setContacts(prev => prev.map(c => 
      c.id === activeContactId 
        ? { ...c, lastMessage: inputText.trim(), time: "Just now" } 
        : c
    ));

    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6 animate-in fade-in duration-500">
      {/* Sidebar Contacts */}
      <div className="w-80 flex flex-col bg-[#1a1b26] border border-white/5 rounded-2xl overflow-hidden flex-shrink-0">
        <div className="p-4 border-b border-white/5">
          <h2 className="text-lg font-bold text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#161722] border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredContacts.map((contact) => (
            <div 
              key={contact.id} 
              onClick={() => handleContactClick(contact.id)}
              className={`p-4 border-b border-white/5 cursor-pointer transition-colors flex gap-3 ${activeContactId === contact.id ? 'bg-primary/5 border-l-2 border-l-primary' : 'hover:bg-white/5'}`}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center text-blue-400 relative">
                <User className="h-5 w-5" />
                {contact.unread > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary border-2 border-[#1a1b26] rounded-full flex items-center justify-center text-[9px] text-white font-bold">{contact.unread}</span>
                )}
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1a1b26] rounded-full"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className={`text-sm ${contact.unread > 0 ? 'font-bold text-white' : 'font-medium text-gray-300'}`}>{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className={`text-xs mt-1 line-clamp-1 ${contact.unread > 0 ? 'text-gray-300 font-medium' : 'text-gray-500'}`}>
                  {contact.lastMessage}
                </p>
              </div>
            </div>
          ))}
          {filteredContacts.length === 0 && (
            <div className="p-8 text-center text-gray-500 text-sm">
              No conversations found.
            </div>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#1a1b26] border border-white/5 rounded-2xl overflow-hidden">
        {activeContact ? (
          <>
            {/* Chat Header */}
            <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#1a1b26]/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">{activeContact.name}</h2>
                  <p className={`text-xs ${activeContact.online ? 'text-green-400' : 'text-gray-500'}`}>
                    {activeContact.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-white rounded-lg transition-colors hover:bg-white/5">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">Today</span>
              </div>
              
              {currentMessages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 max-w-[80%] ${msg.sender === 'admin' ? 'ml-auto flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${msg.sender === 'admin' ? 'bg-primary/20 text-primary' : 'bg-blue-500/20 text-blue-400'}`}>
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <div className={`p-3 text-sm border ${
                      msg.sender === 'admin' 
                        ? 'bg-primary/10 text-white rounded-2xl rounded-tr-sm border-primary/20' 
                        : 'bg-[#161722] text-gray-300 rounded-2xl rounded-tl-sm border-white/5'
                    }`}>
                      {msg.text}
                    </div>
                    <span className={`text-xs text-gray-500 mt-1 block ${msg.sender === 'admin' ? 'text-right mr-1' : 'ml-1'}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/5 bg-[#1a1b26]/50">
              <div className="flex items-end gap-2 bg-[#161722] border border-white/10 rounded-xl p-2 focus-within:border-primary/50 transition-colors">
                <textarea 
                  rows={1}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message... (Press Enter to send)"
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm text-white resize-none p-2 min-h-[40px] max-h-[120px]"
                ></textarea>
                <button 
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="w-10 h-10 flex-shrink-0 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
            <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
            <p>Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}
