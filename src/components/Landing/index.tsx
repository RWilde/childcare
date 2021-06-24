import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  Container,
  Hero,
  HeroCTA,
  HeroText,
  HeroInner,
  HeroMedia,
} from "./styles"
import HeroImage from "../../../content/assets/svg/hero1.svg"

export const Landing = () => {
  return (
    <Hero>
      <Container>
        <HeroInner>
          <HeroText>
            <h1>Looking for a childminder?</h1>
            <p>
              An experienced Childminder, with 7 years working as an in home
              Nanny, recently starting up my own Childming from my own Home in
              Donaghadee.
            </p>
            <p>
              Spaces available for children ages 1 to 7 years! Starting this
              summer.
            </p>
            <HeroCTA>
              <button>Enquire now</button>
            </HeroCTA>
          </HeroText>
          <HeroMedia>
            <HeroImage />
          </HeroMedia>
        </HeroInner>
      </Container>
    </Hero>
  )
}

export default Landing
