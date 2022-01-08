const initialState = {
  token: "",
  listOfUser: [],
};

const loginStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Token_Login":
      console.log("Store", action);
      return { ...state, token: action.payload };

    case "Delete_Token":
      const tempState = { ...state };
      tempState.token = "";
      return tempState;

    default:
      return state;
  }
};
export default loginStatusReducer;
