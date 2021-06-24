import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import { BlogPosts } from "../components"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[
          `Childminder`,
          `Child minder`,
          `Bangor`,
          `Donaghdee`,
          `Nanny`,
          `Newtownards`,
          `Northern Ireland`,
          `Jancie Wilde`,
        ]}
      />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default BlogIndex
