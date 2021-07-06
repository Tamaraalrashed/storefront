let initialState = {
    cartItems: [],
    indexOfCart:0
    
}

const cartReducer=(state = initialState, action) => {
    let {type, payload}= action;
console.log('state****',initialState);
    switch (type) {

    case 'ADD':
    
        if(!state.cartItems.includes(payload)&&payload.inventoryCount>0)  {
 
            return{
        ...state,cartItems:[...state.cartItems,payload],
        indexOfCart:state.indexOfCart+1,
        inStock:payload.inventoryCount--,
      };
      
        }
        else{
            return {...state}
        }
        case 'DELETE':
           let filteredArray = state.cartItems.filter((item) =>item !== payload && item);
            return {...state,cartItems:filteredArray,indexOfCart:state.indexOfCart-1,inStock:payload.inventoryCount++};
    default :
    return state;
    
        };

    }


export const add = (product) => {
    return {
        type: 'ADD',
        payload: product
    }
};

export const deleteProduct = (product) => {
    return {
        type: 'DELETE',
        payload: product
    }
};
export default cartReducer;