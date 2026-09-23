"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Eye, EyeOff, ChevronRight } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  // Pre-fill demo user credentials for testing
  const [email, setEmail] = useState("admin@techvill.net");
  const [password, setPassword] = useState("admin123");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy authentication: Set a cookie and redirect to dashboard
    document.cookie = "nexora_admin_auth=1; path=/; max-age=86400"; // Expires in 1 day
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161722]">
      <div className="w-full max-w-md p-8 bg-[#1a1b26] border border-white/5 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Admin Login</h2>
          <p className="text-gray-400">Sign in to Nexora Admin Panel</p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300">
              Email <span className="text-primary">*</span>
            </label>
            <Input 
              type="email" 
              placeholder="admin@techvill.net" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1a1b26] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" 
              required
            />
          </div>

          <div className="space-y-1.5 relative">
            <label className="text-sm font-medium text-gray-300">
              Password <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#1a1b26] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 pr-10" 
                required
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          <Button type="submit" className="w-full mt-6 h-12 text-base font-medium flex items-center justify-center gap-2">
            Sign In <ChevronRight className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
