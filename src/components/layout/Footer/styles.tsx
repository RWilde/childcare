import styled from "styled-components"
import { rhythm, styledScale } from "../../../utils/typography"

export const FooterWrapper = styled.footer`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  background: #182538;
  color: #6b7a90;
  background: ${({ theme }) => theme.colors.yellow};
  width: 100%;
`
export const FooterContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${rhythm(1.5)};

  ${styledScale(0.1)};
`

export const LeftSection = styled.div`
  justify-content: flex-start;
  flex: 50%;
`

export const RightSection = styled.div`
  justify-content: flex-end;
  flex: 50%;
`

export const Title = styled.div``

export const SubTitle = styled.div`
         margin: 20px 0;
         max-width: 256px;
       `

export const Copyright = styled.div``

export const SocialLinks = styled.a`
  cursor: pointer;
  > svg {
    margin: 5px;
    height: 2em;
    width: 2em;
    fill: ${({ theme }) => theme.colors.blue};
  }

  > svg:hover {
    fill: ${({ theme }) => theme.colors.blue}99;
  }
`
