// Bike Queries
// Note: Adjust these queries based on your WordPress GraphQL schema
export const GET_ALL_BIKES = `
  query GetAllBikes {
    bikes {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        terms(where: { taxonomies: [BRAND] }) {
          nodes {
            name
            slug
          }
        }
        bikes {
          name
          model
          price
          engine
          mileage
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_BIKE_BY_SLUG = `
  query GetBikeBySlug($slug: String!) {
    bikeBy(slug: $slug) {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      terms(where: { taxonomies: [BRAND] }) {
        nodes {
          name
          slug
        }
      }
      bikes {
        name
        model
        price
        engine
        mileage
        image {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_BIKES_BY_TAXONOMY = `
  query GetBikesByTaxonomy($taxonomySlug: String!) {
    bikes(where: {taxonomyFilter: {taxonomy: BRAND, terms: [$taxonomySlug]}}) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        terms(where: { taxonomies: [BRAND] }) {
          nodes {
            name
            slug
          }
        }
        bikes {
          name
          model
          price
          engine
          mileage
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

// Blog Queries
export const GET_ALL_POSTS = `
  query GetAllPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      slug
      content
      date
      modified
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      tags {
        nodes {
          id
          name
          slug
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = `
  query GetPostsByCategory($categorySlug: String!, $first: Int) {
    posts(where: {categoryName: $categorySlug}, first: $first) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_POSTS_BY_TAG = `
  query GetPostsByTag($tagSlug: String!, $first: Int) {
    posts(where: {tagSlugIn: [$tagSlug]}, first: $first) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_CATEGORIES = `
  query GetCategories {
    categories {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

export const GET_TAGS = `
  query GetTags {
    tags {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

