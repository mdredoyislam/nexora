"use client";

import { useState } from "react";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: '25 Jul', deposit: 20000, payout: 10000, transfer: 5000 },
  { name: '28 Jul', deposit: 45000, payout: 15000, transfer: 12000 },
  { name: '30 Jul', deposit: 35000, payout: 25000, transfer: 18000 },
  { name: '04 Aug', deposit: 85000, payout: 40000, transfer: 30000 },
  { name: '09 Aug', deposit: 60000, payout: 35000, transfer: 25000 },
  { name: '14 Aug', deposit: 90000, payout: 50000, transfer: 45000 },
  { name: '19 Aug', deposit: 120000, payout: 65000, transfer: 55000 },
  { name: '24 Aug', deposit: 150000, payout: 80000, transfer: 70000 },
];


export default function AdminDashboard() {
  const [profitTab, setProfitTab] = useState('this_week');

  const profitData = {
    this_week: {
      total: "$ 2.20",
      deposit: "$ 2.20",
      depositWidth: "100%",
      payout: "$0.00",
      payoutWidth: "0%",
      transfer: "$0.00",
      transferWidth: "0%",
    },
    last_week: {
      total: "$ 15.50",
      deposit: "$ 10.00",
      depositWidth: "65%",
      payout: "$ 5.50",
      payoutWidth: "35%",
      transfer: "$0.00",
      transferWidth: "0%",
    },
    this_month: {
      total: "$ 145.20",
      deposit: "$ 85.00",
      depositWidth: "58%",
      payout: "$ 45.20",
      payoutWidth: "31%",
      transfer: "$ 15.00",
      transferWidth: "11%",
    },
    last_month: {
      total: "$ 320.50",
      deposit: "$ 150.00",
      depositWidth: "47%",
      payout: "$ 120.50",
      payoutWidth: "38%",
      transfer: "$ 50.00",
      transferWidth: "15%",
    }
  };

  const currentProfit = profitData[profitTab as keyof typeof profitData];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-[1600px] mx-auto">
      
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-[#e69b24] rounded-lg overflow-hidden text-white shadow-sm flex flex-col">
          <div className="p-5 flex-1 relative overflow-hidden">
            <h3 className="text-4xl font-bold mb-2">5</h3>
            <p className="text-white/90">Total Users</p>
            {/* Background Icon */}
            <div className="absolute -right-4 -bottom-4 text-white/20 text-8xl leading-none">👥</div>
          </div>
          <Link href="/users" className="bg-black/10 py-2 px-4 text-sm text-center flex items-center justify-center gap-2 hover:bg-black/20 transition-colors">
            More info <ArrowRightCircle className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-[#d9534f] rounded-lg overflow-hidden text-white shadow-sm flex flex-col">
          <div className="p-5 flex-1 relative overflow-hidden">
            <h3 className="text-4xl font-bold mb-2">4</h3>
            <p className="text-white/90">Total Merchants</p>
            <div className="absolute -right-4 -bottom-4 text-white/20 text-8xl leading-none">🏪</div>
          </div>
          <Link href="/merchants" className="bg-black/10 py-2 px-4 text-sm text-center flex items-center justify-center gap-2 hover:bg-black/20 transition-colors">
            More info <ArrowRightCircle className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-[#00c0ef] rounded-lg overflow-hidden text-white shadow-sm flex flex-col">
          <div className="p-5 flex-1 relative overflow-hidden">
            <h3 className="text-4xl font-bold mb-2">3</h3>
            <p className="text-white/90">Total Tickets</p>
            <div className="absolute -right-4 -bottom-4 text-white/20 text-8xl leading-none">🎫</div>
          </div>
          <Link href="/tickets" className="bg-black/10 py-2 px-4 text-sm text-center flex items-center justify-center gap-2 hover:bg-black/20 transition-colors">
            More info <ArrowRightCircle className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-[#00a65a] rounded-lg overflow-hidden text-white shadow-sm flex flex-col">
          <div className="p-5 flex-1 relative overflow-hidden">
            <h3 className="text-4xl font-bold mb-2">3</h3>
            <p className="text-white/90">Total Dispute</p>
            <div className="absolute -right-4 -bottom-4 text-white/20 text-8xl leading-none">⚖️</div>
          </div>
          <Link href="/disputes" className="bg-black/10 py-2 px-4 text-sm text-center flex items-center justify-center gap-2 hover:bg-black/20 transition-colors">
            More info <ArrowRightCircle className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-white">Last 30 days</h2>
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-white">-</button>
            <button className="text-gray-400 hover:text-white">x</button>
          </div>
        </div>
        
        {/* Chart Area */}
        <div className="h-[350px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 0,
                left: 20,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorDeposit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00c0ef" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00c0ef" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPayout" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f39c12" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f39c12" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorTransfer" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00a65a" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00a65a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis stroke="#6b7280" tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f202e', borderColor: '#ffffff10', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="deposit" stroke="#00c0ef" strokeWidth={3} fillOpacity={1} fill="url(#colorDeposit)" />
              <Area type="monotone" dataKey="payout" stroke="#f39c12" strokeWidth={3} fillOpacity={1} fill="url(#colorPayout)" />
              <Area type="monotone" dataKey="transfer" stroke="#00a65a" strokeWidth={3} fillOpacity={1} fill="url(#colorTransfer)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 text-sm mt-6">
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-3 h-3 rounded-full bg-[#00c0ef]"></div>
            Deposit
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-3 h-3 rounded-full bg-[#f39c12]"></div>
            Payout
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-3 h-3 rounded-full bg-[#00a65a]"></div>
            Transfer
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profit Section */}
        <div className="lg:col-span-2 bg-[#1a1b26] border border-white/5 rounded-xl shadow-sm p-6 transition-all duration-300">
          <div className="flex gap-6 border-b border-white/10 mb-6">
            <button 
              onClick={() => setProfitTab('this_week')}
              className={`font-medium pb-3 px-2 transition-colors ${profitTab === 'this_week' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'}`}
            >
              This Week
            </button>
            <button 
              onClick={() => setProfitTab('last_week')}
              className={`font-medium pb-3 px-2 transition-colors ${profitTab === 'last_week' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'}`}
            >
              Last Week
            </button>
            <button 
              onClick={() => setProfitTab('this_month')}
              className={`font-medium pb-3 px-2 transition-colors ${profitTab === 'this_month' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'}`}
            >
              This Month
            </button>
            <button 
              onClick={() => setProfitTab('last_month')}
              className={`font-medium pb-3 px-2 transition-colors ${profitTab === 'last_month' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'}`}
            >
              Last Month
            </button>
          </div>

          <div className="flex justify-between items-center mb-8 px-4">
            <span className="text-lg font-bold text-white">Total Profit</span>
            <span className="text-lg font-bold text-white">{currentProfit.total}</span>
          </div>

          <div className="space-y-6 px-4">
            <div className="flex items-center gap-4">
              <span className="w-28 text-sm text-gray-400">Deposit Profit</span>
              <div className="flex-1 bg-white/5 h-6 rounded overflow-hidden flex items-center relative">
                <div 
                  className="h-full bg-[#00c0ef] flex items-center px-2 absolute left-0 transition-all duration-500" 
                  style={{ width: currentProfit.depositWidth }}
                >
                  {currentProfit.depositWidth !== "0%" && <span className="text-xs text-white/90 drop-shadow-sm">{currentProfit.deposit}</span>}
                </div>
                {currentProfit.depositWidth === "0%" && <span className="text-xs text-gray-500 px-2 absolute left-0">{currentProfit.deposit}</span>}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-28 text-sm text-gray-400">Payout Profit</span>
              <div className="flex-1 bg-white/5 h-6 rounded overflow-hidden flex items-center relative">
                <div 
                  className="h-full bg-[#f39c12] flex items-center px-2 absolute left-0 transition-all duration-500" 
                  style={{ width: currentProfit.payoutWidth }}
                >
                  {currentProfit.payoutWidth !== "0%" && <span className="text-xs text-white/90 drop-shadow-sm">{currentProfit.payout}</span>}
                </div>
                {currentProfit.payoutWidth === "0%" && <span className="text-xs text-gray-500 px-2 absolute left-0">{currentProfit.payout}</span>}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-28 text-sm text-gray-400">Transfer Profit</span>
              <div className="flex-1 bg-white/5 h-6 rounded overflow-hidden flex items-center relative">
                <div 
                  className="h-full bg-[#00a65a] flex items-center px-2 absolute left-0 transition-all duration-500" 
                  style={{ width: currentProfit.transferWidth }}
                >
                  {currentProfit.transferWidth !== "0%" && <span className="text-xs text-white/90 drop-shadow-sm">{currentProfit.transfer}</span>}
                </div>
                {currentProfit.transferWidth === "0%" && <span className="text-xs text-gray-500 px-2 absolute left-0">{currentProfit.transfer}</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Balance Section */}
        <div className="bg-[#1a1b26] border border-white/5 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-white mb-6">Wallet Balance</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-sm text-gray-300">USD</span>
              <span className="text-sm text-gray-300">51,148.93</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-sm text-gray-300">GBP</span>
              <span className="text-sm text-gray-300">25,824.98</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-sm text-gray-300">EUR</span>
              <span className="text-sm text-gray-300">1,689.99</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-sm text-gray-300">DOGETEST</span>
              <span className="text-sm text-gray-300">2.00000000</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-sm text-gray-300">BTCTEST</span>
              <span className="text-sm text-gray-300">0.00000000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Latest Ticket */}
        <div className="bg-[#1a1b26] border border-white/5 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-white mb-6">Latest Ticket</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="pb-3 font-medium">Subject</th>
                  <th className="pb-3 font-medium">User</th>
                  <th className="pb-3 font-medium">Priority</th>
                  <th className="pb-3 font-medium">Created Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 divide-y divide-white/5">
                <tr>
                  <td className="py-4 text-primary">New Tickets</td>
                  <td className="py-4 text-primary">Kyla watson</td>
                  <td className="py-4">Normal</td>
                  <td className="py-4">20-08-2021 7:56 AM</td>
                </tr>
                <tr>
                  <td className="py-4 text-primary">New Ticket</td>
                  <td className="py-4 text-primary">Irish watson</td>
                  <td className="py-4">Low</td>
                  <td className="py-4">22-08-2021 7:56 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Latest Dispute */}
        <div className="bg-[#1a1b26] border border-white/5 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-white mb-6">Latest Dispute</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="pb-3 font-medium">Dispute</th>
                  <th className="pb-3 font-medium">Claimant</th>
                  <th className="pb-3 font-medium">Created Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 divide-y divide-white/5">
                <tr>
                  <td className="py-4 text-primary">Product has a color issue</td>
                  <td className="py-4 text-primary">Kyla watson</td>
                  <td className="py-4">23-08-2021 4:50 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
