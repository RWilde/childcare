import { PageRendererProps } from "gatsby"
import React, { ReactNode, useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { StyledH1, StyledH3, Content, Main } from "./styles"
import { GlobalStyle } from "../../global"
import { ThemeProvider } from "styled-components"
import theme from "../../theme"
import { useScroll } from "../../hooks/useScroll"
import StyledMultiBackground from "./Background"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

type ThemeType = typeof theme

export const Layout = (props: Props) => {
  const { location, title, children } = props
  const rootPath = `/`

  const [x, y] = useScroll()

  useEffect(() => {}, [x, y])

  const HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3

  return (
    <Main>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {/* <Content> */}
        <StyledMultiBackground title="" location={location}>
          {children}
        </StyledMultiBackground>
        {/* </Content> */}
        <Footer />
      </ThemeProvider>
    </Main>
  )
}

export { ThemeType }

export default Layout
