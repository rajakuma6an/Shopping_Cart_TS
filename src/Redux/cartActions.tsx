import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_PRODUCTS,
    SHOW_PRODUCT,REMOVE_ONE_CART
  } from "./actionTypes";
  import { Dispatch } from "redux";
  
  export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
  }
  
  export interface SetProductsAction {
    type: typeof SET_PRODUCTS;
    payload: Product[];
  }
  
  export interface ShowProductAction {
    type: typeof SHOW_PRODUCT;
    payload: Product;
  }
  
  export interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: Product;
  }
  
  export interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: string;
  }

  export interface RemoveOneCartAction {
    type: typeof REMOVE_ONE_CART;
    payload: string;
  }
  
  export type CartAction =
    | SetProductsAction
    | ShowProductAction
    | AddToCartAction
    | RemoveFromCartAction
    | RemoveOneCartAction;
  
  export const setProducts = (products: Product[]): SetProductsAction => ({
    type: SET_PRODUCTS,
    payload: products,
  });
  
  export const showProduct = (product: Product): ShowProductAction => ({
    type: SHOW_PRODUCT,
    payload: product,
  });
  
  export const addToCart = (product: Product): AddToCartAction => ({
    type: ADD_TO_CART,
    payload: product,
  });
  
  export const removeFromCart = (productId: string): RemoveFromCartAction => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
  
  export const removeOneCart = (productId: string): RemoveOneCartAction => ({
    type: REMOVE_ONE_CART,
    payload: productId,
  });

  export const asyncAddToCart = (product: Product) => {
    return (dispatch: Dispatch) => {
      setTimeout(() => {
        dispatch(addToCart(product));
      }, 2000);
    };
  };
  