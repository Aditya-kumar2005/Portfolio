"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links: [string, string][] = [
  ["Home", "/"],
  ["Journey", "/#journey"],
  ["Architecture", "/#architecture"],
  ["Projects", "/#projects"],
  ["Tech Stack", "/#stack"],
  ["Credential", "/#credentials"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-40 backdrop-blur-md">
      <div className="container-main flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[#ff3b5c] font-mono text-[12px] font-bold text-[#0a0b0f]">A</span>
          <span className="text-[14px] font-semibold tracking-[-.02em]">Aditya<span className="text-[#ff3b5c]">.dev</span></span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link text-[13px] text-[#a5b1b5] hover:text-white">{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-full bg-[#ff3b5c] px-5 py-2.5 text-[12.5px] font-semibold text-[#0a0b0f] transition hover:opacity-90 sm:inline-flex">
            Say Hi
          </Link>
          <button aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center border border-[#202c35] bg-[#0e1319] text-white/70 md:hidden">
            {open ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#182129] bg-[#0a0e13] md:hidden">
          <nav className="container-main flex flex-col py-3" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-[#182129] py-4 text-sm text-white/70 last:border-0">{label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 py-3 text-sm font-semibold text-[#ff3b5c]">Say Hi →</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
