"use client";
import { useMemo, useState } from "react";

const RATE = 0.06; // illustrative assumption, shown to the user

function project(monthly, years) {
  const i = RATE / 12;
  let bal = 0;
  const pts = [];
  for (let k = 0; k <= years * 12; k++) {
    if (k % 12 === 0) pts.push({ y: k / 12, bal, paid: monthly * k });
    bal = bal * (1 + i) + monthly;
  }
  return pts;
}

const money = (n) => "$" + Math.round(n).toLocaleString("en-US");

export default function Projector() {
  const [monthly, setMonthly] = useState(400);
  const [years, setYears] = useState(15);
  const pts = useMemo(() => project(monthly, years), [monthly, years]);
  const end = pts[pts.length - 1];
  const growth = end.bal - end.paid;

  const W = 640, H = 260, P = 16;
  const max = Math.max(end.bal, 1);
  const x = (y) => P + (y / years) * (W - P * 2);
  const yy = (v) => H - P - (v / max) * (H - P * 2);
  const line = (key) => pts.map((p, i) => `${i ? "L" : "M"}${x(p.y).toFixed(1)},${yy(p[key]).toFixed(1)}`).join(" ");
  const area = `${line("bal")} L${x(years)},${H - P} L${x(0)},${H - P} Z`;

  return (
    <div className="rounded-3xl bg-ink p-5 text-chalk shadow-xl sm:p-8">
      <p className="text-sm text-chalk/70">If you set aside {money(monthly)} a month for {years} years</p>
      <p className="mt-1 font-display text-5xl font-bold tracking-tight sm:text-6xl" aria-live="polite">{money(end.bal)}</p>
      <p className="mt-1 text-sm text-chalk/70">
        {money(end.paid)} from you, <span className="text-amber">{money(growth)}</span> from growth
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-6 h-auto w-full" role="img"
        aria-label={`Projected balance grows to ${money(end.bal)} over ${years} years`}>
        <path d={area} fill="#3E7C59" fillOpacity="0.45" />
        <path d={line("bal")} fill="none" stroke="#E8B04B" strokeWidth="3" strokeLinejoin="round" />
        <path d={line("paid")} fill="none" stroke="#F5F7F4" strokeOpacity="0.6" strokeWidth="2" strokeDasharray="5 5" />
      </svg>
      <div className="mt-2 flex gap-5 text-xs text-chalk/70">
        <span><span className="mr-1 inline-block h-0.5 w-4 bg-amber align-middle" />Balance</span>
        <span><span className="mr-1 inline-block h-0.5 w-4 border-t-2 border-dashed border-chalk/60 align-middle" />What you put in</span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          Monthly amount: <b>{money(monthly)}</b>
          <input type="range" min="50" max="2000" step="50" value={monthly}
            onChange={(e) => setMonthly(+e.target.value)} className="mt-2 w-full" />
        </label>
        <label className="block text-sm">
          Time: <b>{years} years</b>
          <input type="range" min="1" max="30" value={years}
            onChange={(e) => setYears(+e.target.value)} className="mt-2 w-full" />
        </label>
      </div>
      <p className="mt-5 text-xs text-chalk/60">
        Illustration only. Assumes a steady {RATE * 100}% yearly return and no fees. Real returns vary and are not guaranteed.
      </p>
    </div>
  );
}
