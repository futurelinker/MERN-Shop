import * as actionTypes from "../constants/cartConstants";
//Reducer holds items on cart and his allowed actions
// Initial or default state of items cartItems: []
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      
    const item = action.payload;
      
      // check if the item already exist
      const exisItem = state.cartItems.find((x) => x.product === item.product);

      if (exisItem) {
         return {
          //  spread actual state
          ...state,
          // check if item already exist on state
          cartItems: state.cartItems.map((x) =>
          // if exists add to cart
            x.product === exisItem.product ? item : x
          ),
        };
      } else {
        return {
          // if its first time
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        // creates a new array without the matching product
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    default:
      return state;
  }
};
