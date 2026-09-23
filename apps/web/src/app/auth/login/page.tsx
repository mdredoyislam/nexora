"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Eye, EyeOff, ChevronRight } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-2">Sign In</h2>
      <p className="text-gray-400 mb-8">
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-primary hover:underline font-medium">
          Create Account
        </Link>
      </p>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">
            Email <span className="text-primary">*</span>
          </label>
          <Input type="email" placeholder="john@example.com" className="bg-[#1a1b26] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
        </div>

        <div className="space-y-1.5 relative">
          <label className="text-sm font-medium text-gray-300">
            Password <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              className="bg-[#1a1b26] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 pr-10" 
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
        
        <div className="flex justify-end">
          <Link href="/auth/forgot-password" className="text-sm text-gray-400 hover:text-primary transition-colors">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" className="w-full mt-2 h-12 text-base font-medium flex items-center justify-center gap-2">
          Sign In <ChevronRight className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
