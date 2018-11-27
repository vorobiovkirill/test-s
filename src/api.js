import { fetchUsers, getUser } from "./actions";

export const request = (page = 1) => {
  console.log("page", page);
  return dispatch => {
    fetch(`https://api.github.com/users?since=${page}&per_page=10`)
      .then(response => response.json())
      .then(response => dispatch(fetchUsers(response, page)))
      .catch(error => console.log("Oops! . There Is A Problem", error));
  };
};

export const fetchOneUser = name => {
  console.log("name", name);
  return  async dispatch => {

    const response = await fetch(`https://api.github.com/users/${name}`)

    const user = await response.json()

    dispatch(getUser(user, name))
  };
};
