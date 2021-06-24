import styled from "styled-components"
import { FadeLink } from ".."
import { rhythm } from "../../utils/typography"

export const StyledLink = styled(FadeLink)`
  box-shadow: none;
`

export const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

export const Content = styled.h3`
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
`
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0px auto;
`

export const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );

  padding: 5px;
  margin-top: 15px;
`

export const BlogPostTitle = styled.h2`
  > a {
    font-size: 24px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 1.5px;
    margin-bottom: 25px;
    display: block;
    transition: all 450ms ease 0s;
  }
`
export const PostPreview = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 28px;
  margin-bottom: 25px;
`

export const ReadMoreButton = styled.a`
  color: rgba(0, 0, 0, 0.35);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.3s linear 0s;
`
