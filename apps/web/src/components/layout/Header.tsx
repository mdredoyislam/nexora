import { ConnectButton } from "@/components/web3/ConnectButton";
import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="h-20 border-b border-border bg-background flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex-1 flex items-center gap-4">
        <div className="relative w-full max-w-md hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-border rounded-md leading-5 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all"
            placeholder="Search assets, wallets, or transactions..."
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
        </button>
        <div className="h-6 w-px bg-border mx-2" />
        <ConnectButton />
      </div>
    </header>
  );
}
