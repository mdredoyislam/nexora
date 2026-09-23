"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Eye, EyeOff, ChevronRight } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-2">Create Account</h2>
      <p className="text-gray-400 mb-8">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-primary hover:underline font-medium">
          Sign in here
        </Link>
      </p>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300">
              First Name <span className="text-primary">*</span>
            </label>
            <Input type="text" placeholder="John" className="bg-[#1a1b26] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300">
              Last Name <span className="text-primary">*</span>
            </label>
            <Input type="text" placeholder="Doe" className="bg-[#1a1b26] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">
            Email <span className="text-primary">*</span>
          </label>
          <Input type="email" placeholder="john@example.com" className="bg-[#1a1b26] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">Phone</label>
          <div className="flex bg-[#1a1b26] border border-white/10 rounded-lg focus-within:border-primary/50 overflow-hidden transition-colors">
            <div className="flex items-center gap-2 px-3 border-r border-white/10 bg-[#161722] cursor-pointer hover:bg-[#1f202e] transition-colors text-sm">
              <span>🇺🇸</span>
              <span className="text-gray-300">+1</span>
            </div>
            <input 
              type="tel" 
              placeholder="201-555-0123" 
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-600 px-3 py-2 text-sm"
            />
          </div>
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

        <div className="space-y-1.5 relative">
          <label className="text-sm font-medium text-gray-300">
            Confirm Password <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <Input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="••••••••" 
              className="bg-[#1a1b26] border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 pr-10" 
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full mt-4 h-12 text-base font-medium flex items-center justify-center gap-2">
          Continue <ChevronRight className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
