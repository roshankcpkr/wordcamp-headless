// Bike Types
export interface BikeImage {
  node?: {
    sourceUrl: string;
  };
}

export interface BikeFields {
  name?: string;
  model?: string;
  price?: string;
  engine?: string;
  mileage?: string;
  image?: BikeImage;
}

export interface BikeTaxonomy {
  name: string;
  slug: string;
}

export interface FeaturedImage {
  node?: {
    sourceUrl: string;
    altText?: string;
  };
}

export interface Bike {
  id: string;
  title: string;
  slug: string;
  content?: string;
  seo?: Seo;
  featuredImage?: FeaturedImage;
  terms?: {
    nodes: BikeTaxonomy[];
  };
  bikes?: BikeFields;
}

// Blog Types (reusing FeaturedImage from above)

export interface Category {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export interface Author {
  node: {
    name: string;
    avatar?: {
      url?: string;
    };
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  date: string;
  modified?: string;
  seo?: Seo;
  featuredImage?: FeaturedImage;
  categories?: {
    nodes: Category[];
  };
  tags?: {
    nodes: Tag[];
  };
  author?: Author;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor?: string;
}

// SEO Types (WPGraphQL SEO / Yoast)
export interface OpenGraphImageSeo {
  secureUrl?: string;
}

export interface OpenGraphSeo {
  title?: string;
  description?: string;
  image?: OpenGraphImageSeo;
}

export interface Seo {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  robots?: string;
  openGraph?: OpenGraphSeo;
}

