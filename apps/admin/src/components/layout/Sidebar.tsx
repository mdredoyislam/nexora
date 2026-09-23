"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ArrowRightLeft,
  Bitcoin,
  DollarSign,
  MessageSquareWarning,
  Ticket,
  Activity,
  ShieldCheck,
  Banknote,
  LayoutTemplate,
  Settings,
  Blocks,
  ChevronLeft,
  ChevronDown
} from "lucide-react";

interface NavItem {
  name: string;
  href?: string;
  icon?: any;
  isHeader?: boolean;
  subItems?: { name: string; href: string; icon?: any }[];
}

const navigation: NavItem[] = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { 
    name: "Users", 
    icon: Users,
    subItems: [
      { name: "Users", href: "/users", icon: Users },
      { name: "Merchants", href: "/merchants", icon: Blocks },
      { name: "Admins", href: "/admins", icon: ShieldCheck },
    ]
  },
  { 
    name: "Transactions", 
    icon: ArrowRightLeft,
    subItems: [
      { name: "All Transactions", href: "/transactions" },
    ]
  },
  { 
    name: "Crypto Transactions", 
    icon: Bitcoin,
    subItems: [
      { name: "All Crypto", href: "/crypto" },
      { name: "Crypto Sent", href: "/crypto-transactions/sent" },
    ]
  },
  { name: "Revenues", href: "/revenues", icon: DollarSign },
  { name: "Disputes", href: "/disputes", icon: MessageSquareWarning },
  { name: "Tickets", href: "/tickets", icon: Ticket },
  { name: "Activity Logs", href: "/activity", icon: Activity },
  { 
    name: "Verifications", 
    icon: ShieldCheck,
    subItems: [
      { name: "Identity", href: "/verifications/identity" },
      { name: "Address", href: "/verifications/address" },
    ]
  },
  { name: "Configurations", isHeader: true },
  { name: "Currencies", href: "/currencies", icon: Banknote },
  { 
    name: "Crypto Providers", 
    icon: Bitcoin,
    subItems: [
      { name: "Providers", href: "/crypto-providers" },
      { name: "Webhooks", href: "/crypto-providers/webhooks" },
    ]
  },
  { 
    name: "Templates", 
    icon: LayoutTemplate,
    subItems: [
      { name: "Email", href: "/templates/email" },
      { name: "SMS", href: "/templates/sms" },
    ]
  },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Addon Manager", href: "/addons", icon: Blocks },
];

export function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>(["Users"]);

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  return (
    <aside className="w-[280px] bg-[#1a1b26] flex flex-col hidden md:flex h-screen border-r border-white/5 flex-shrink-0">
      <div className="h-20 flex items-center px-6 border-b border-white/5">
        <Link href="/" className="text-xl font-bold tracking-tighter text-primary flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
             <div className="w-4 h-4 rounded-full bg-[#1a1b26]" />
          </div>
          NEXORA
        </Link>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        {navigation.map((item, idx) => {
          if (item.isHeader) {
            return (
              <div key={idx} className="pt-6 pb-2 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                {item.name}
              </div>
            );
          }

          const hasSub = !!item.subItems;
          const isOpen = openMenus.includes(item.name);
          const isActive = item.href ? (pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")) : false;
          
          return (
            <div key={idx}>
              {hasSub ? (
                <button
                  onClick={() => toggleMenu(item.name)}
                  className={`w-full group flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isOpen ? "bg-white/5 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    {item.icon && <item.icon className="mr-3 flex-shrink-0 h-5 w-5 opacity-70" />}
                    {item.name}
                  </div>
                  <ChevronLeft className={`w-4 h-4 transition-transform ${isOpen ? "-rotate-90" : ""}`} />
                </button>
              ) : (
                <Link
                  href={item.href!}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "bg-white/5 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.icon && (
                    <item.icon className={`mr-3 flex-shrink-0 h-5 w-5 ${isActive ? "text-primary" : "opacity-70 group-hover:text-primary"}`} />
                  )}
                  {item.name}
                </Link>
              )}

              {hasSub && isOpen && (
                <div className="mt-1 mb-2 pl-11 space-y-1">
                  {item.subItems!.map((subItem, subIdx) => {
                    const isSubActive = pathname === subItem.href || (pathname.startsWith(subItem.href) && subItem.href !== "/");
                    return (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                          isSubActive ? "bg-primary text-white font-medium shadow-md shadow-primary/20" : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {subItem.icon && <subItem.icon className="mr-2 w-4 h-4" />}
                        {subItem.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
