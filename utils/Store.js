import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  user:Cookies.get('user')
  ? JSON.parse(Cookies.get('user')):
  null,
  openPostDetails: false,
  post:{},
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_POST_DETAILS':
      return { ...state,  openPostDetails: true , post:action.payload };
      case 'CLOSE_POST_DETAILS':
        return { ...state,  openPostDetails: false ,post:{} };
      case 'LOGIN_USER':
        return {...state,user:action.payload}
        case 'REGISTER':
        return {...state,user:action.payload}
    default:
      return state;
  }
};
export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
  }