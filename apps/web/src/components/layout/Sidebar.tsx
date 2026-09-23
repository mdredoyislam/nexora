"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PieChart,
  Wallet,
  ArrowRightLeft,
  Send,
  History,
  ShieldAlert,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Portfolio", href: "/portfolio", icon: PieChart },
  { name: "Wallets", href: "/wallets", icon: Wallet },
  { name: "Send", href: "/send", icon: Send },
  { name: "Swap", href: "/swap", icon: ArrowRightLeft },
  { name: "Transactions", href: "/transactions", icon: History },
  { name: "Security", href: "/security", icon: ShieldAlert },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card flex-col hidden md:flex h-full">
      <div className="h-20 flex items-center px-6 border-b border-border">
        <Link href="/dashboard" className="text-2xl font-bold tracking-tighter text-primary flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
             <div className="w-4 h-4 rounded-full bg-background" />
          </div>
          NEXORA
        </Link>
      </div>
      <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 flex-shrink-0 h-5 w-5",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      {/* Help / Support Mini Card */}
      <div className="p-4">
        <div className="rounded-lg bg-accent p-4 border border-border">
          <h4 className="text-sm font-semibold text-foreground">Need help?</h4>
          <p className="text-xs text-muted-foreground mt-1 mb-3">
            Check our docs for guides on managing your Web3 assets.
          </p>
          <a href="#" className="text-xs text-primary font-medium hover:underline">
            View documentation
          </a>
        </div>
      </div>
    </aside>
  );
}
