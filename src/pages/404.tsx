import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { rhythm } from "../utils/typography"
import HeroImage from "../../content/assets/svg/hero2.svg"

type Props = PageRendererProps

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${rhythm(2.5)};

  > svg {
    max-width: 320px;
    height: 400px;
  }
`

export const NotFoundPage = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout location={props.location} title={data.site.siteMetadata.title}>
      <SEO title="404: Not Found" />
      <Container>
        <HeroImage />
        <h2>Looks like you took a wrong turn</h2>
        <button>Return to homepage</button>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
