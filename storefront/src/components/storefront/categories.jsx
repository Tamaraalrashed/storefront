import React from 'react';
import { connect } from 'react-redux';
import {active} from '../../store/categories';
import { remoteData } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';



import {Button,Paper} from '@material-ui/core';


const Categories= (props)=>{
//    console.log('ssssssss', props.totalCategories);
const dispatch = useDispatch();
const state = useSelector((state) => {
    return {
        totalCategories:state.categoriesReducer
       }
});
    return(
      <section>
          <ul>

            {props.totalCategories.categories.map(item=>{
            //   console.log('item', item);
                return(
            
                    <Button variant="text" color="primary" key={item.displayName} 
                    //  onClick={() => props.active(item)}
                    onClick={() =>dispatch(remoteData(item.normalizedName,'get',{}))}
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
