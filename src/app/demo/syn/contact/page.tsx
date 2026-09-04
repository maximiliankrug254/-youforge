import { SynFooter } from "@/components/demo/syn/SynFooter";

export default function Contact() {
  return (
    <main className="bg-[#fff9f7] px-4 pt-28 sm:px-12">
      <h1 className="font-[family-name:var(--font-syn-display)] text-[clamp(3rem,8vw,7rem)] uppercase leading-none">
        Contact Us
      </h1>
      <form className="mt-12 max-w-lg space-y-6">
        <input className="w-full border-b border-black bg-transparent py-3 outline-none" placeholder="Full Name" />
        <input type="email" className="w-full border-b border-black bg-transparent py-3 outline-none" placeholder="Email" />
        <select className="w-full border-b border-black bg-transparent py-3 outline-none">
          <option>Collaboration</option>
          <option>Orders</option>
          <option>Returns</option>
          <option>Press</option>
        </select>
        <textarea rows={4} className="w-full border-b border-black bg-transparent py-3 outline-none" placeholder="Message" />
        <button type="button" className="bg-black px-8 py-3 font-[family-name:var(--font-syn-mono)] uppercase text-white">
          [ Submit ]
        </button>
      </form>
      <SynFooter />
    </main>
  );
}
