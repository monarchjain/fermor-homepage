"use client";
import { useState } from "react";

const pillars = [
  {
    id: "understand",
    tab: "Understand",
    title: "See where your money stands, in plain words.",
    body: "Bring your accounts into one view. Every figure comes with a short explanation of what it means and where it came from, so you never have to guess.",
    points: ["One clear picture of income, spending and savings", "Explanations without jargon", "Every number shows its working"],
  },
  {
    id: "act",
    tab: "Act",
    title: "Know the next step, then take it.",
    body: "Fermor turns what it sees into a short list of things worth doing, ordered by impact. You choose what to act on and what to skip.",
    points: ["A few suggested actions, not a wall of options", "Reasons given for every suggestion", "Nothing happens without your say-so"],
  },
  {
    id: "grow",
    tab: "Grow",
    title: "Set a goal and watch the path to it.",
    body: "Pick what you are working towards. Fermor shows how your habits move you closer or further away, and adjusts as life changes.",
    points: ["Goals you can name and measure", "Projections that show their assumptions", "Progress you can check at a glance"],
  },
];

export default function Pillars() {
  const [active, setActive] = useState("understand");
  const p = pillars.find((x) => x.id === active);
  return (
    <div>
      <div role="tablist" aria-label="How Fermor helps" className="flex gap-2">
        {pillars.map((x) => (
          <button key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={active === x.id}
            aria-controls="pillar-panel" onClick={() => setActive(x.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === x.id ? "bg-ink text-chalk" : "border border-line text-slate2 hover:border-ink"
            }`}>
            {x.tab}
          </button>
        ))}
      </div>
      <div id="pillar-panel" role="tabpanel" aria-labelledby={`tab-${p.id}`} className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{p.title}</h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate2">{p.body}</p>
        </div>
        <ul className="space-y-3">
          {p.points.map((t) => (
            <li key={t} className="flex gap-3 rounded-2xl border border-line bg-white p-4">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-moss" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
