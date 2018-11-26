export const fetchUsers = (res, page) => {
  return {
    type: "FETCH_USERS",
    res,
    page
  };
};

export const getUser = (res) => ({
  type: "FETCH_USER",
  res,
})
