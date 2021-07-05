let initialState = {
    categories: [
        { normalizedName: 'electronics',displayName:'ELECTRONICS', description:'this is the electronics department'},
        { normalizedName: 'food',displayName:'FOOD', description:'this is the food department'},
    ],
    activeCategory:null
    
}

const categoriesReducer=(state = initialState, action) => {
    let {type, payload}= action;

    switch (type) {

    case 'ACTIVE':

      return{
    categories: state.categories,
    activeCategory:payload
      };

    default :
    return state;
    
        };

    }


export const active = (category) => {
    return {
        type: 'ACTIVE',
        payload: category
    }
};


export default categoriesReducer;