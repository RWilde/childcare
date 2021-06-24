import styled from "styled-components"
import { rhythm, styledScale } from "../../utils/typography"
import { FadeLink } from "../link"

export const StyledH1 = styled.h1`
  ${styledScale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

export const StyledH3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

export const StyledLink = styled(FadeLink)`
  box-shadow: none;
  color: inherit;
  text-decoration: none;
`

export const Main = styled.div`
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
  box-sizing: border-box;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  padding: 10px;
  flex-direction: row;

  // background-image: url("../../images/hand.svg"),
  //   url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/239518/birds2.svg),
  //   url("../../images/hands.png"),
  //   linear-gradient(
  //     to bottom,
  //     rgba(255, 255, 255, 0),
  //     40%,
  //     rgba(255, 255, 255, 1) 60%
  //   ),
  //   url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/239518/BG2.svg);
  // background-size: 20%, 20%, 100%, 100%, 50px;
  // background-repeat: no-repeat, no-repeat, no-repeat, repeat-x, repeat;
  // background-position: 5% 40%, 95% 60%, center bottom;

  > div {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    max-width: 1680px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 0;
    padding-bottom: 0;
    justify-content: space-evenly;
  }
`

export const Wrapper = styled.div``
