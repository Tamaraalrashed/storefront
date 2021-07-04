const initialState={
    products:[
        {categoryAssociation:'electronics',name:'1TB USB',description:'no description',price:'17', inventoryCount:'7'},
        {categoryAssociation:'electronics',name:'Monitor',description:'no description', price:'150',  inventoryCount:'5'},
        {categoryAssociation:'electronics',name:'Mouse',description:'no description', price:'8', inventoryCount:'3'},
        {categoryAssociation:'food',name:'Calzones',description:'no description', price:'10', inventoryCount:'4'},
        {categoryAssociation:'food',name:'apple',description:'no description', price:'1.5', inventoryCount:'10'},
        {categoryAssociation:'food',name:'strawberry',description:'no description', price:'8', inventoryCount:'20'},
    ]

}


const productsReducer=(state=initialState,action)=>{
    let {type, payload}=action;
    switch (type) {

        case 'ACTIVE':
         let activeProducts=state.products.map(item=>{
        if(payload.activeCategory===item.categoryAssociation)
          return{
          product:item
          };

            });
            return activeProducts;
        
        default :
        return state;
        
            };
    
        }
































export default productsReducer;