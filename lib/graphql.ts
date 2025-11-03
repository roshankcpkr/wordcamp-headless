import { GraphQLClient } from 'graphql-request';

// Replace with your WordPress GraphQL endpoint
export const wpGraphqlEndpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || 'http://localhost:8888/wordpress/graphql';

export const graphqlClient = new GraphQLClient(wpGraphqlEndpoint, {
  headers: {
    // Add any required headers (like API keys) here
    // 'Authorization': `Bearer ${process.env.WP_GRAPHQL_TOKEN}`,
  },
});

// Helper function to request GraphQL queries
export async function request<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  return graphqlClient.request<T>(query, variables);
}

