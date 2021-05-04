// 1. import dependencies
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

// 2. create reducer
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});
// thunk allows to make async request on actionsnpm
const middleware = [thunk];

// 3. Create store
const store = createStore(
  // 4. reducer
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// 5. export store and connect to index.js
export default store;
