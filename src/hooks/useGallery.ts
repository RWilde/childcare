import { useStaticQuery, graphql } from "gatsby"
import React, { useEffect } from "react"

export function useGallery() {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 270
                height: 270
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout: FULL_WIDTH)
              meta: fixed {
                originalName
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    console.log(data)
  }, [])

  //   return []

  return data.images.edges
  //         .map((node: any) => ({
  //     ...node.childImageSharp,
  //     // Use original name as caption.
  //     // The `originalName` is queried in a nested field,
  //     // but the `Gallery` component expects `caption` at the top level.
  //     caption: node.childImageSharp?.meta.originalName,
  //   }))
}
