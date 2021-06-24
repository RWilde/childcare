import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React, { ReactNode, useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { StyledInnerWrapper, StyledMultiBackground } from "./styles"
import { useScroll } from "../../../hooks/useScroll"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

export const MultiBackground = ({ children }: Props) => {
  const { hand, seamlessBackground } = useStaticQuery(
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
            fluid(quality: 100, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const [x, y] = useScroll()

  const [backgroundFluidImageStack, setImageStack] = useState([
    // seamlessBackground.childImageSharp.fluid,
    hand.childImageSharp.fluid,
  ])

  return (
    <StyledMultiBackground>
      {/* <BackgroundImage
        Tag={`section`}
        id={`test`}
        // className={className}
        fluid={backgroundFluidImageStack.reverse()}
      > */}
      <StyledInnerWrapper>{children}</StyledInnerWrapper>
      {/* </BackgroundImage> */}
    </StyledMultiBackground>
  )
}

export default MultiBackground
