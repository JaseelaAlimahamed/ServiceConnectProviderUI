import { LOGIN_STATUS } from "../actions/authActions";

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
