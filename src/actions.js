export const fetchUsers = (res, page) => {
  console.log("res", res);
  return {
    type: "FETCH_USERS",
    res,
    page
  };
};
