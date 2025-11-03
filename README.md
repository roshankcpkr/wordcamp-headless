# Step 4 – Theme & UX (theme branch)

This branch removes SEO and focuses on the visual polish and UX over the bikes and blog features.

## What’s in this step

- Bikes + Blog (no SEO fields in queries)
- Mobile navigation with hamburger
- Footer with logo, about, socials
- Card polish and black/white/orange theme
- WordPress HTML rendering helpers in `.wp-content`

## Tech stack

- Next.js 16 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4
- WPGraphQL (WordPress)
- graphql-request

## Requirements

- Node.js 18+ (Node 22 supported) and npm
- WordPress instance with:
  - WPGraphQL plugin
  - Custom Post Type: `bikes`
  - (Optional) Custom Taxonomy for bikes (e.g., `BRAND`), used as terms
  - Custom fields for bikes (ACF or code)
  - (Optional) SEO plugin — not used in this branch

### Bike custom fields expected

Two common patterns are supported. Pick one that matches your WP:

1) ACF group `bikes` with fields:
- `name` (string)
- `model` (string)
- `price` (number)
- `engine` (string)
- `mileage` (number/string)
- `image` → `node.sourceUrl` (media)

2) Featured image + terms only (image via `featuredImage.node.sourceUrl`).

Tune `lib/queries.ts` if your schema differs.

## Quick start

1) Install dependencies
```bash
npm install
```

2) Configure environment
Create `.env.local` in the project root:
```env
NEXT_PUBLIC_WP_GRAPHQL_URL=http://localhost:8888/wordpress/graphql
```
Use a working endpoint (common variants: `/graphql`, `/wp-json/graphql`).

3) Configure Next Image for WordPress media (already included)
- `next.config.ts` allows `localhost:8888` and sets remotePatterns. For other hosts, add your domain.

4) Run
```bash
npm run dev
# open http://localhost:3000
```

5) Build/Start (production)
```bash
npm run build
npm start
```

## Major features

- Bikes listing (`/bikes`) and detail pages (`/bikes/[slug]`)
- Blog listing (`/blog`) with categories/tags sidebars
- Blog detail pages (`/blog/[slug]`) with WordPress HTML content
- Classic editor HTML rendered via `dangerouslySetInnerHTML` with safe, responsive defaults (`.wp-content` helpers)
- Image handling for local WordPress via Next Image (with unoptimized during local dev)
- Mobile-friendly navigation with hamburger menu
- Footer with logo, about, and social links
- Theme: Black/White + Orange accents
- No SEO in this branch; metadata uses simple fallbacks

## Environment variables

| Name | Required | Example | Description |
|---|---|---|---|
| `NEXT_PUBLIC_WP_GRAPHQL_URL` | Yes | `http://localhost:8888/wordpress/graphql` | WPGraphQL endpoint used by the app |

## Project structure

```
app/
  bikes/
    page.tsx           # Bikes listing (cards)
    [slug]/page.tsx    # Bike detail
  blog/
    page.tsx           # Blog listing with categories/tags
    [slug]/page.tsx    # Blog detail
    category/[slug]/   # Category pages
    tag/[slug]/        # Tag pages
  layout.tsx           # Root layout (Navigation + Footer)
  page.tsx             # Homepage (hero + features)
components/
  Navigation.tsx       # Desktop + mobile hamburger
  Footer.tsx           # Logo, about, socials
  BikeCard.tsx         # Bike card UI
  BikeGrid.tsx         # Bikes grid
  PostCard.tsx         # Blog card UI
  PostGrid.tsx         # Posts grid
lib/
  graphql.ts           # graphql-request client
  queries.ts           # GraphQL documents
types/
  index.ts             # Shared TypeScript types (Bike/Post/SEO)
```

## WordPress configuration notes

1) Ensure the CPT `bikes` and GraphQL single name `bike` are exposed to GraphQL.
2) If using a taxonomy filter (e.g., `BRAND`), adjust the `terms` queries to your taxonomy name.
3) If ACF fields are different, update the `bikes` field group in `lib/queries.ts` and `types/index.ts`.
4) SEO is not used in this branch.

## Content rendering (classic editor)

We render WordPress HTML with `dangerouslySetInnerHTML` inside `.wp-content` wrappers. Global CSS (`app/globals.css`) includes:
- Responsive images/videos/iframes
- Alignment helpers (`.aligncenter`, `.alignleft`, `.alignright`)
- Typography defaults (headings, lists, links)

## Image troubleshooting

- Local WordPress media: ensure `next.config.ts` includes your host/port. For alternate dev hosts, add them and restart `npm run dev`.
- During local dev, some images are rendered with `unoptimized` to bypass optimizer restrictions.

## GraphQL troubleshooting

404 HTML from the endpoint means the URL is wrong. Try:
- `http://localhost:8888/wordpress/graphql`
- `http://localhost:8888/graphql`
- `http://localhost:8888/wp-json/graphql`

If a query field errors, copy the working query from your GraphQL IDE and update `lib/queries.ts` accordingly.

## Accessibility & performance

- Semantic HTML and accessible links/buttons
- Server components for data fetching

## Deployment

Any platform supporting Next.js 16 (Vercel, Netlify, Docker, etc.). Ensure:
- `NEXT_PUBLIC_WP_GRAPHQL_URL` is set
- `next.config.ts` `images.remotePatterns` includes your public WordPress host

## License

MIT – use freely. Contributions welcome.
