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

// Blog queries omitted in bikes branch

