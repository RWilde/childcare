import React from "react"
import { MarkdownRemark } from "../../graphql-types"
import { BlogPostTitle, Container, Content, StyledLink } from "./styles"

interface Props {
  posts: any
}

export const BlogPosts = (props: Props) => {
  return (
    <Content>
      <Container>
        {props.posts.map(({ node }: { node: MarkdownRemark }) => {
          const frontmatter = node!.frontmatter!
          const fields = node!.fields!
          const slug = fields.slug!
          const excerpt = node!.excerpt!

          const title = frontmatter.title || fields.slug
          return (
            <div key={slug}>
              <BlogPostTitle>
                <StyledLink to={slug}>{title}</StyledLink>
              </BlogPostTitle>
              <small>{frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: frontmatter.description || excerpt,
                }}
              />
            </div>
          )
        })}
      </Container>
    </Content>
  )
}

export default BlogPosts
