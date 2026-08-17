This is the personal website of pianist Evan Streater, built with [Next.js](https://nextjs.org) (App Router, TypeScript, Tailwind CSS) and deployed on [Vercel](https://vercel.com).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript type checking

## Pages

- `/` — Home
- `/about` — Biography
- `/concerts` — Upcoming & recent performances
- `/recordings` — Discography
- `/contact` — Booking inquiries

Content is authored in code:

- `lib/content.ts` — concerts and recordings data (edit this to update listings)
- `app/*/page.tsx` — page copy and structure

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it in Vercel (Add New > Project).
3. Deploy. No environment variables required.