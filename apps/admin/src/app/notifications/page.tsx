import { Bell, Search, CheckCircle2, MoreVertical, X } from "lucide-react";

export default function AdminNotificationsPage() {
  const notifications = [
    { id: 1, title: "New user registration #9021", type: "user", time: "10 mins ago", isRead: false },
    { id: 2, title: "Withdrawal request #W-8392", type: "withdrawal", time: "1 hour ago", isRead: false },
    { id: 3, title: "System update completed", type: "system", time: "2 hours ago", isRead: true },
    { id: 4, title: "New merchant application", type: "merchant", time: "5 hours ago", isRead: true },
    { id: 5, title: "High volume transaction alert", type: "alert", time: "1 day ago", isRead: true },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Notifications</h1>
          <p className="text-sm text-gray-400">View and manage system alerts and notifications</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors">
            <CheckCircle2 className="w-4 h-4" />
            Mark All as Read
          </button>
        </div>
      </div>

      <div className="bg-[#1a1b26] border border-white/5 rounded-2xl overflow-hidden">
        {/* Filters and Actions */}
        <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
            {["All", "Unread", "Users", "Transactions", "System"].map((filter, i) => (
              <button
                key={filter}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  i === 0 ? "bg-primary text-white" : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="w-full sm:w-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search notifications..." 
              className="w-full sm:w-64 bg-[#161722] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-white/5">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-4 flex gap-4 transition-colors hover:bg-white/5 ${notif.isRead ? 'opacity-70' : 'bg-primary/5'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notif.isRead ? 'bg-white/5 text-gray-400' : 'bg-primary/20 text-primary'}`}>
                <Bell className="w-5 h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <h3 className={`text-sm ${notif.isRead ? 'text-gray-300 font-medium' : 'text-white font-bold'}`}>
                    {notif.title}
                  </h3>
                  <span className="text-xs text-gray-500 flex-shrink-0">{notif.time}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                  System generated alert for {notif.type} module.
                </p>
              </div>
              
              <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {!notif.isRead && (
                  <button className="p-1.5 text-gray-400 hover:text-primary transition-colors tooltip" data-tip="Mark as read">
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
                <button className="p-1.5 text-gray-400 hover:text-red-400 transition-colors tooltip" data-tip="Delete">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-gray-500">Showing 1 to 5 of 24 notifications</p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded text-xs font-medium transition-colors">Previous</button>
            <button className="px-3 py-1.5 bg-primary text-white rounded text-xs font-medium">1</button>
            <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded text-xs font-medium transition-colors">2</button>
            <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded text-xs font-medium transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
