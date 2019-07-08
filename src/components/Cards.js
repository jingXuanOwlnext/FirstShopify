import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
//import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import {BrowserRouter,Route,Link} from 'react-router-dom';
//import ProductListing from "../ProductListing";
import datas, {Bought} from '../components/data';
import { Link , navigate} from "gatsby";
import { useStaticQuery, graphql } from 'gatsby';


export const styles = {
    card : {
        height : 350
    }
}


export default class Cards extends Component{

    constructor(props){
        super(props);
        this.state = {
        
        };
    };


    // Another method which I tried but not working right now too so i remain the code here

    // data = useStaticQuery(
    //     graphql`
    //     query {
    //         allShopifyProduct {
    //           nodes {
    //             id
    //             images {
    //               id
    //               originalSrc
    //             }
    //             title
    //             description
    //             handle
    //           }
    //         }
    //       }
    //     ` 
    //   );


    handleSomething= () =>{
        console.log('test');
        this.analyticsEvents();
        this.handlePushData();
    };

    analyticsEvents = () =>{
        console.log("ga");

       // ga('send', 'event' ,'Bought1', 'Bought2', 'Bought3');
    
    };
    
    //Checking
    componentDidMount(){
        console.log('this');
        console.log(this.props.data.allShopifyProduct);
      }


    handlePushData = () => {
        navigate(`/ProductListing`);
        //navigate(`/product/${this.props.data.allShopifyProduct.nodes[0].handle}/`);
        Bought.push({ImageLink: this.props.ImageLink, Title: this.props.Title , Price: this.props.Price});
    };
 
    render(){

        //const { classes } = this.props;

        return(

            <Card /*className={classes.card}*/ >
                <CardActionArea>

                    <CardMedia
                        style = {{objectFit: "contain"}}
                        component="img"
                        height="200"
                        image= {this.props.ImageLink}
                        /> 

                    <CardContent>
                    
                    <Typography gutterBottom  component="h2"> 
                        {this.props.Title}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.Price}
                    </Typography>

                    <Button size="small" variant="contained" style = {{marginTop: 10, backgroundColor: "#0ABAB5"}} 
                    onClick={this.handleSomething}>
                        ADD TO CART
                    </Button>

                </CardContent>

                </CardActionArea>
            </Card>

        
        )
    }
}


export const query = graphql`
query  {
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

//export default withStyles(styles)(query)(Cards);


