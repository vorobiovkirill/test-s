import { fetchUsers, getUser } from "./actions";

export const request = (page = 1) => {
  console.log("page", page);
  return dispatch => {
    fetch(`https://api.github.com/users?since=${page}&per_page=10`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => dispatch(fetchUsers(response, page)))
      .catch(error => console.log("Oops! . There Is A Problem", error));
  };
};


export const fetchOneUser = (name) => {
  console.log("name", name);
  return dispatch => {
    fetch(`https://api.github.com/users/${name}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(response => dispatch(getUser(response, name)))
      .catch(error => console.log("Oops! . There Is A Problem", error));
  };
};