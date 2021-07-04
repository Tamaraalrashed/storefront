import React from 'react';
import { connect } from 'react-redux';




const Products= (props)=>{
   console.log('ssssssss', props.totalProducts);
    return(
      <section>
          <ul>

            {props.totalProducts.products.map(item=>{
                //    console.log('srrrrrrr', item)
                return(
                 <p>{item.displayName}</p>
                    // <button key={item.displayName} onClick={() => props.active(item)}>
                    // {item.displayName}
                    // </button>
                    ) 
                })
            }
            </ul>
       </section>
        
    )
}



const mapStateToProps = (state) => ({
    totalProducts: state.productsReducer,
    totalCategories:state.categoriesReducer.activeProducts
  });
  
  export default connect(mapStateToProps)(Products);

