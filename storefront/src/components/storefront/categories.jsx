import React from 'react';
import { connect } from 'react-redux';
import {active} from '../../store/categories';
import {Button,Paper} from '@material-ui/core';



const Categories= (props)=>{
//    console.log('ssssssss', props.totalCategories);
    return(
      <section>
          <ul>

            {props.totalCategories.categories.map(item=>{
            //   console.log('item', item);
                return(
                   
                // <p>hello</p>
                    <Button variant="text" color="primary" key={item.displayName} 
                     onClick={() => props.active(item)}
                    >
                    {item.displayName} 
                    </Button>
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
