import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

export const Hero = styled.section`
  width: 100%;
  display: block;
  text-align: left;
  margin: ${rhythm(0.5)};
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const HeroInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const HeroText = styled.div`
  padding: ${rhythm(1)};
  z-index: 1;
  flex: 0 0 50%;
  max-width: 50%;

  > h1 {
    margin-bottom: ${rhythm(0.5)};
    font-size: 44px;
    line-height: 54px;
    letter-spacing: 0px;
    color: ${({ theme }) => theme.text};
    text-align: left;
  }

  > p {
    color: ${({ theme }) => theme.text};
    margin-bottom: ${rhythm(0.5)};
  }
`

export const HeroCTA = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  max-width: 400px;

  > a {
    display: inline-flex;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 600;
    line-height: 16px;
    text-decoration: none !important;
    text-transform: uppercase;
    background-color: #e9edf3;
    color: #535fd7 !important;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    justify-content: center;
    padding: 16px 32px;
    height: 48px;
    text-align: center;
    white-space: nowrap;
    color: #fff !important;
    background-color: #535fd7;
  }
`

export const HeroMedia = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  height: auto;

  > svg {
    width: 420px;
  }
`

// export const Avatar = styled(GatsbyImage)`
//   border-radius: 100%;
//   margin-bottom: 0;
//   margin-right: ${rhythm(1 / 2)};
//   min-width: 50px;
// `
