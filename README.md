# Fermor homepage

Next.js 14 (App Router) + Tailwind CSS.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Deploy
Push to GitHub, import the repo on Vercel, and deploy with the defaults.

## Decisions
- **Hero is the product idea, not a slogan.** Fermor's promise is to help people understand, act and grow, so the first thing a visitor can do is move two sliders and see a projection. It is working code (`components/Projector.jsx`), and it states its 6% assumption openly.
- **Structure follows the promise:** hero demo, then Understand / Act / Grow (tabs), who it is for, principles, sign-up.
- **Visual direction:** deep green-ink, chalk and one amber accent for money growth. Bricolage Grotesque for headlines, DM Sans for body. One accent colour, no gradients or stock imagery.
- **Accessible by default:** keyboard focus rings, labelled controls, ARIA tabs, reduced-motion respected, responsive from mobile up.
- **Copy is placeholder.** It is based on the brief's positioning. Replace with real product details, and wire the email form to a backend.
