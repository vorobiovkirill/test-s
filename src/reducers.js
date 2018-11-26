const initialState = {
  users: [],
  user: {}
};

const reducer = (state = initialState || {}, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      console.log("action", action);
      return {
        users: action.res
      };
    case "FETCH_USER":
      console.log("action", action);
      return {
        user: action.res
      };
    default:
      return state;
  }
};

export default reducer;
