import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {Button,Paper,Link,Tab} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(7),
    },
  },
  cart:{
    
  float:'right'
  }
}));
const Header=(props)=>{
  // const classes = useStyles();
  // console.log('props for cart', props);
    return (
        <>
        <Paper> 
        <Button variant="text" color="primary">
          {/* <Link to="/"> */}
            <Tab label="Tamara Store" />
            {/* </Link> */}
            </Button>
        <Button variant="text" color="primary">
          {/* <Link to="/cart"> */} 
            <Tab label="CART({props.indexOfCart})" />
            {/* </Link> */}
          
            </Button>
        </Paper>
        {/* <Paper className={classes.root}>
        <h1>Tamara Store</h1>
        <h4 className={classes.cart}>cart</h4>
        </Paper> */}
   
        </>
      );




}

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer
});

export default connect(mapStateToProps)(Header);
