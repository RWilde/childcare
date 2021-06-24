import styled from "styled-components"
import Lightbox from "react-image-lightbox"
import * as LightboxCSS from "react-image-lightbox/style.css"
import { rhythm } from "../../utils/typography"

export const StyledLightbox = styled(Lightbox)`
  ${LightboxCSS}
`

export const GalleryContainer = styled.div`
  margin: ${rhythm(1)};
`
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: ${rhythm(0.2)};
  margin-left: ${rhythm(0.2)};
`

export const Col = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-basis: 35%;
  max-width: 35%;

  @media (min-width: 576px) {
    flex-basis: 25%;
    max-width: 25%;
  }
`
export const ImgWrapper = styled.div`
  margin: ${rhythm(0.2)};
`
