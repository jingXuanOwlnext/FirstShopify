/*global ga */
//import { Link } from "gatsby";

//import Layout from "../components/layout";
//import SEO from "../components/seo";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import {Route,Router} from 'react-router-dom';
import {Bought} from '../components/data';
import { graphql } from 'gatsby';
//import { thisExpression } from "@babel/types";

//It uses "row" matches an index in the array in each iteration


//ga('require', 'ecommerce');

export default class ProductListing extends Component{

    constructor(props){
        super(props);
        this.state = {
            total : 0
        }
    }

    handleTrans = () => {

        // ga('ecommerce:addTransaction', {
        //    'id': '1234',                     // Transaction ID. Required.
        //    'affiliation': 'Acme Clothing',   // Affiliation or store name.
        //    'revenue': this.state.total.toString(),      // Grand Total.
        //    'shipping': '5',                  // Shipping.
        //    'tax': '1.29'                     // Tax

        // });
           
        // ga('ecommerce:send');

        console.log(this.state.total.toString())

    }

    componentDidMount(){
        console.log(this.props.data.allShopifyProduct.nodes[0].handle);
      };

    render(){

        let totalPrice = Bought.reduce((tot,row)=>
            {return tot = tot + row.Price},0).toFixed(2);

       if (totalPrice !== this.state.total){
           this.setState({
               total : totalPrice
           });
       };


        return(
        <>
            {/* <Grid item xs={12}>
                <Paper style = {{textAlign:"center",height:30}}>Your Cart</Paper>
            </Grid>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {/*map() maps all the content inside the array 1 by 1 and assign to the parameter whcih is "row" at here*/}
                    
                        {/* {Bought.map(row=>(
                             <TableRow key={row.Title}>

                                <TableCell component="th" scope="row"> {row.Title}</TableCell>
                                <TableCell align="right">{row.Price}</TableCell>
                                <TableCell align="right">1</TableCell>
                                <TableCell align="right">RM{row.Price}</TableCell>

                           </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <div style={{height:200}}>

                </div>



            <Grid container>
                <Grid item xs={4} sm={8}>
                <Typography variant="subtitle1" gutterBottom>
                     Add a note to your order
                </Typography>
                </Grid>

                <Grid item xs={4} sm={2}>
                <Typography variant="subtitle1" gutterBottom>
                     Subtotal
                </Typography>
                </Grid>

                <Grid item xs={4} sm={2}>
                <Typography variant="subtitle1" style={{textAlign:"right",paddingRight:5}}>
                     RM{this.state.total}
                </Typography>
                </Grid>

            </Grid>

            <Grid container>
                <Grid item xs={4} sm={8}>

                    <TextField variant="outlined" placeholder="Type here...." style={{ width:"90%"}} >


                    </TextField>
           
                </Grid>

                <Grid item xs={4} sm={4}>
                <Typography variant="subtitle1" gutterBottom>
                     Shipping  taxes calculated at checkout
                </Typography>
                </Grid>

            </Grid>

            <Grid container direction="row" justify="flex-end" alignItems="center" >
            
                <Button size="small" variant="contained" style = {{margin: 10}  }>
                        CONTINUE SHOPPING
                </Button>

                <Button size="small" variant="contained" style = {{margin: 10}  }>
                        UPDATE
                </Button>

                <Button size="small" variant="contained" style = {{margin: 10}}  onClick={this.handleTrans} >
                        CHECK OUT
                </Button>

                
            </Grid> */}

            <h1>{this.props.data.allShopifyProduct.nodes[0].title}</h1>
            <h2>{this.props.data.allShopifyProduct.nodes[0].description}</h2>
            
            <Card >
                <CardActionArea>

                    <CardMedia
                        style = {{objectFit: "contain"}}
                        component="img"
                        height="200"
                        image= {this.props.data.allShopifyProduct.nodes[0].images[0].originalSrc}
                        /> 

                </CardActionArea>

            </Card>




            </>

        )
    }
} 

export const query = graphql`
query Query{
    allShopifyProduct {
      nodes {
        id
        images {
          id
          originalSrc
        }
        title
        description
        handle
      }
    }
  }
` 


// export const query = graphql`
// query ($handle: String!){
//     allShopifyProduct(handle: {eq : $handle}) {
//       nodes {
//         id
//         images {
//           id
//           originalSrc
//         }
//         title
//         description
//         handle
//       }
//     }
//   }
// ` 

