import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const PostTemplate = ({ data: { strapiPost: { title, user, image, content} } }) => (
  <Layout>
    <h1>{title}</h1>
    <p>by {user.username}</p>
    <Img fluid={image.childImageSharp.fluid}/>
    <p>{content}</p>
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: {eq: $id}) {
        title
        content
        image {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        user {
            username
        }
    }
  }
`