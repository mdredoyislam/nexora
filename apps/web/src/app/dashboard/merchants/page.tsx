"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Plus, Eye, Settings, Code, X, Printer, Copy, Check } from "lucide-react";

interface Merchant {
  id: string;
  name: string;
  url: string;
  merchantId: string;
  status: "Moderation" | "Approved";
  currency: string;
  type: string;
  logoUrl: string;
}

const mockMerchants: Merchant[] = [
  {
    id: "1",
    name: "Berger",
    url: "http://berger.com",
    merchantId: "LDWOFPPW6YEOJ",
    status: "Moderation",
    currency: "EUR",
    type: "Express",
    logoUrl: "https://via.placeholder.com/40x40/1a1b26/ffffff?text=BE"
  },
  {
    id: "2",
    name: "Flipkart",
    url: "http://www.flipkart.com",
    merchantId: "Z3IKX4CNC2ULK",
    status: "Approved",
    currency: "USD",
    type: "Standard",
    logoUrl: "https://via.placeholder.com/40x40/1a1b26/ffffff?text=FL"
  },
  {
    id: "3",
    name: "eBay",
    url: "http://eBay.com",
    merchantId: "J7OJ4STR4ZMXJ",
    status: "Approved",
    currency: "GBP",
    type: "Standard",
    logoUrl: "https://via.placeholder.com/40x40/1a1b26/ffffff?text=EB"
  },
  {
    id: "4",
    name: "Amazon",
    url: "http://amazon.com",
    merchantId: "X43BS17Y7PL81",
    status: "Moderation",
    currency: "USD",
    type: "Standard",
    logoUrl: "https://via.placeholder.com/40x40/1a1b26/ffffff?text=AM"
  }
];

