import { LOGIN, LOGOUT } from "../types";
import { authInitialState } from "./auth-initial-state";

export const authReducer = (state = authInitialState, action) => {
  if (action.type === LOGIN) {
    const newState = { ...state, isUserLogin: true, user: action.payload };
    return newState;
  }
  else if(action.type === LOGOUT){
    const newState = { ...state, isUserLogin: false, user: null };
    return newState;
  }

  return state;
};
