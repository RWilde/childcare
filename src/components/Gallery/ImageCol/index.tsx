import React from "react"
import { Col, ImgWrapper } from "../styles"

export const ImageColWrapper = (
  children: any,
  colWidth?: number,
  mdColWidth?: number,
  onClick?: () => void,
  gutter?: number
) => {
  console.log(children)

  return (
    <Col onClick={onClick}>
      <ImgWrapper>{children.children}</ImgWrapper>
    </Col>
  )
}
