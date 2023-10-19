import React from 'react';

const cartReducer = (state,action) => {
   
   if(action.type==="ADD_TO_CART"){
     let{ _id, title, product}=action.payload;
     console.log(_id, product)
   }
   
   
   
    return state;
    
};

export default cartReducer;