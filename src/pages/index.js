import React, {Component} from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cards from '../components/Cards';
import Grid from '@material-ui/core/Grid';
//Assets
import datas from '../components/data';
import { graphql } from "gatsby"



export default class HomePage extends Component{

  componentDidMount(){
    console.log(this.props.data.allContentfulSecondTry.nodes[0].title);
  }



  render(){

      return(
        <>
          <SEO title="Home" />
          <Grid
              container
              spacing={8}
          >
          <h1>{this.props.data.allContentfulSecondTry.nodes.title}</h1>
              {datas.map(books =>(
                  <Grid key={books.Title} item xs={3}>    
                      {/* {console.log(this.props.data.allContentfulBlogPost.edges.node.author.id)} */}
                      {/*"History" is passed down by route*/}

                      <Cards history={this.props.history}  ImageLink={books.ImageLink} Title={books.Title} Price={books.Price} />
                  </Grid>
              ))}            
          </Grid>

        </>
      )


  }

}

// export const query = graphql`
//   query MyQuery{
//     allContentfulFirstTry {
//       edges {
//         node {
//           publishedDate
//           title
//         }
//       }
//     }Y
//   }`

export const query = graphql`
query MyQuery {
  allContentfulSecondTry {
    nodes {
      title
    }
  }
}`

