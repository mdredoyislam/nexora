import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  Smartphone, 
  DollarSign, 
  Wallet, 
  ShieldCheck, 
  Monitor, 
  BarChart3, 
  Users, 
  Play,
  ArrowRight,
  RefreshCw,
  Search,
  ShoppingCart,
  ZapIcon,
  Phone,
  Calendar,
  UserPlus,
  ChevronDown,
  Terminal,
  Globe,
  CreditCard,
  Send,
  CheckCircle2,
  Lock,
  Clock,
  TrendingUp,
  FileText
} from "lucide-react";

export default function PayMoneyLanding() {
  return (
    <div className="flex flex-col bg-[#1a1829] text-white selection:bg-[#5D5FEF] selection:text-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-8 pb-32 bg-[#f4f7fb]">
        {/* Background Image & Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80')" }}
        />
        {/* Gradient overlays to match the design fade */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute inset-0 z-0 bg-white/20" />

        <div className="container mx-auto px-6 lg:px-24 relative z-10 w-full mt-10">
          <div className="w-full lg:w-3/5 space-y-6">
            <p className="text-[#5D5FEF] font-semibold text-xs tracking-widest uppercase">The Safest & Most Reliable</p>
            <h1 className="text-5xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight uppercase">
              <span className="text-[#5D5FEF]">MONEY</span><br />
              <span className="text-[#1f1d2b]">TRANSACTION</span><br />
              <span className="text-gray-400 font-light text-4xl lg:text-[4rem]">PLATFORM</span>
            </h1>
            <p className="text-gray-500 text-base max-w-md leading-relaxed mt-6 font-medium">
              Sending money globally with multiple currencies to your beloved one easily, safely & securely with low fees in just few minutes.
            </p>
            <div className="pt-8">
              <p className="text-sm text-gray-500 font-semibold mb-4">Let's Get Started..</p>
              <Link href="/auth/register">
                <Button className="bg-[#5D5FEF] hover:bg-[#4a4cd6] text-white rounded-md px-6 py-6 h-auto text-lg font-medium group transition-all w-full sm:w-auto">
                  Create Account 
                  <span className="ml-3 bg-white/20 p-1 rounded-sm group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Solutions Section */}
      <section id="features" className="py-24 relative bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
            <div className="w-full lg:w-1/3 space-y-6 pr-8">
              <p className="text-[#5D5FEF] font-semibold text-xs tracking-widest uppercase">What You Get</p>
              <h2 className="text-3xl font-bold uppercase tracking-wide text-[#1f1d2b]">ALL AROUND<br/>PAYMENT SOLUTIONS</h2>
              <div className="w-12 h-1 bg-[#5D5FEF] my-4" />
              <p className="text-[#1f1d2b] font-medium text-lg leading-snug pt-2">
                The Secure, Easiest And Fastest Money Transfer.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Send, receive, deposit, request, invest and exchange money globally in multiple currencies easily, quickly and safely with great rates and low fees.
              </p>
              <Link href="#solutions">
                <Button className="bg-[#5D5FEF] hover:bg-[#4a4cd6] text-white rounded-md px-8 py-2 mt-4 text-sm">
                  Learn More →
                </Button>
              </Link>
            </div>
            
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2">
              <div className="flex gap-4 p-8 border-b md:border-r border-gray-100">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Terminal className="w-10 h-10 text-[#5D5FEF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#5D5FEF]">Payment<br/><span className="text-[#1f1d2b]">API</span></h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Manage customer's Pay Money experience by integrating our seamless API interface within your website.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-8 border-b border-gray-100">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <RefreshCw className="w-10 h-10 text-[#5D5FEF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#5D5FEF]">Currency<br/><span className="text-[#1f1d2b]">Exchange</span></h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Exchange from one currency to another is a very simple & quick way. Crypto currency also supported.</p>
                </div>
              </div>

              <div className="flex gap-4 p-8 md:border-r border-gray-100">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Globe className="w-10 h-10 text-[#5D5FEF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#5D5FEF]">Online<br/><span className="text-[#1f1d2b]">Payments</span></h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Whether it is credit, debit or bank account you can pay in your preferred channel or method.</p>
                </div>
              </div>

              <div className="flex gap-4 p-8">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Send className="w-10 h-10 text-[#5D5FEF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#5D5FEF]">Payment<br/><span className="text-[#1f1d2b]">Request</span></h3>
                  <p className="text-gray-500 text-sm leading-relaxed">By these systems now you can request for payment from one person to another, within seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-80 hover:opacity-100 transition-all duration-500">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="VISA" className="h-5 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-8 object-contain" />
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#1f1d2b]">
               <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">C</div>
               CoinPayments
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-8 object-contain" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#5D5FEF] font-semibold text-xs tracking-widest uppercase mb-2">Our Benefits</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-[#1f1d2b]">REASONS TO CHOOSE US</h2>
            <div className="w-12 h-1 bg-[#5D5FEF] mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-[#5D5FEF]" />
                </div>
                <h3 className="font-semibold text-lg text-[#5D5FEF]">Low<br/><span className="text-[#1f1d2b]">Cost</span></h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">A built in system with the lowest possible cost that energizes customer to grab it.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#5D5FEF]" />
                </div>
                <h3 className="font-semibold text-lg text-[#5D5FEF]">Easy<br/><span className="text-[#1f1d2b]">Process</span></h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Easily processable and maintainable system that allows you to process and track records.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center">
                  <Clock className="w-8 h-8 text-[#5D5FEF]" />
                </div>
                <h3 className="font-semibold text-lg text-[#5D5FEF]">Faster<br/><span className="text-[#1f1d2b]">Payments</span></h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Make payment from one corner of the world to another in just a few seconds. Making payment is very easy and fast.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center">
                  <Lock className="w-8 h-8 text-[#5D5FEF]" />
                </div>
                <h3 className="font-semibold text-lg text-[#5D5FEF]">Secure<br/><span className="text-[#1f1d2b]">& Safe</span></h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Customer's data security is the first priority. Make your transactions safe, sound and secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="solutions" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#5D5FEF] font-semibold text-xs tracking-widest uppercase mb-2">Solutions</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-[#1f1d2b]">SERVICES WE PROVIDE</h2>
            <div className="w-12 h-1 bg-[#5D5FEF] mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#f8f9fa] p-8 rounded-xl hover:-translate-y-1 transition-transform border border-transparent shadow-sm">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <ShoppingCart className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-[#1f1d2b]">E-Commerce</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Easily create your own store and add products. A complete e-commerce with maintainability and efficiency to make an organized store for you.</p>
            </div>

            <div className="bg-[#f8f9fa] p-8 rounded-xl hover:-translate-y-1 transition-transform border border-transparent shadow-sm">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <Monitor className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-[#1f1d2b]">E-Booking</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Allow your customers to make payment for bookings or appointments in a quick, easy and secured process that suits them the most.</p>
            </div>

            <div className="bg-[#5D5FEF] p-8 rounded-xl hover:-translate-y-1 transition-transform shadow-lg">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-white">Crypto Payment</h3>
              <p className="text-white/90 text-sm leading-relaxed">A powerful solution that allows your customers to make payment using crypto coins including Bitcoin, Litecoin, Dogecoin and many more.</p>
            </div>

            <div className="bg-[#f8f9fa] p-8 rounded-xl hover:-translate-y-1 transition-transform border border-transparent shadow-sm">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <Smartphone className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-[#1f1d2b]">Mobile Recharge</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Easily top-up airtime and data on the world's leading mobile operators and makes payments using any of their wallets on the system.</p>
            </div>

            <div className="bg-[#1f1d2b] p-8 rounded-xl hover:-translate-y-1 transition-transform border border-white/5">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-semibold text-lg mb-4">Event Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Do not hesitate to compete with a lot of events. A beautiful and easily trackable event management is provided for making your tasks get done easier.</p>
            </div>

            <div className="bg-[#1f1d2b] p-8 rounded-xl hover:-translate-y-1 transition-transform border border-white/5">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                <UserPlus className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-semibold text-lg mb-4">Instant Onboarding</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Merchants can get payments instantly from anywhere, anytime without any hassle. A simple and better way to expand your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-20">
            <p className="text-[#5D5FEF] font-semibold text-xs tracking-widest uppercase mb-2">The Process</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-[#1f1d2b]">HOW DOES IT WORK?</h2>
            <div className="w-12 h-1 bg-[#5D5FEF] mx-auto mt-6" />
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] border-t border-dashed border-gray-300 z-0">
               {/* Zigzag effect approximated by SVG if needed, but a dashed line works well */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl font-bold mb-6 text-[#5D5FEF] shadow-sm">1</div>
                <h3 className="font-semibold text-lg mb-3 text-[#1f1d2b]">Create Account</h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Provide your credentials, create your own account and explore. Creating account is so easy.</p>
              </div>

              <div className="text-center flex flex-col items-center md:mt-16">
                <div className="w-20 h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl font-bold mb-6 text-[#5D5FEF] shadow-sm">2</div>
                <h3 className="font-semibold text-lg mb-3 text-[#1f1d2b]">Send or Request Amount</h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Send or request any amount to your preferred one within seconds. Just search the desired one and send or request for money.</p>
              </div>

              <div className="text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#5D5FEF] flex items-center justify-center text-2xl font-bold mb-6 text-white shadow-lg shadow-[#5D5FEF]/30">3</div>
                <h3 className="font-semibold text-lg mb-3 text-[#1f1d2b]">Select Payment Method</h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">Providing you multiple options to pay according to your desired payment method such as PayPal, Stripe, CoinPayments and many more.</p>
              </div>

              <div className="text-center flex flex-col items-center md:mt-16">
                <div className="w-20 h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl font-bold mb-6 text-[#5D5FEF] shadow-sm">4</div>
                <h3 className="font-semibold text-lg mb-3 text-[#1f1d2b]">Confirmation</h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">After doing all these steps, just confirm with your preference and that's it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Exchange Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-[#5D5FEF] font-semibold text-xs tracking-widest uppercase">For the miners</p>
              <h2 className="text-3xl font-bold uppercase tracking-wide leading-tight text-[#1f1d2b]">
                WE INTRODUCE<br/>CRYPTO EXCHANGE
              </h2>
              <div className="w-12 h-1 bg-[#5D5FEF] my-4" />
              <p className="text-gray-500 leading-relaxed text-sm pt-4">
                Now you can buy, sell or exchange crypto to crypto or fiat to crypto. Our crypto exchange platforms brings all the latest features and security to uplift your crypto currency business and keep on mining.
              </p>
              <div className="pt-4">
                <Link href="/dashboard">
                  <Button className="bg-[#5D5FEF] hover:bg-[#4a4cd6] text-white rounded-md px-8 py-2 text-sm">
                    Visit Crypto →
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl group cursor-pointer aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80" 
                  alt="Crypto Trading Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#5D5FEF]/10 group-hover:bg-[#5D5FEF]/5 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-[#5D5FEF] flex items-center justify-center shadow-lg shadow-[#5D5FEF]/40">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 lg:px-24 max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-[#5D5FEF] font-semibold text-xs tracking-widest uppercase mb-2">We Got You Covered</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-[#1f1d2b]">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="w-12 h-1 bg-[#5D5FEF] mx-auto mt-6" />
          </div>
          
          <div className="space-y-4">
            {[
              "How can I trust Pay Money?",
              "How does PayMoney work?",
              "Who uses PayMoney?",
              "How fast will my transaction be processed?",
              "How can I cancel a transaction?"
            ].map((q, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-[#1f1d2b] hover:text-[#5D5FEF] transition-colors">
                  <span>{q}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </span>
                </summary>
                <div className="text-gray-500 text-sm mt-2 leading-relaxed px-5 pb-5 border-t border-gray-100 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare id sed viverra tortor, tempus eros, vel interdum. Nibh facilisis ultrices nibh convallis. Elit scelerisque iaculis vulputate eget mauris, sagittis. Ac eu morbi aliquet orci.
                </div>
              </details>
            ))}

            <details className="group bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm" open>
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-[#5D5FEF] transition-colors">
                  <span>What fees are there during an exchange?</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </span>
                </summary>
                <div className="text-gray-500 text-sm mt-2 leading-relaxed px-5 pb-5 border-t border-gray-100 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare id sed viverra tortor, tempus eros, vel interdum. Nibh facilisis ultrices nibh convallis. Elit scelerisque iaculis vulputate eget mauris, sagittis. Ac eu morbi aliquet orci.
                </div>
            </details>

            <details className="group bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-[#1f1d2b] hover:text-[#5D5FEF] transition-colors">
                  <span>How does PayMoney work?</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </span>
                </summary>
                <div className="text-gray-500 text-sm mt-2 leading-relaxed px-5 pb-5 border-t border-gray-100 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </details>
            
            <details className="group bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-[#1f1d2b] hover:text-[#5D5FEF] transition-colors">
                  <span>Why trust PayMoney?</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </span>
                </summary>
                <div className="text-gray-500 text-sm mt-2 leading-relaxed px-5 pb-5 border-t border-gray-100 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </details>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-24">
            <p className="text-[#5D5FEF] font-semibold text-xs tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-[#1f1d2b]">REVIEW OF OUR CLIENTS</h2>
            <div className="w-12 h-1 bg-[#5D5FEF] mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8">
            <div className="bg-[#f8f9fa] p-8 pt-12 rounded-xl border border-gray-50 relative mt-8 opacity-70 hover:opacity-100 transition-opacity shadow-sm">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-[6px] border-white overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                "Is it what they claim to be, an all in one payment solution. My everyday useful product. Love it &lt;3"
              </p>
              <h4 className="font-bold text-sm text-[#1f1d2b]">Renie Jess Brown</h4>
              <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wider">Entrepreneur</p>
            </div>
            
            <div className="bg-white p-8 pt-12 rounded-xl relative mt-8 transform md:-translate-y-4 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-[6px] border-white overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 text-xs leading-relaxed mb-6 italic">
                One of the best money transferring platform, period! We used paymoney for our business and our customers are using it everyday and haven't faced any problems so far. Besides, the techvillage team is pretty talented.
              </p>
              <h4 className="font-bold text-sm text-[#1f1d2b]">Raja Khan Rohan</h4>
              <p className="text-[#5D5FEF] font-semibold text-[10px] mt-1 uppercase tracking-wider">CTO, Baribazaar.com</p>
            </div>
            
            <div className="bg-[#f8f9fa] p-8 pt-12 rounded-xl border border-gray-50 relative mt-8 opacity-70 hover:opacity-100 transition-opacity shadow-sm">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-[6px] border-white overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-6 italic">
                Full of great features, everything you would like to have in a payment system. Would love it so much if it can tackle with the big boys. Cheers!
              </p>
              <h4 className="font-bold text-sm text-[#1f1d2b]">Mike Cakuloo</h4>
              <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wider">Technical Lead, Cuber Drive</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-12 gap-2">
            <div className="w-6 h-1.5 bg-[#5D5FEF] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#5D5FEF]/10 to-transparent opacity-50 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-24 max-w-5xl">
          <div className="bg-[#1f1d2b] rounded-3xl p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden border border-white/5 shadow-2xl">
            {/* Geometric accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dots-pattern opacity-10" />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border border-white/5" />
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full border border-white/5" />

            <div className="w-full lg:w-1/2 relative flex justify-center z-10">
              {/* CSS Mobile Mockup */}
              <div className="relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] border-8 border-gray-800 p-4 shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                
                <div className="h-full w-full bg-[#5D5FEF] rounded-2xl relative overflow-hidden flex flex-col">
                  {/* Decorative elements in app */}
                  <div className="absolute top-10 right-10 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute top-24 left-8 w-12 h-12 bg-white rounded-lg opacity-20" />
                  <div className="absolute top-40 right-6 w-16 h-16 rounded-full bg-white opacity-10" />
                  
                  <div className="flex-1 flex flex-col justify-end p-6 bg-gradient-to-t from-[#4a4cd6] to-transparent">
                    <h3 className="text-white font-bold text-2xl leading-tight mb-2">Easy Online<br/>Payment</h3>
                    <p className="text-white/80 text-[10px] leading-relaxed mb-8">Breaking the hassle in online payment, we bring to you an all in one online money transferring solution</p>
                    <div className="w-full h-1 bg-white/30 rounded-full mb-2">
                       <div className="w-1/3 h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6 z-10 text-center lg:text-left">
              <p className="text-[#5D5FEF] font-semibold text-xs tracking-widest uppercase">Download The App</p>
              <h2 className="text-3xl font-bold uppercase tracking-wide text-white">TRY IT ON MOBILE TODAY</h2>
              <div className="w-12 h-1 bg-[#5D5FEF] mx-auto lg:mx-0 mt-4 mb-8" />
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <div className="h-12 px-6 bg-white border border-gray-200 hover:bg-gray-50 transition-colors rounded-lg flex items-center justify-center gap-3 cursor-pointer shadow-sm">
                  <svg className="w-6 h-6 text-[#1f1d2b]" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12L3.61 22.186C3.376 22.046 3.176 21.848 3.027 21.605C2.879 21.363 2.8 21.085 2.8 20.8V3.2C2.8 2.915 2.879 2.637 3.027 2.395C3.176 2.152 3.376 1.954 3.609 1.814Z"/><path d="M14.657 12.866L18.423 16.632L4.654 23.518C4.542 23.574 4.418 23.604 4.293 23.605C4.053 23.607 3.821 23.535 3.626 23.4L14.657 12.866Z"/><path d="M14.657 11.134L3.626 0.6C3.821 0.465 4.053 0.393 4.293 0.395C4.418 0.396 4.542 0.426 4.654 0.482L18.423 7.368L14.657 11.134Z"/><path d="M19.289 8.234L21.378 9.278C21.758 9.467 22.079 9.771 22.292 10.141C22.505 10.512 22.6 10.929 22.574 11.344C22.548 11.759 22.404 12.156 22.159 12.489C21.913 12.822 21.579 13.078 21.196 13.228L19.289 15.766L15.523 12L19.289 8.234Z"/></svg>
                  <div className="flex flex-col items-start"><span className="text-[10px] uppercase tracking-wider text-gray-500">Get it on</span><span className="text-sm font-bold text-[#1f1d2b] leading-none">Google Play</span></div>
                </div>
                
                <div className="h-12 px-6 bg-white border border-gray-200 hover:bg-gray-50 transition-colors rounded-lg flex items-center justify-center gap-3 cursor-pointer shadow-sm">
                  <svg className="w-6 h-6 text-[#1f1d2b]" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 7.03C17.202 5.986 17.766 4.582 17.615 3.16C16.425 3.208 14.869 3.978 13.987 5.039C13.189 5.986 12.518 7.426 12.705 8.815C13.992 8.915 15.503 8.087 16.365 7.03ZM17.481 9.076C15.592 9.076 13.921 10.264 12.912 10.264C11.904 10.264 10.457 9.176 8.878 9.176C6.792 9.176 4.887 10.428 3.823 12.285C1.657 16.037 3.276 21.575 5.374 24.629C6.4 26.118 7.608 27.817 9.191 27.755C10.74 27.691 11.315 26.755 13.13 26.755C14.945 26.755 15.485 27.755 17.104 27.755C18.723 27.755 19.802 26.241 20.809 24.752C21.97 23.013 22.457 21.328 22.477 21.23C22.434 21.206 19.16 19.957 19.139 16.096C19.117 12.859 21.782 11.554 21.902 11.493C20.44 9.296 18.066 9.076 17.481 9.076Z"/></svg>
                  <div className="flex flex-col items-start"><span className="text-[10px] uppercase tracking-wider text-gray-500">Download on the</span><span className="text-sm font-bold text-[#1f1d2b] leading-none">App Store</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
