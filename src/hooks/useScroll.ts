import React, { useEffect, useState } from "react"

export function useScroll() {
  const [offset, setOffset] = useState(0)
  const [randomX, setRandomX] = useState(0)
  const [randomY, setRandomY] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  useEffect(() => {
    const [x, y] = createNewPolyPoint(offset)
    setRandomX(x)
    setRandomY(y)
  }, [offset])

  const createNewPolyPoint = (offset: number) => {
    const pageHeight = window.innerHeight - offset,
      pageWidth = window.innerWidth - offset,
      randomX = Math.floor(Math.random() * pageHeight),
      randomY = Math.floor(Math.random() * pageWidth)
    return [randomX, randomY]
  }

  return [randomX, randomY]
}
