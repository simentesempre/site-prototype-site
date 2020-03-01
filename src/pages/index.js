import React from "react"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data:{ allStrapiPost: { edges: posts  } } }) => (
  <Layout> 
    <SEO title="Home" />
    {
      posts.map(({node: post})=>{
        return (
          <>
            <Link to={post.id}>
              <h1>{post.title}</h1>
            </Link>
            <Img fixed={post.image.childImageSharp.fixed} />
            <div>{post.content}</div>
          </>
        )
      })
    }
  </Layout>
)

export default IndexPage

export const query = graphql`
query HomepageQuery {
  allStrapiPost {
    edges {
      node {
        id
        title
        content
        image {
          childImageSharp {
            fixed(height: 200, width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`
