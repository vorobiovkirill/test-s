const initialState = {
  users: []
};

const reducer = (state = initialState || {}, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      console.log("action", action);
      return {
        users: action.res
      };
    default:
      return state;
  }
};

export default reducer;
