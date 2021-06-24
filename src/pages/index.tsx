import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import { Gallery, Layout, SEO } from "../components"
import Hero, { Landing } from "../components/Landing"

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

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
      <Landing />
      <Gallery />
    </Layout>
  )
}

export default BlogIndex
