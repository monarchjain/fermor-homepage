import Nav from "../components/Nav";
import Projector from "../components/Projector";
import Pillars from "../components/Pillars";

const audiences = [
  ["First paycheque", "Start with the basics: where money goes, and a small habit worth building."],
  ["Building a career", "Balance rent, loans and savings, and see how today's choices play out over years."],
  ["Planning something big", "A home, a degree, a business. Break the goal into monthly steps you can follow."],
  ["Tired of finance jargon", "Get straight answers in everyday language, without a finance degree."],
];

const principles = [
  ["Clear before clever", "If a feature cannot be explained in one sentence, it is not ready."],
  ["Show the working", "Every figure and projection states its assumptions."],
  ["You stay in charge", "Fermor suggests. You decide."],
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1fr_1.05fr] lg:pt-20">
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Money, made clear enough to act on.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate2">
              Fermor helps you understand where you stand, decide what to do next, and grow with confidence. Try it: move the sliders and see what a steady habit can become.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#start" className="rounded-full bg-moss px-7 py-3 font-medium text-white hover:bg-ink">Get started</a>
              <a href="#how" className="rounded-full border border-ink px-7 py-3 font-medium hover:bg-ink hover:text-chalk">See how it works</a>
            </div>
          </div>
          <Projector />
        </section>

        <section id="how" className="border-y border-line bg-[#EAF0EC] py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-xl font-display text-3xl font-bold sm:text-4xl">Three things, done well.</h2>
            <div className="mt-10"><Pillars /></div>
          </div>
        </section>

        <section id="who" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-xl font-display text-3xl font-bold sm:text-4xl">Built for people who want finance to make sense.</h2>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {audiences.map(([t, d]) => (
              <div key={t} className="border-t-2 border-ink pt-4">
                <dt className="font-display text-xl font-semibold">{t}</dt>
                <dd className="mt-2 text-slate2">{d}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="principles" className="bg-ink py-20 text-chalk">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-xl font-display text-3xl font-bold sm:text-4xl">What we hold ourselves to.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {principles.map(([t, d]) => (
                <div key={t}>
                  <h3 className="font-display text-xl font-semibold text-amber">{t}</h3>
                  <p className="mt-2 text-chalk/80">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="start" className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Start with one clear picture.</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-slate2">Join the list and be first in when Fermor opens to you.</p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" action="#start">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" type="email" required placeholder="you@example.com"
              className="w-full rounded-full border border-line bg-white px-5 py-3" />
            <button className="rounded-full bg-moss px-7 py-3 font-medium text-white hover:bg-ink" type="submit">Join the list</button>
          </form>
        </section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-slate2">
        © {new Date().getFullYear()} Fermor. Projections are illustrations, not financial advice.
      </footer>
    </>
  );
}
