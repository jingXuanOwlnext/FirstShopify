// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   //I think that the graph below only needed to return the handle which acts as the path, no need so many info 

//   return graphql(`
//     {
//       allShopifyProduct {
//         edges {
//           nodes {
//             handle
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allShopifyProduct.forEach(({ nodes }) => {
//       createPage({
//         path: `/product/${nodes.handle}/`,
//         component: path.resolve(`./src/pages/ProductListing.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           handle: nodes.handle,
//         },
//       })
//     })
//   })
// }

