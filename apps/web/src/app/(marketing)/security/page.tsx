export default function SecurityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Security First</h1>
      <div className="grid gap-8 md:grid-cols-2 mt-12">
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-semibold mb-4 text-[#00E599]">Non-Custodial</h3>
          <p className="text-zinc-400">
            NEXORA never asks for, nor stores, your private keys or seed phrases. You maintain complete control of your assets.
          </p>
        </div>
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-semibold mb-4 text-[#00E599]">Client-Side Signing</h3>
          <p className="text-zinc-400">
            All transaction signatures are processed securely through your connected Web3 wallet. Our servers never touch your private data.
          </p>
        </div>
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-semibold mb-4 text-[#00E599]">Audited Smart Contracts</h3>
          <p className="text-zinc-400">
            We integrate only with battle-tested and audited smart contracts for swaps and on-chain interactions.
          </p>
        </div>
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-semibold mb-4 text-[#00E599]">Privacy Preserving</h3>
          <p className="text-zinc-400">
            We collect minimal data required to provide portfolio analytics, respecting your privacy and Web3 ethos.
          </p>
        </div>
      </div>
    </div>
  );
}
