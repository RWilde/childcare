import Img from "gatsby-image"
import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useGallery } from "../../hooks/useGallery"
import {
  Col,
  GalleryContainer,
  ImgWrapper,
  Row,
  StyledLightbox,
} from "./styles"
import { ImageColWrapper } from "./ImageCol"
import Lightbox from "react-image-lightbox"

interface GalleryProps {}

const Gallery = ({}: GalleryProps) => {
  const images = useGallery()

  const [index, setIndex] = useState(0)
  const prevIndex = (index + images.length - 1) % images.length
  const nextIndex = (index + images.length + 1) % images.length

  const [isOpen, setIsOpen] = useState(false)
  const [mainSrc, setMain] = useState(
    images[index]?.full?.images?.fallback?.src
  )
  const [nextSrc, setNext] = useState(
    images[nextIndex]?.full?.images?.fallback?.src
  )
  const [prevSrc, setPrev] = useState(
    images[prevIndex]?.full?.images?.fallback?.src
  )

  const onCloseLightbox = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    console.log(images[index])
    setMain(images[index]?.full?.images?.fallback?.src)
    setNext(images[nextIndex]?.full?.images?.fallback?.src)
    setPrev(images[prevIndex]?.full?.images?.fallback?.src)
  }, [index])

  return (
    <GalleryContainer>
      <Row>
        {images.map((image: any, imgIndex: number) => {
          const img = image.node.childImageSharp

          const thumbImage = getImage(img.thumb)
          if (!thumbImage) {
            return null
          }
          return (
            <ImageColWrapper key={imgIndex}>
              <GatsbyImage
                onClick={() => {
                  setIsOpen(true)
                  setIndex(imgIndex)
                }}
                image={thumbImage}
                alt={img.thumbAlt || ""}
              />
            </ImageColWrapper>
          )
        })}
      </Row>
      {isOpen && (
        <StyledLightbox
          mainSrc={mainSrc || ""}
          nextSrc={nextSrc || ""}
          prevSrc={prevSrc || ""}
          onCloseRequest={onCloseLightbox}
          onMovePrevRequest={() => setIndex(prevIndex)}
          onMoveNextRequest={() => setIndex(nextIndex)}
          imageTitle={images[index].title}
          imageCaption={images[index].caption}
        />
      )}
    </GalleryContainer>
  )
}

//   {images.map((id: string, fluid: any) => (
//     <GatsbyImage image={fluid} />

//      <Img key={id} fluid={fluid} />
//   ))}

export default Gallery
