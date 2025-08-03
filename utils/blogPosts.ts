import { GraphQLClient, gql } from "graphql-request"

const hygraphEndpoint = "https://eu-west-2.cdn.hygraph.com/content/cm8629dti016e07wfepubdb5w/master"

if (!hygraphEndpoint) {
  throw new Error("NEXT_PUBLIC_HYGRAPH_ENDPOINT environment variable is not set.")
}

const graphQLClient = new GraphQLClient(hygraphEndpoint, {
  cache: "no-cache",
})

interface BlogPost {
  category: {
    name: string
  }
  description: string
  image: {
    url: string
  }
  slug: string
  title: string
  content: {
    html: string
  }
  publishedAt: string
}

interface SingleBlogResponse {
  blogChats: {
    category: {
      name: string
    }
    description: string
    image: {
      url: string
    }
    slug: string
    title: string
    content: {
      html: string
    }
    publishedAt: string
  }
}

interface AllBlogSlugsResponse {
  blogChatss: {
    slug: string
  }[]
}

interface BlogPostByCategoryResponse {
  blogChatss: BlogPost[]
}

interface BlogResponse {
  blogChatss: BlogPost[]
}

export const queryAllBlog = async (): Promise<BlogResponse> => {
  const query = gql`
    query getAllBlogPost {
      blogChatss(stage: PUBLISHED, orderBy: publishedAt_DESC) {
        category {
          name
        }
        description
        image {
          url
        }
        slug
        title
        content {
          html
        }
        publishedAt
      }
    }
  `
  const response: BlogResponse = await graphQLClient.request(query)
  return response
}
// Add this to your existing blogPosts.ts file
export const querySingleBlog = async (slug: string): Promise<SingleBlogResponse> => {
  const query = gql`
    query GetBlogPostBySlug($slug: String!) {
      blogChats(where: { slug: $slug }) {
        category {
          name
        }
        description
        image {
          url
        }
        slug
        title
        content {
          html
        }
        publishedAt
      }
    }
  `
  const variables = { slug }
  const response: SingleBlogResponse = await graphQLClient.request(query, variables)
  return response
}

// Add this to get all slugs for static generation
export const queryAllBlogSlugs = async (): Promise<AllBlogSlugsResponse> => {
  const query = gql`
    query GetAllBlogSlugs {
      blogChatss(stage: PUBLISHED) {
        slug
      }
    }
  `
  const response: AllBlogSlugsResponse = await graphQLClient.request(query)
  return response
}
