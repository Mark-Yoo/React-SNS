const initialState = {
  isLoggedIn: false,
  user: {},
};

export const LOG_IN = "LOG_IN"; // action의 이름
export const LOG_OUT = "LOG_OUT";

const loginAction = {
  type: LOG_IN,
  data: {
    nickname: "제로초",
  },
};

const logoutAction = {
  type: LOG_OUT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
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
