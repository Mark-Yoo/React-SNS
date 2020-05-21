const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "Mark",
      },
      content: "처음 만드는 SNS",
    },
  ],
  imagePaths: [],
};

export const addPost = {
  type: "ADD_POST",
};
export const addDummy = {
  type: "ADD_DUMMY",
  data: {
    content: "Hello",
    UserId: 1,
    User: {
      nickname: "Mark",
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST": {
      return {
        ...state,
      };
    }
    case "ADD_DUMMY": {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
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
