import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRODUCTS,
  SHOW_PRODUCT,
  REMOVE_ONE_CART,
} from "./actionTypes";
import { CartAction, Product } from "./cartActions";

export interface CartState {
  items: { [id: string]: Product };
  products: Product[];
  cart: Product[];
}

const initialState: CartState = {
  items: {},
  products: [],
  cart: [],
};

let existingItem;
let cartItem;

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SHOW_PRODUCT:
      return {
        ...state,
        items: { [action.payload.id]: action.payload },
      };
    case ADD_TO_CART:
      existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
      case REMOVE_ONE_CART:
         cartItem = state.cart.find((item) => item.id === action.payload);
        if (cartItem && cartItem.quantity > 1) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
            ),
          };
        } else {
          return state;
        }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
