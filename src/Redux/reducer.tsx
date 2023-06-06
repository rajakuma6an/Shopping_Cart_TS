interface Product {
    id: number;
    name: string;
  }
  
  interface State {
    products: Product[];
    cart : Product[];
  }
  
  interface Action {
    type: string;
    payload: Product[];
  }
  
  const initialState: State = {
    products: [],
    cart : []
  };
  
  // Define the reducer
  const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, products: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  