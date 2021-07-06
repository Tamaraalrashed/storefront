import React from 'react';
import { connect } from 'react-redux';
import {add} from '../../store/cart';
//for styling
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Products= (props)=> {
  const classes = useStyles();
  if (props.totalProducts){
  return (
    <>
    {props.totalProducts.map((item)=>{
      return(
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" 
        onClick={() => props.add(item)}
        >
          ADD TO CART
        </Button>
        <Button size="small" color="primary">
          VIEW DETAILS
        </Button>
      </CardActions>
    </Card>
  )
  
})
    }
</>
  )
    }
    else{
      return( <div></div>)
    }
}
// const Products= (props)=>{
//    console.log('products props', props.totalProducts);
//    console.log('categories props', props.activeCategory);


//     if (props.totalProducts){
//    return( 
//      <section>
//        <h3>{props.activeCategory.displayName}</h3>
//        <h4>{props.activeCategory.description}</h4>
//           <ul>

//             {props.totalProducts.map((item)=>{
//               //  console.log('inside map', item)
//                 return(
//                 <>
//                  <p >{item.name}</p>
//                  <p>{item.description}</p>
//                  <p> {item.price}$</p>
//                 </>
//                     ) 
//                 })
//             }
//             </ul>
//        </section>
//        )
//     }
//     else{
//       return( <div></div>)
//     }
     
// }



const mapStateToProps = (state) => ({
    totalProducts: state.productsReducer.activeProducts,
     activeCategory:state.categoriesReducer.activeCategory

  });
  

  const mapDispatchToProps={add}


  export default connect(mapStateToProps,mapDispatchToProps)(Products);

