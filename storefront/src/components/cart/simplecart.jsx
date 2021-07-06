import React from 'react';
import { connect } from 'react-redux';
import {add} from '../../store/cart';
import {Button,Paper} from '@material-ui/core';



const SimpleCart= (props)=>{
   console.log('ssssssss', props.cartItems);
    return(
      <section>
          <ul>
          {/* <p>{props.cartItems </p> */}
            {props.cartItems.cartItems.map(item=>{
            //   console.log('item', item);
                return(
                <div>
           <p>{item.name}</p>
           <Button variant="text" color="primary" key={item.displayName} 
           
        //    onClick={() => props.delete(item)}
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

const mapDispatchToProps={add}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart);
