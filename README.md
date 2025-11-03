# WordCamp Headless - Bike Info Site

A beautiful Next.js application powered by Headless WordPress and GraphQL, showcasing bikes with detailed specifications and a blog section.

## Features

- 🏍️ **Bike Collection**: Browse bikes with custom fields (name, model, price, engine, mileage, image)
- 📝 **Blog Section**: Read posts filtered by categories and tags
- 🎨 **Modern UI**: Beautiful, responsive design with dark mode support
- ⚡ **Headless WordPress**: Powered by GraphQL for fast, flexible data fetching
- 🔍 **SEO Optimized**: Server-side rendering with Next.js App Router

## Prerequisites

- Node.js 18+ and npm
- A WordPress site with:
  - [WPGraphQL](https://www.wpgraphql.com/) plugin installed
  - Custom post type "bikes" registered
  - Custom taxonomy "bikes" registered
  - Advanced Custom Fields (ACF) or similar for custom fields:
    - `model` (text)
    - `price` (text/number)
    - `engine` (text)
    - `mileage` (text)
    - `image` (image field)

## Installation

1. Clone or navigate to the project directory:
```bash
cd wordcamp-headless
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your WordPress GraphQL endpoint:
```env
NEXT_PUBLIC_WP_GRAPHQL_URL=https://your-wordpress-site.com/graphql
```

## WordPress Setup

### 1. Install Required Plugins

Install the following WordPress plugins:
- [WPGraphQL](https://www.wpgraphql.com/) - Main GraphQL plugin
- [WPGraphQL for Advanced Custom Fields](https://www.wpgraphql.com/acf/) - If using ACF
- Or use a headless WordPress solution like [Faust.js](https://faustjs.org/) or [Atlas](https://atlas.wpengine.com/)

### 2. Register Custom Post Type and Fields

You'll need to register:
- Custom post type: `bikes`
- Custom taxonomy: `bikes` (or adjust the query names)
- Custom fields for bikes:
  - `bike_model` or `model`
  - `bike_price` or `price`
  - `bike_engine` or `engine`
  - `bike_mileage` or `mileage`
  - `bike_image` or `image`

### 3. GraphQL Query Structure

The queries in `lib/queries.ts` assume the following GraphQL schema structure:
- `bikes` - Query to get all bike posts
- `bikeBy` - Query to get a single bike by slug
- `posts` - Query to get blog posts
- `postBy` - Query to get a single post by slug
- Custom fields grouped under `bikeFields`

**Note**: You may need to adjust the GraphQL queries in `lib/queries.ts` based on your WordPress GraphQL schema. Use GraphQL introspection tools or a GraphQL playground to verify your schema.

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
wordcamp-headless/
├── app/
│   ├── bikes/          # Bike pages
│   │   ├── page.tsx    # Bike listing
│   │   └── [slug]/     # Bike detail pages
│   ├── blog/           # Blog pages
│   │   ├── page.tsx    # Blog listing
│   │   ├── [slug]/     # Blog post detail
│   │   ├── category/   # Category filter
│   │   └── tag/        # Tag filter
│   ├── layout.tsx      # Root layout with navigation
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── BikeCard.tsx
│   ├── BikeGrid.tsx
│   ├── PostCard.tsx
│   ├── PostGrid.tsx
│   └── Navigation.tsx
├── lib/
│   ├── graphql.ts      # GraphQL client setup
│   └── queries.ts      # GraphQL queries
└── types/
    └── index.ts        # TypeScript types
```

## Customization

### Adjusting GraphQL Queries

If your WordPress GraphQL schema differs, update the queries in `lib/queries.ts`. Common adjustments:

1. **Custom Field Names**: Update field names in the `bikeFields` section
2. **Post Type Names**: Change `bikes` to your custom post type name
3. **Taxonomy Names**: Adjust `bikes` taxonomy references
4. **Field Groups**: Modify how custom fields are grouped/accessed

### Styling

The project uses Tailwind CSS v4. Customize styles in:
- `app/globals.css` - Global styles
- Component files - Inline Tailwind classes
- Theme configuration in `globals.css` using CSS variables

## Troubleshooting

### No Data Showing

1. **Check GraphQL Endpoint**: Verify `NEXT_PUBLIC_WP_GRAPHQL_URL` is correct
2. **Check GraphQL Schema**: Use a GraphQL playground to test queries
3. **Check Field Names**: Ensure field names match your WordPress setup
4. **Check Permissions**: Ensure WPGraphQL has access to your custom post types

### GraphQL Errors

1. Enable GraphQL debugging in WordPress
2. Check browser console and terminal for error messages
3. Verify your GraphQL queries match your schema using introspection

## License

This project is open source and available for use.
