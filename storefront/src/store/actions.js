// import superagent from 'superagent';
import axios from 'axios';


export const remoteData = (categoryName,method,data) => (dispatch, state) => {
    const api = `https://api-js401.herokuapp.com/api/v1/products?category=${categoryName}`;
    return  axios({
        method: method,
        url: api,
        data: data
      })
     .then(res => {
         switch (method) {
             case 'GET':
              return  dispatch(getAction(res.data));  
              case 'PUT':
              return  dispatch(putAction(res.data));
              case 'DELETE':
                return  dispatch(deleteAction(res.data));  
                case 'POST':
                    return  dispatch(postAction(res.data));        
         
             default:
                 break;
         }
        
       
    });
}




export const getAction = payload => {
    return {
        type: 'GET',
        payload,
      
    }
}

export const putAction = (payload) => {
    return {
      type: 'PUT',
      payload: payload,
    };
  };

  export const postAction = (payload) => {
    return {
      type: 'POST',
      payload: payload,
    };
  };

  export const deleteAction = (payload) => {
    return {
      type: 'DELETE',
      payload: payload,
    };
  };