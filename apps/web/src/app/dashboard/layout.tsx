import { ReactNode } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Wallet, 
  History, 
  Download, 
  Send, 
  HandCoins, 
  ArrowLeftRight, 
  Landmark, 
  Store, 
  MessageSquareWarning, 
  Ticket, 
  User, 
  Settings,
  Sun,
  Moon,
  ChevronDown
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Wallets", icon: Wallet, href: "/dashboard/wallets" },
  { name: "TRANSACTIONS", isHeader: true },
  { name: "Transactions", icon: History, href: "/dashboard/transactions" },
  { name: "Deposit Money", icon: Download, href: "/dashboard/deposit" },
  { name: "Send Money", icon: Send, href: "/dashboard/send" },
  { name: "Request Money", icon: HandCoins, href: "/dashboard/request" },
  { name: "Exchange Money", icon: ArrowLeftRight, href: "/dashboard/exchange" },
  { name: "Withdrawals", icon: Landmark, href: "/dashboard/withdrawals", hasSub: true },
  { name: "Merchants", icon: Store, href: "/dashboard/merchants", hasSub: true },
  { name: "OTHERS", isHeader: true },
  { name: "Disputes", icon: MessageSquareWarning, href: "/dashboard/disputes" },
  { name: "Tickets", icon: Ticket, href: "/dashboard/tickets" },
  { name: "Profile", icon: User, href: "/dashboard/profile" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex bg-[#161722] text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1b26] flex-shrink-0 flex flex-col border-r border-white/5 h-screen sticky top-0 overflow-y-auto">
        {/* Logo */}
        <div className="p-6 flex items-center gap-2">
          <div className="bg-primary/20 p-1.5 rounded-lg">
            <Wallet className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight">NEXORA</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 pb-6 space-y-1">
          {navItems.map((item, index) => {
            if (item.isHeader) {
              return (
                <div key={index} className="pt-6 pb-2 px-3 text-xs font-bold text-orange-500 uppercase tracking-wider">
                  {item.name}
                </div>
              );
            }
            
            const Icon = item.icon!;
            const isActive = item.name === "Dashboard"; // Static for now
            
            return (
              <Link 
                key={index} 
                href={item.href!}
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.name}</span>
                </div>
                {item.hasSub && <ChevronDown className="w-4 h-4 opacity-50" />}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Navbar */}
        <header className="h-20 bg-[#161722] flex items-center justify-end px-8 border-b border-white/5 flex-shrink-0">
          <div className="flex items-center gap-6">
            {/* Theme Toggle (Visual only for now) */}
            <div className="flex items-center gap-2 text-gray-400">
              <Sun className="w-4 h-4" />
              <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
              <Moon className="w-4 h-4 text-white" />
            </div>

            {/* Profile Dropdown */}
            <div className="flex items-center gap-3 cursor-pointer pl-6 border-l border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 overflow-hidden flex items-center justify-center border-2 border-white/10">
                <span className="font-bold text-sm">IW</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Irish watson</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
          
          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 pb-4">
            <p>Copyright © 2026 NEXORA | All Rights Reserved.</p>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
              <span>English</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
