import styled, { keyframes } from "styled-components"
import { rhythm } from "../../../utils/typography"

export const MenuContainer = styled.header<{}>`
  width: 100%;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  z-index: 10;
  padding: ${rhythm(0.5)};
`

export const LeftSection = styled.div`
  width: 20%;
  justify-content: flex-start;
`

export const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`

export const RightSection = styled.nav`
  display: flex;
  width: auto;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

export const LinkTag = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: inherit;
`

export const LinksContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: auto;
  list-style: none;
  justify-content: center;
`

export const LinkItem = styled.li<{ selected: boolean }>`
  height: 100%;
  padding: ${rhythm(0.5)};
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-bottom: 2px solid
    ${({ selected }) => (selected ? `#5271ff` : "transparent")};
  transition: all 220ms ease-in-out;
  user-select: none;
  cursor: pointer;
  margin: 0;
  align-self: center;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
  }
`

export const StyledButton = styled.button`
  height: 100%;
  padding: 0.5em 1.1em;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all 220ms ease-in-out;
  border-radius: 50px;
`

export const ButtonTag = styled.a`
  padding: 0 1em;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: inherit;
`
