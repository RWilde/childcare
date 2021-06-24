import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Logo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo-text.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <Img fluid={data.logo.childImageSharp.fluid} alt="logo" />
}
export default Logo
