import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Wallet } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#111116] text-white">
      {/* Left Sidebar (Branding & Illustration) */}
      <div className="hidden md:flex flex-col w-[45%] bg-[#1a1b26] p-12 justify-between border-r border-white/5 relative overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-2 z-10">
          <div className="bg-primary/20 p-2 rounded-xl">
            <Wallet className="w-8 h-8 text-primary" />
          </div>
          <span className="text-3xl font-bold tracking-tight">NEXORA</span>
        </div>

        {/* Messaging */}
        <div className="z-10 mt-16 max-w-md">
          <p className="text-gray-400 mb-2 font-medium">Hassle free money</p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            TRANSACTIONS <br />
            <span className="text-gray-300">Right at your fingertips</span>
          </h1>
        </div>

        {/* Abstract shapes / illustration placeholder */}
        <div className="flex-1 relative z-10 mt-12 flex items-center justify-center">
          {/* We use a stylized CSS representation of the vector art */}
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-primary/30 rounded-full flex items-center justify-center border-dashed">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <span className="text-5xl">💎</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background waves */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" className="text-primary/10" />
            <path d="M0,70 Q25,45 50,70 T100,70 L100,100 L0,100 Z" fill="currentColor" className="text-primary/20" />
          </svg>
        </div>
      </div>

      {/* Right Content Area (Form) */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-24 overflow-y-auto">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-fit mb-8 md:mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <div className="max-w-md w-full mx-auto md:mx-0">
          {children}
        </div>
      </div>
    </div>
  );
}
