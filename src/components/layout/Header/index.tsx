import React, { useEffect, useState } from "react"
import {
  ButtonTag,
  LeftSection,
  LinkItem,
  LinksContainer,
  LinkTag,
  MenuContainer,
  RightSection,
  StyledButton,
} from "./styles"
import { useScroll } from "../../../hooks/useScroll"
import Logo from "../../Logo"

type Props = {}

const Header = ({}: Props) => {
  const [x, y] = useScroll()

  useEffect(() => {}, [x, y])

  const NavLink = (props: { linkTag: string; title: string }) => {
    return (
      <LinkItem selected={false}>
        <LinkTag href={props.linkTag}>{props.title}</LinkTag>
      </LinkItem>
    )
  }

  const NavButton = (props: { title: string; linkTag: string }) => {
    return (
      // <NavButtonsContainer>
      <StyledButton>
        <ButtonTag href={props.linkTag}>{props.title}</ButtonTag>
      </StyledButton>
      // </NavButtonsContainer>
    )
  }

  return (
    <MenuContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <RightSection>
        <LinksContainer>
          <NavLink title="Home" linkTag="/find" />
          <NavLink title="Blog" linkTag="/blog" />
          <NavLink title="About" linkTag="/about" />
          <NavButton title="Contact" linkTag="/contact" />
        </LinksContainer>
      </RightSection>
    </MenuContainer>
  )
}

export default Header
