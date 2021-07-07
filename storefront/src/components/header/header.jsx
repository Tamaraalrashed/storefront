import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

//for styling
import { Button,Typography,AppBar,Toolbar,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    toolbar: {
      background: '#ffffff',
      padding: theme.spacing(2),
    },
    cart: {
      alignSelf: "center",
      textAlign: "right",
      color: "#eee",
    },
    appBar: {
      zIndex: 1000
    },
  }));
  
const Header = (props) =>{
    const classes = useStyles();
    return (
        <>
        <AppBar className={classes.appBar} position="relative">
        <Toolbar className={classes.toolbar}>
        <Grid container>
        <Grid item xs>
        <Button ><Typography variant="h3" component="h3">OUR STORE</Typography></Button>
        </Grid>
        <Grid item xs className={classes.cart}>
        <Button  >CART ({props.cartItems.indexOfCart})</Button>
        </Grid>
        </Grid>
        </Toolbar>
        </AppBar>
        </>
    )
}


const mapStateToProps = (state) => ({
  cartItems: state.cartReducer
});

export default connect(mapStateToProps)(Header);
