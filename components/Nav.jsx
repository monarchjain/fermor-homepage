"use client";
import { useState } from "react";

const links = [
  ["How it works", "#how"],
  ["Who it's for", "#who"],
  ["Principles", "#principles"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-chalk/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="font-display text-2xl font-bold tracking-tight">Fermor</a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="text-sm text-slate2 hover:text-ink">{t}</a>
          ))}
          <a href="#start" className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-chalk hover:bg-moss">Get started</a>
        </nav>
        <button
          className="rounded-md border border-line px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-line px-5 pb-5 md:hidden" aria-label="Mobile">
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 text-lg">{t}</a>
          ))}
          <a href="#start" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-ink py-3 text-center font-medium text-chalk">Get started</a>
        </nav>
      )}
    </header>
  );
}
