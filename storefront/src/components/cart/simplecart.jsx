import React from 'react';
import { connect } from 'react-redux';
import {add,deleteProduct} from '../../store/cart';


//for styling
import './simpleCart.scss';
import {Button,Paper} from '@material-ui/core';



const SimpleCart= (props)=>{
//    console.log('ssssssss', props.cartItems);
    return(
      <section>
          <ul>
            {props.cartItems.cartItems.map(item=>{
            //   console.log('item', item);
                return(
                <div className="simple-cart">
           <p>{item.name}</p>
           <Button variant="text" color="primary" key={item.displayName} 

          onClick={() => props.deleteProduct(item)}
           >
           x
          </Button>
                        </div>
                    // <Button variant="text" color="primary" key={item.displayName} 
                    //  onClick={() => props.active(item)}
                    // >
                    // {item.displayName} 
                    // </Button>
                    ) 
                })
            }
            </ul>
       </section>
        
    )
}



const mapStateToProps=(state)=>({
    cartItems:state.cartReducer
});

const mapDispatchToProps={add,deleteProduct}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart);
