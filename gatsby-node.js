const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions
  const getPosts = makeRequest(graphql, `
    {
        allStrapiPost {
            edges {
                node {
                  id
                }
            }
        }
    }
    `).then(result => {
    result.data.allStrapiPost.edges.forEach(({ node: post }) => {
      createPage({
        path: `/${post.id}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: post.id
        },
      })
    })
  });

  return Promise.all([
    getPosts
  ])
};