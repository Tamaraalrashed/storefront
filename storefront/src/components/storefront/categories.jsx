import React from 'react';
import { connect } from 'react-redux';
import {active} from '../../store/categories';




const Categories= (props)=>{
//    console.log('ssssssss', props.totalCategories);
    return(
      <section>
          <ul>

            {props.totalCategories.categories.map(item=>{
             
                return(
                 
                    <button key={item.displayName} onClick={() => props.active(item)}>
                    {item.displayName}
                    </button>
                    ) 
                })
            }
            </ul>
       </section>
        
    )
}



const mapStateToProps=(state)=>({
    totalCategories:state.categoriesReducer
});
const mapDispatchToProps={active}

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
