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

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const loginAction = {
  type: LOG_IN_REQUEST,
};
export const logoutAction = {
  type: LOG_OUT_REQUEST,
};
export const loginRequest = {
  type: LOG_IN_REQUEST,
};
export const loginSuccess = {
  type: LOG_IN_SUCCESS,
};
export const loginFailure = {
  type: LOG_IN_FAILURE,
};
export const signUpSuccess = {
  type: SIGN_UP_SUCCESS,
};

export const signupAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data: data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
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
