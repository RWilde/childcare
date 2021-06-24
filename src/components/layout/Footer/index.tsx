import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import {
  FooterWrapper,
  FooterContent,
  Copyright,
  SubTitle,
  Title,
  SocialLinks,
  LeftSection,
  RightSection,
} from "./styles"
import { SiFacebook } from "react-icons/si"

type Props = {}

const Footer = (props: Props) => {
  // const { author, social } = data.site.siteMetadata
  const { hand, seamlessBackground, site } = useStaticQuery(
    graphql`
      query {
        hand: file(relativePath: { eq: "blueHand.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 10) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        seamlessBackground: file(relativePath: { eq: "hands.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 420) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        site {
          siteMetadata {
            author
            social {
              facebook
            }
          }
        }
      }
    `
  )

  return (
    <FooterWrapper>
      {/* <BackgroundImage
        Tag={`section`}
        id={`test`}
        // className={className}
        fluid={seamlessBackground.childImageSharp.fluid}
      > */}
      <FooterContent>
        <LeftSection>
          <Title>{site.siteMetadata.author}</Title>
          <SubTitle>Certified Child Minder</SubTitle>
          <Copyright>©{new Date().getFullYear()}</Copyright>
        </LeftSection>
        <RightSection>
          <SocialLinks href={site.siteMetadata.social.facebook}>
            <SiFacebook />
          </SocialLinks>
        </RightSection>
      </FooterContent>
      {/* </BackgroundImage> */}
    </FooterWrapper>
  )
}

export default Footer
