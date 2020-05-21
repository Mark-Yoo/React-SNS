const dummyUser = {
  nickname: "Mark",
  post: [1, 2, 3, 4, 5, 6, 7],
  following: [1, 2, 3, 4, 5],
  follower: [1, 2, 3, 4, 5, 6],
  signUpData: {},
};

const initialState = {
  isLoggedIn: false,
  user: null,
};

export const loginAction = {
  type: "LOG_IN",
};
export const logoutAction = {
  type: "LOG_OUT",
};
export const signupAction = (data) => {
  return {
    type: "SIGN_UP",
    data: data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      };
    }
    case "LOG_OUT": {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case "SIGN_UP": {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
