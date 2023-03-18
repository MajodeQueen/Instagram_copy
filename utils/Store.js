import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  openPostDetails: false,
  post:{}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_POST_DETAILS':
      return { ...state,  openPostDetails: true , post:action.payload };
      case 'CLOSE_POST_DETAILS':
        return { ...state,  openPostDetails: false ,post:{} };
    default:
      return state;
  }
};
export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
  }