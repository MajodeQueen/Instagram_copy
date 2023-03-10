import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SAVE_USERINFO':
      return { ...state, userInfo: action.payload };
    case 'SIGNUP':
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
}
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
