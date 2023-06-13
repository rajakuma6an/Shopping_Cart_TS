import { combineReducers } from "redux";
import cartReducer, { CartState } from "./reducer";

export interface RootState {
  cart: CartState;
}

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