export default function MerchantsPage() {
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant | null>(null);
  const [modalType, setModalType] = useState<"details" | "htmlForm" | null>(null);
  const [copied, setCopied] = useState(false);

  const openDetails = (merchant: Merchant) => {
    setSelectedMerchant(merchant);
    setModalType("details");
  };

  const openHtmlForm = (merchant: Merchant) => {
    setSelectedMerchant(merchant);
    setModalType("htmlForm");
    setCopied(false);
  };

  const closeModal = () => {
    setSelectedMerchant(null);
    setModalType(null);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-wide">MERCHANTS</h1>
        <p className="text-gray-400">List of all the merchant accounts in one place</p>
      </div>

      <div className="flex justify-end mb-6">
        <Button className="flex items-center gap-2 h-12 px-6">
          <Plus className="w-4 h-4" /> New Merchant
        </Button>
      </div>

      <div className="bg-[#1a1b26] rounded-2xl border border-white/5 overflow-hidden">
        <div className="divide-y divide-white/5">
          {mockMerchants.map((merchant) => (
            <div key={merchant.id} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] transition-colors gap-4 group">
              <div className="flex items-center gap-4 md:w-1/3">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                   <img src={merchant.logoUrl} alt={merchant.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{merchant.name}</h3>
                  <a href={merchant.url} target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-primary transition-colors">
                    {merchant.url}
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <h3 className="font-mono text-white mb-1">{merchant.merchantId}</h3>
                <p className={`text-sm ${merchant.status === "Approved" ? "text-green-500" : "text-orange-400"}`}>
                  {merchant.status}
                </p>
              </div>

              <div className="md:w-1/6">
                <h3 className="font-medium text-white mb-1">{merchant.currency}</h3>
                <p className="text-sm text-gray-500">{merchant.type}</p>
              </div>

              <div className="flex items-center justify-end gap-2 md:w-1/6">
                {merchant.status === "Approved" && (
                  <button 
                    onClick={() => openHtmlForm(merchant)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="Generate HTML Form"
                  >
                    <Code className="w-4 h-4" />
                  </button>
                )}
                <button 
                  onClick={() => openDetails(merchant)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HTML Form Generator Modal */}
      {selectedMerchant && modalType === "htmlForm" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-xl font-bold">HTML Form Generator</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-1.5 block">Merchant ID</label>
                    <input type="text" readOnly value={selectedMerchant.merchantId} className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white font-mono text-sm" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-1.5 block">Item Name</label>
                    <input type="text" defaultValue="Shirt" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:border-primary/50 outline-none" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-1.5 block">Order Number</label>
                    <input type="text" defaultValue="#PM000129" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:border-primary/50 outline-none" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-1.5 flex justify-between">
                      <span>Price</span>
                      <span className="text-primary">{selectedMerchant.currency}</span>
                    </label>
                    <input type="text" defaultValue="29.50" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:border-primary/50 outline-none" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-1.5 block">Custom</label>
                    <input type="text" defaultValue="Please pay the order" className="w-full bg-[#161722] border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:border-primary/50 outline-none" />
                  </div>
                  <Button className="w-full">Generate Form</Button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm text-gray-400">Generated HTML Form</label>
                    <button onClick={handleCopy} className="text-xs flex items-center gap-1 text-primary hover:text-primary/80 transition-colors">
                      {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
                    </button>
                  </div>
                  <div className="bg-[#161722] border border-white/10 rounded-lg p-4 h-[350px] overflow-y-auto text-xs text-gray-300 font-mono">
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pay Money</title>
</head>
<body>
    <form action="https://nexora.com/payment" method="POST">
        <input type="hidden" name="merchant" value="${selectedMerchant.merchantId}">
        <input type="hidden" name="amount" value="29.50">
        <input type="hidden" name="currency" value="${selectedMerchant.currency}">
        <input type="hidden" name="order_id" value="#PM000129">
        <input type="hidden" name="item_name" value="Shirt">
        <input type="hidden" name="custom" value="Please pay the order">
        <button type="submit">Pay Now</button>
    </form>
</body>
</html>`}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center border-t border-white/5 pt-8">
                <p className="text-sm text-gray-400 mb-6">Copy the form code and place it on your website or use the QR code below for payment</p>
                <div className="inline-block bg-white p-2 rounded-lg">
                  {/* Mock QR Code */}
                  <div className="w-32 h-32 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=nexora-merchant-demo')] bg-cover"></div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-white/5 flex gap-4 justify-center bg-[#161722]">
              <Button className="flex items-center gap-2 px-8">
                <Printer className="w-4 h-4" /> Print
              </Button>
              <Button variant="outline" className="px-8 border-white/20 text-white hover:bg-white/5">
                Generate Again
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Merchant Details Modal */}
      {selectedMerchant && modalType === "details" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-xl font-bold">Merchant Details</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between bg-[#161722] p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center font-bold text-lg">
                    {selectedMerchant.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">ID: {selectedMerchant.merchantId}</p>
                    <h3 className="text-lg font-bold">{selectedMerchant.name}</h3>
                  </div>
                </div>
                <Button variant="outline" className="h-9 text-xs border-primary text-primary hover:bg-primary/10">
                  Edit Merchant
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold mb-1">
                    {selectedMerchant.name}
                    <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider ${selectedMerchant.status === "Approved" ? "bg-green-500/20 text-green-500" : "bg-orange-500/20 text-orange-400"}`}>
                      {selectedMerchant.status}
                    </span>
                  </h4>
                  <a href={selectedMerchant.url} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                    {selectedMerchant.url}
                  </a>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Currency</p>
                      <p className="font-medium text-lg">{selectedMerchant.currency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Created on</p>
                      <p className="font-medium text-sm">21-07-2023 5:27 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#161722] p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-500 mb-2">Message</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in purus sem. Phasellus auctor facilisis velit at rhoncus. Maecenas sed enim eu orci scelerisque lobortis porttitor id erat. Quisque congue porttitor placerat. Fusce malesuada hendrerit est ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
