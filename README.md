This is a [Next.js](https://nextjs.org) personal website with [Builder.io](https://www.builder.io) headless CMS integration, deployed on [Vercel](https://vercel.com).

## Setup

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_BUILDER_API_KEY` to your Builder.io Public API Key (Account Settings > API Keys).

```bash
cp .env.example .env.local
```

2. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How it works

- `app/[[...page]]/page.tsx` is a catch-all route that fetches pages from Builder.io via `fetchOneEntry` and renders them with the `<Content />` component. Any URL path is looked up in Builder's `page` model, so pages built visually in Builder render live on the site.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it in Vercel (Add New > Project).
3. Add the `NEXT_PUBLIC_BUILDER_API_KEY` environment variable.
4. Deploy.
5. In Builder.io (Models > Page), set the Preview URL to your Vercel URL.