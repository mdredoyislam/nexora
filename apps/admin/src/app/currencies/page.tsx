"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, ChevronDown } from "lucide-react";

const CURRENCIES = [
  { name: "Bitcoin",            code: "BTC",     symbol: "₿",    type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025",      status: "Active" },
  { name: "Uniswap",           code: "UNI",     symbol: "UNI",  type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025",      status: "Active" },
  { name: "Cosmos",            code: "ATOM",    symbol: "ATOM", type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/cosmos-atom-logo.png?v=025",      status: "Active" },
  { name: "VeChain",           code: "VET",     symbol: "VET",  type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/vechain-vet-logo.png?v=025",      status: "Active" },
  { name: "Dash",              code: "DASH",    symbol: "DASH", type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/dash-dash-logo.png?v=025",        status: "Active" },
  { name: "TRON",              code: "TRX",     symbol: "TRX",  type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/tron-trx-logo.png?v=025",         status: "Active" },
  { name: "Monero",            code: "XMR",     symbol: "XMR",  type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/monero-xmr-logo.png?v=025",       status: "Active" },
  { name: "Ripple",            code: "XRP",     symbol: "XRP",  type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=025",          status: "Active" },
  { name: "USD Coin",          code: "USDC",    symbol: "USDC", type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=025",    status: "Active" },
  { name: "Tether USD",        code: "USDT",    symbol: "USDT", type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=025",      status: "Active" },
  { name: "Solana",            code: "SOL",     symbol: "SOL",  type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025",       status: "Active" },
  { name: "Polkadot",          code: "DOT",     symbol: "DOT",  type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=025", status: "Active" },
  { name: "Cardano",           code: "ADA",     symbol: "ADA",  type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=025",      status: "Active" },
  { name: "Binance Coin",      code: "BNB",     symbol: "BNB",  type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=025",          status: "Active" },
  { name: "Avalanche",         code: "AVAX",    symbol: "AVAX", type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025",   status: "Active" },
  { name: "Dogecoin",          code: "DOGE",    symbol: "Ð",    type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=025",    status: "Active" },
  { name: "Ethereum",          code: "ETH",     symbol: "Ξ",    type: "Crypto",       rate: "-", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",     status: "Active" },
  { name: "Euro",              code: "EUR",     symbol: "€",    type: "Fiat",         rate: "0.85", logo: "https://flagcdn.com/w40/eu.png",   status: "Active" },
  { name: "Pound Sterling",    code: "GBP",     symbol: "£",    type: "Fiat",         rate: "0.75", logo: "https://flagcdn.com/w40/gb.png",   status: "Active" },
  { name: "US Dollar",         code: "USD",     symbol: "$",    type: "Fiat",         rate: "1",    logo: "https://flagcdn.com/w40/us.png",   status: "Default Currency" },
];

export default function AdminCurrenciesPage() {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [isFeesOpen, setIsFeesOpen] = useState(false);
  const [currencyForFees, setCurrencyForFees] = useState<any>(null);

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [currencyForPayment, setCurrencyForPayment] = useState<any>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currencyToEdit, setCurrencyToEdit] = useState<any>(null);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currencyToDelete, setCurrencyToDelete] = useState<any>(null);

  const [expandedGateway, setExpandedGateway] = useState<string | null>(null);

  const filtered = CURRENCIES.filter(c =>
    `${c.name} ${c.code}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-[#1a1b26] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-white/5 gap-4">
          <h2 className="text-lg font-bold text-white">Currencies</h2>
          <button
            onClick={() => setIsAddOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" /> + Add Currency
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 pb-4 pt-4 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Show
            <select className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 pr-8 focus:outline-none text-sm">
              <option>25</option>
              <option>50</option>
            </select>
            entries
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Search:
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="bg-[#161722] border border-white/10 text-white rounded px-3 py-1.5 focus:outline-none w-48 text-sm" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="px-5 py-3 font-medium"><div className="flex items-center gap-1">Name <ChevronDown className="w-3 h-3" /></div></th>
                <th className="px-5 py-3 font-medium">Code</th>
                <th className="px-5 py-3 font-medium">Symbol</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Rate</th>
                <th className="px-5 py-3 font-medium">Logo</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((c, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors align-middle">
                  <td className="px-5 py-3 text-primary cursor-pointer hover:underline">{c.name}</td>
                  <td className="px-5 py-3 text-gray-300">{c.code}</td>
                  <td className="px-5 py-3 text-gray-300">{c.symbol}</td>
                  <td className="px-5 py-3 text-gray-400">{c.type}</td>
                  <td className="px-5 py-3 text-gray-400">{c.rate}</td>
                  <td className="px-5 py-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                      <img
                        src={c.logo}
                        alt={c.code}
                        className="w-8 h-8 object-contain"
                        onError={e => {
                          (e.target as HTMLImageElement).src = `https://via.placeholder.com/32x32/6366f1/ffffff?text=${c.code[0]}`;
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    {c.status === "Default Currency" ? (
                      <span className="bg-orange-500 text-white text-xs px-2.5 py-1 rounded-sm font-medium whitespace-nowrap">
                        Default Currency
                      </span>
                    ) : (
                      <span className="bg-green-600 text-white text-xs px-2.5 py-1 rounded-sm font-medium">
                        Active
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <button 
                        onClick={() => { setCurrencyToEdit(c); setIsEditOpen(true); }}
                        className="w-7 h-7 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      {c.type !== "Crypto Asset" && (
                        <button 
                          onClick={() => { setCurrencyToDelete(c); setIsDeleteOpen(true); }}
                          className="w-7 h-7 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded flex items-center justify-center transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {(c.type === "Crypto" || c.type === "Fiat") && (
                        <>
                          <button 
                            onClick={() => { setCurrencyForFees(c); setIsFeesOpen(true); }}
                            className="h-7 px-2 bg-orange-500/20 text-orange-400 hover:bg-orange-500 hover:text-white rounded text-xs font-medium transition-colors"
                          >
                            Fees
                          </button>
                          <button 
                            onClick={() => { setCurrencyForPayment(c); setIsPaymentOpen(true); }}
                            className="h-7 px-2 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded text-xs font-medium transition-colors"
                          >
                            Payment-Methods
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-t border-white/5 gap-4">
          <p className="text-sm text-gray-400">Showing 1 to 25 of 25 entries</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">Previous</button>
            <button className="px-3 py-1.5 text-sm bg-primary text-white rounded font-medium">1</button>
            <button className="px-3 py-1.5 text-sm text-gray-400 border border-white/10 rounded hover:text-white">Next</button>
          </div>
        </div>
      </div>

      {/* Add Currency Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Add Currency</h2>
              <button onClick={() => setIsAddOpen(false)} className="text-gray-400 hover:text-white text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Name", placeholder: "Currency name" },
                { label: "Code", placeholder: "e.g. BTC" },
                { label: "Symbol", placeholder: "e.g. ₿" },
              ].map(({ label, placeholder }) => (
                <div key={label} className="space-y-1.5">
                  <label className="text-sm text-gray-400">{label}</label>
                  <input placeholder={placeholder} className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
                </div>
              ))}
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Type</label>
                <select className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none text-sm appearance-none">
                  <option>Crypto</option>
                  <option>Fiat</option>
                </select>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setIsAddOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors">
                Cancel
              </button>
              <button onClick={() => setIsAddOpen(false)} className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors">
                Add Currency
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Currency Modal */}
      {isEditOpen && currencyToEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Edit Currency</h2>
              <button onClick={() => setIsEditOpen(false)} className="text-gray-400 hover:text-white text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Name</label>
                <input defaultValue={currencyToEdit.name} className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-primary/50 text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Status</label>
                <select defaultValue={currencyToEdit.status === "Default Currency" ? "Default Currency" : "Active"} className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none text-sm appearance-none">
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Default Currency</option>
                </select>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setIsEditOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors">
                Cancel
              </button>
              <button onClick={() => setIsEditOpen(false)} className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Currency Modal */}
      {isDeleteOpen && currencyToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Delete {currencyToDelete.name}?</h2>
              <p className="text-sm text-gray-400">Are you sure you want to delete this currency? This action cannot be undone.</p>
            </div>
            <div className="p-6 border-t border-white/5 flex gap-3">
              <button onClick={() => setIsDeleteOpen(false)} className="flex-1 px-5 py-2.5 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors">Cancel</button>
              <button onClick={() => setIsDeleteOpen(false)} className="flex-1 px-5 py-2.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Fees Modal */}
      {isFeesOpen && currencyForFees && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Manage Fees for {currencyForFees.name}</h2>
              <button onClick={() => setIsFeesOpen(false)} className="text-gray-400 hover:text-white text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-2">
                <p className="text-sm text-orange-400">Configure the deposit and withdrawal fees applied to {currencyForFees.code} transactions.</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white">Deposit Fees</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400">Fixed Fee ({currencyForFees.code})</label>
                    <input type="number" defaultValue="0" className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500/50 text-sm font-mono" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400">Percentage Fee (%)</label>
                    <input type="number" defaultValue="1.5" className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500/50 text-sm font-mono" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h3 className="text-sm font-semibold text-white">Withdrawal Fees</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400">Fixed Fee ({currencyForFees.code})</label>
                    <input type="number" defaultValue="0" className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500/50 text-sm font-mono" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400">Percentage Fee (%)</label>
                    <input type="number" defaultValue="2.0" className="w-full bg-[#161722] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500/50 text-sm font-mono" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setIsFeesOpen(false)} className="px-5 py-2.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors">
                Cancel
              </button>
              <button onClick={() => setIsFeesOpen(false)} className="px-5 py-2.5 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">
                Save Fees
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods Modal */}
      {isPaymentOpen && currencyForPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b26] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-lg font-bold text-white">Payment Integrations - {currencyForPayment.name}</h2>
              <button onClick={() => setIsPaymentOpen(false)} className="text-gray-400 hover:text-white text-xl">&times;</button>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="text-sm text-gray-400 mb-4">Enable or configure third-party gateways for {currencyForPayment.code} processing.</p>
              
              {/* Mock List of Payment Methods */}
              <div className="space-y-3">
                <div className="bg-[#161722] border border-white/5 rounded-lg overflow-hidden transition-colors">
                  <div className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer" onClick={() => setExpandedGateway(expandedGateway === 'gateway1' ? null : 'gateway1')}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        {currencyForPayment.type === 'Crypto' ? (
                          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025" className="w-6 h-6 object-contain" alt="Crypto" />
                        ) : (
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" className="w-8 h-auto object-contain" alt="Stripe" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{currencyForPayment.type === 'Crypto' ? 'CoinPayments' : 'Stripe'}</h4>
                        <p className="text-xs text-gray-500">Global Processing</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-primary font-medium">{expandedGateway === 'gateway1' ? 'Close Config' : 'Configure'}</span>
                      <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#161722] peer checked:right-0 checked:border-primary" defaultChecked />
                        <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-[#161722] cursor-pointer border border-white/10 peer-checked:bg-primary"></label>
                      </div>
                    </div>
                  </div>
                  {expandedGateway === 'gateway1' && (
                    <div className="p-4 bg-black/20 border-t border-white/5 space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400">Public Key / Client ID</label>
                        <input type="text" placeholder="Enter public key" className="w-full bg-[#1a1b26] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary/50 text-sm font-mono" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400">Secret Key</label>
                        <input type="password" placeholder="Enter secret key" className="w-full bg-[#1a1b26] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary/50 text-sm font-mono" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400">Webhook Secret (Optional)</label>
                        <input type="password" placeholder="Enter webhook secret" className="w-full bg-[#1a1b26] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary/50 text-sm font-mono" />
                      </div>
                      <div className="flex justify-end pt-2">
                        <button className="px-4 py-2 text-xs bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                          Test Connection
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-[#161722] border border-white/5 rounded-lg overflow-hidden transition-colors">
                  <div className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer" onClick={() => setExpandedGateway(expandedGateway === 'gateway2' ? null : 'gateway2')}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        {currencyForPayment.type === 'Crypto' ? (
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/2560px-Binance_logo.svg.png" className="w-6 h-6 object-contain" alt="Binance" />
                        ) : (
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" className="w-8 h-auto object-contain" alt="PayPal" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{currencyForPayment.type === 'Crypto' ? 'Binance Pay' : 'PayPal'}</h4>
                        <p className="text-xs text-gray-500">Secure Checkout</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-primary font-medium">{expandedGateway === 'gateway2' ? 'Close Config' : 'Configure'}</span>
                      <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#161722] peer checked:right-0 checked:border-primary" />
                        <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-5 rounded-full bg-[#161722] cursor-pointer border border-white/10 peer-checked:bg-primary"></label>
                      </div>
                    </div>
                  </div>
                  {expandedGateway === 'gateway2' && (
                    <div className="p-4 bg-black/20 border-t border-white/5 space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400">Public Key / Client ID</label>
                        <input type="text" placeholder="Enter public key" className="w-full bg-[#1a1b26] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary/50 text-sm font-mono" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400">Secret Key</label>
                        <input type="password" placeholder="Enter secret key" className="w-full bg-[#1a1b26] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary/50 text-sm font-mono" />
                      </div>
                      <div className="flex justify-end pt-2">
                        <button className="px-4 py-2 text-xs bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                          Test Connection
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5">
                  <button className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-2">
                    <span className="text-lg">+</span> Add Custom Gateway
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5 flex justify-end">
              <button onClick={() => setIsPaymentOpen(false)} className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
