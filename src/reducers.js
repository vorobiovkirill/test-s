import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const initialState = {
  users: [],
  user: {},
  loading: true
};

const usersReducer = (state = initialState || {}, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      console.log("action", action);
      return {
        users: action.res
      };
    case "FETCH_USER":
      console.log("action", action);
      return {
        user: action.res,
        loading: false
      };
    default:
      return state;
  }
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    usersReducer
  });
