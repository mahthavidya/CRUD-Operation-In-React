export const autoLogin = (data) => {
  console.log(data);
  return {
    type: "Token_Login",
    payload: data,
  };
};
export const deleteToken = () => {
  return {
    type: "Delete_Token",
  };
};
