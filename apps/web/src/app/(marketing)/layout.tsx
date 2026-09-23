import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Twitter, Linkedin, Youtube, Instagram, Facebook, Moon } from 'lucide-react';
import { FaGooglePlusG, FaPinterestP } from 'react-icons/fa';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1f1d2b] font-sans selection:bg-[#5D5FEF] selection:text-white">
      <header className="px-6 lg:px-24 h-[90px] flex items-center justify-between bg-white border-b border-gray-100 relative z-50">
        <Link href="/" className="flex items-center z-10">
          <span className="text-[#1f1d2b] font-bold text-xl tracking-tight">Pay</span>
          <span className="bg-[#5D5FEF] text-white px-3 py-0.5 rounded-full text-sm font-bold ml-1 lowercase">money</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-sm font-medium text-gray-800 hover:text-[#5D5FEF] transition-colors">Home</Link>
          <Link href="/send" className="text-sm font-medium text-gray-500 hover:text-[#5D5FEF] transition-colors">Send</Link>
          <Link href="/request" className="text-sm font-medium text-gray-500 hover:text-[#5D5FEF] transition-colors">Request</Link>
          <button className="text-gray-400 hover:text-[#5D5FEF] transition-colors ml-2" aria-label="Toggle theme">
            <Moon className="w-4 h-4 text-[#5D5FEF]" />
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button className="bg-[#5D5FEF] hover:bg-[#4a4cd6] text-white rounded-md px-8 h-10 text-sm font-medium transition-colors">Login</Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="outline" className="border-gray-200 hover:bg-gray-50 rounded-md px-8 h-10 text-sm font-medium bg-transparent text-gray-700 transition-colors">Register</Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 bg-white">{children}</main>
      
      <footer className="bg-[#1a1829] pt-24 pb-8 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="col-span-1 md:col-span-4 pr-8">
              <Link href="/" className="flex items-center z-10 mb-6">
                <span className="text-white font-bold text-xl tracking-tight">Pay</span>
                <span className="bg-[#5D5FEF] text-white px-3 py-0.5 rounded-full text-sm font-bold ml-1 lowercase">money</span>
              </Link>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed pr-4">
                PayMoney, a secured online payment gateway that allows payment in multiple currencies easily, safely and securely.
              </p>
              <h4 className="text-white font-semibold mb-4 text-sm">Download Our App</h4>
              <div className="flex gap-3">
                <div className="w-[130px] h-10 bg-black/50 border border-white/10 hover:border-white/30 transition-colors rounded-lg flex items-center justify-center text-xs cursor-pointer">
                   <div className="flex items-center gap-2">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12L3.61 22.186C3.376 22.046 3.176 21.848 3.027 21.605C2.879 21.363 2.8 21.085 2.8 20.8V3.2C2.8 2.915 2.879 2.637 3.027 2.395C3.176 2.152 3.376 1.954 3.609 1.814Z"/><path d="M14.657 12.866L18.423 16.632L4.654 23.518C4.542 23.574 4.418 23.604 4.293 23.605C4.053 23.607 3.821 23.535 3.626 23.4L14.657 12.866Z"/><path d="M14.657 11.134L3.626 0.6C3.821 0.465 4.053 0.393 4.293 0.395C4.418 0.396 4.542 0.426 4.654 0.482L18.423 7.368L14.657 11.134Z"/><path d="M19.289 8.234L21.378 9.278C21.758 9.467 22.079 9.771 22.292 10.141C22.505 10.512 22.6 10.929 22.574 11.344C22.548 11.759 22.404 12.156 22.159 12.489C21.913 12.822 21.579 13.078 21.196 13.228L19.289 15.766L15.523 12L19.289 8.234Z"/></svg>
                     <div className="flex flex-col items-start"><span className="text-[8px] uppercase tracking-wider text-gray-400">Get it on</span><span className="text-xs font-bold leading-none">Google Play</span></div>
                   </div>
                </div>
                <div className="w-[130px] h-10 bg-black/50 border border-white/10 hover:border-white/30 transition-colors rounded-lg flex items-center justify-center text-xs cursor-pointer">
                   <div className="flex items-center gap-2">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 7.03C17.202 5.986 17.766 4.582 17.615 3.16C16.425 3.208 14.869 3.978 13.987 5.039C13.189 5.986 12.518 7.426 12.705 8.815C13.992 8.915 15.503 8.087 16.365 7.03ZM17.481 9.076C15.592 9.076 13.921 10.264 12.912 10.264C11.904 10.264 10.457 9.176 8.878 9.176C6.792 9.176 4.887 10.428 3.823 12.285C1.657 16.037 3.276 21.575 5.374 24.629C6.4 26.118 7.608 27.817 9.191 27.755C10.74 27.691 11.315 26.755 13.13 26.755C14.945 26.755 15.485 27.755 17.104 27.755C18.723 27.755 19.802 26.241 20.809 24.752C21.97 23.013 22.457 21.328 22.477 21.23C22.434 21.206 19.16 19.957 19.139 16.096C19.117 12.859 21.782 11.554 21.902 11.493C20.44 9.296 18.066 9.076 17.481 9.076Z"/></svg>
                     <div className="flex flex-col items-start"><span className="text-[8px] uppercase tracking-wider text-gray-400">Download on the</span><span className="text-xs font-bold leading-none">App Store</span></div>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-white font-semibold mb-6 text-base">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-[#5D5FEF] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#5D5FEF] transition-colors">About Us</Link></li>
                <li><Link href="/dashboard" className="hover:text-[#5D5FEF] transition-colors">Portfolio</Link></li>
                <li><Link href="#contact" className="hover:text-[#5D5FEF] transition-colors">Contact Us</Link></li>
                <li><Link href="#developer" className="hover:text-[#5D5FEF] transition-colors">Developer</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-white font-semibold mb-6 text-base">More Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link href="/send" className="hover:text-[#5D5FEF] transition-colors">Send</Link></li>
                <li><Link href="/request" className="hover:text-[#5D5FEF] transition-colors">Request</Link></li>
                <li><Link href="/dashboard" className="hover:text-[#5D5FEF] transition-colors">Crypto Exchange</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-4">
              <h4 className="text-white font-semibold mb-6 text-base">Social Links</h4>
              <div className="flex flex-wrap gap-3">
                <Link href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#5D5FEF] transition-all flex items-center justify-center text-gray-400 hover:text-white">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#5D5FEF] transition-all flex items-center justify-center text-gray-400 hover:text-white">
                  <FaGooglePlusG className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#5D5FEF] transition-all flex items-center justify-center text-gray-400 hover:text-white">
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#5D5FEF] transition-all flex items-center justify-center text-gray-400 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#5D5FEF] transition-all flex items-center justify-center text-gray-400 hover:text-white">
                  <FaPinterestP className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#5D5FEF] transition-all flex items-center justify-center text-gray-400 hover:text-white">
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#5D5FEF] transition-all flex items-center justify-center text-gray-400 hover:text-white">
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>Copyright © 2022. Pay Money | All Rights Reserved</p>
            <div className="mt-4 md:mt-0 flex items-center gap-2 cursor-pointer hover:text-gray-300">
              Language: English <span className="text-[10px]">▼</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
