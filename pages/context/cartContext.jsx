import {createContext,useContext,useReducer}from "react";
import reducer from "../reducer/cartReducer";



export const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
};

 const CartProvider = ({ Children }) => {
  console.log(Children);

  const [state, dispatch] = useReducer(reducer, initialState);




  const addToCart = (_id, title, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { _id, title, product } });
  };



  return <CartContext.Provider value={{...state, addToCart}}>{Children}</CartContext.Provider>;
};



// // global hook
// const useCartContext=()=>{

//     return useContext(CartContext);
// }


export default  CartProvider;
