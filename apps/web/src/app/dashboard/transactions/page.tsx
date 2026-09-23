"use client";

import { useState } from "react";
import { Filter, ChevronLeft, ChevronRight, ChevronRight as ChevronRightSmall, ArrowUpRight, ArrowDownRight, Bitcoin, Euro, DollarSign, X, Printer } from "lucide-react";

type TransactionStatus = "Success" | "Pending" | "Cancelled";
type TransactionType = "Withdrawal" | "Payment Received" | "Exchange To" | "Exchange From" | "Request Received" | "Request Sent" | "Transferred" | "Deposit";

interface Transaction {
  id: string;
  type: TransactionType;
  method: string;
  date: string;
  amount: string;
  status: TransactionStatus;
  isPositive: boolean;
  iconType: "crypto" | "fiat-eur" | "fiat-usd" | "paypal" | "user" | "stripe" | "flipkart";
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "Withdrawal",
    method: "Crypto",
    date: "24-07-2023 5:19 AM",
    amount: "Ξ 0.053",
    status: "Pending",
    isPositive: false,
    iconType: "crypto"
  },
  {
    id: "2",
    type: "Payment Received",
    method: "Pay Money",
    date: "20-07-2023 6:56 AM",
    amount: "$ 38",
    status: "Success",
    isPositive: true,
    iconType: "flipkart"
  },
  {
    id: "3",
    type: "Exchange To",
    method: "EUR",
    date: "20-07-2023 6:54 AM",
    amount: "€ 85",
    status: "Success",
    isPositive: false,
    iconType: "fiat-eur"
  },
  {
    id: "4",
    type: "Exchange From",
    method: "USD",
    date: "20-07-2023 6:54 AM",
    amount: "$ 100",
    status: "Success",
    isPositive: true,
    iconType: "fiat-usd"
  },
  {
    id: "5",
    type: "Withdrawal",
    method: "Paypal",
    date: "20-07-2023 6:53 AM",
    amount: "£ 50",
    status: "Cancelled",
    isPositive: false,
    iconType: "paypal"
  },
  {
    id: "6",
    type: "Request Received",
    method: "Kyla watson",
    date: "20-07-2023 6:52 AM",
    amount: "$ 10",
    status: "Success",
    isPositive: false,
    iconType: "user"
  },
  {
    id: "7",
    type: "Transferred",
    method: "Kyla watson",
    date: "20-07-2023 6:45 AM",
    amount: "£ 200",
    status: "Success",
    isPositive: false,
    iconType: "user"
  },
  {
    id: "8",
    type: "Deposit",
    method: "Stripe",
    date: "20-07-2023 6:44 AM",
    amount: "$ 750",
    status: "Success",
    isPositive: true,
    iconType: "stripe"
  }
];

export default function TransactionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);

  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case "Success": return "text-green-500";
      case "Pending": return "text-orange-400";
      case "Cancelled": return "text-red-500";
      default: return "text-gray-400";
    }
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case "crypto":
        return <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30"><Bitcoin className="w-6 h-6" /></div>;
      case "fiat-eur":
        return <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center border border-blue-600/30"><Euro className="w-6 h-6" /></div>;
      case "fiat-usd":
        return <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center border border-green-500/30"><DollarSign className="w-6 h-6" /></div>;
      case "paypal":
        return <div className="w-12 h-12 rounded-full bg-blue-400/20 text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-400/30">P</div>;
      case "user":
        return <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-xl border border-teal-500/30 overflow-hidden"><img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" /></div>;
      case "stripe":
        return <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-2xl border border-indigo-500/30">S</div>;
      case "flipkart":
        return <div className="w-12 h-12 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center font-bold text-xl border border-yellow-500/30">F</div>;
      default:
        return <div className="w-12 h-12 rounded-full bg-gray-500/20 text-gray-400 flex items-center justify-center border border-gray-500/30">?</div>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-wide">TRANSACTIONS</h1>
        <p className="text-gray-400">History of transactions in your account</p>
      </div>

      <div className="bg-[#1a1b26] rounded-2xl border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-300">All Transactions</h2>
          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-[#2a2b3d] px-4 py-2 rounded-lg">
            Filter <Filter className="w-4 h-4 text-primary" />
          </button>
        </div>

        <div className="divide-y divide-white/5">
          {mockTransactions.map((tx) => (
            <div 
              key={tx.id} 
              onClick={() => setSelectedTx(tx)}
              className="p-4 md:p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {renderIcon(tx.iconType)}
                <div>
                  <h3 className="font-bold text-white text-base">{tx.type}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span className="font-medium">{tx.method}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>{tx.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className={`flex items-center justify-end gap-1 font-bold ${tx.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {tx.isPositive ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    {tx.amount}
                  </div>
                  <div className={`text-xs mt-1 font-medium ${getStatusColor(tx.status)}`}>
                    {tx.status}
                  </div>
                </div>
                <ChevronRightSmall className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors hidden sm:block" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 text-sm text-gray-500 hover:text-white flex items-center gap-1">
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-colors ${
                  currentPage === page ? "bg-primary text-white" : "text-gray-400 hover:bg-white/5"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-3 py-1 text-sm text-gray-500 hover:text-white flex items-center gap-1">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Showing: 1 - 10 of 66
          </div>
        </div>
      </div>

      {/* Transaction Details Modal */}
      {selectedTx && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-xl font-bold">Transaction Details</h2>
              <button 
                onClick={() => setSelectedTx(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Left Side (Receipt Style) */}
              <div className="bg-[#161722] p-8 md:w-2/5 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/5">
                <div className="mb-4">
                  {renderIcon(selectedTx.iconType)}
                </div>
                <p className="text-gray-400 text-sm mb-1">{selectedTx.type} Amount</p>
                <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-1">
                  {selectedTx.isPositive ? <ArrowDownRight className="w-5 h-5 text-green-500" /> : <ArrowUpRight className="w-5 h-5 text-red-500" />}
                  {selectedTx.amount}
                </h3>
                <p className="text-gray-500 text-xs mb-8">{selectedTx.date}</p>
                
                <button className="flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white px-6 py-2 rounded-lg transition-colors text-sm">
                  <Printer className="w-4 h-4" /> Print
                </button>
              </div>

              {/* Right Side (Details Grid) */}
              <div className="p-8 md:w-3/5">
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Action By</p>
                    <p className="text-sm font-medium">Irish watson</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Currency</p>
                    <p className="text-sm font-medium">{selectedTx.method}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Transaction ID</p>
                    <p className="text-sm font-medium font-mono text-gray-300">D3DCDAF1ACA18</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Transaction Fee</p>
                    <p className="text-sm font-medium">0.00646</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs mb-1">Payment Method</p>
                    <p className="text-sm font-medium">{selectedTx.method}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Status</p>
                    <p className={`text-sm font-bold ${getStatusColor(selectedTx.status)}`}>
                      {selectedTx.status}
                    </p>
                  </div>

                  <div className="col-span-2 pt-4 border-t border-white/5 mt-2 grid grid-cols-2">
                    <div>
                      <p className="text-gray-500 text-xs mb-1">{selectedTx.type} Amount</p>
                      <p className="text-sm font-medium">{selectedTx.amount}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-1">Total Amount</p>
                      <p className="text-sm font-medium">{selectedTx.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
