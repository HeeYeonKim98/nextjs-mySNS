const dummyUser = {
  id: 1,
  name: "희연",
  Posts: [],
  Followings: [],
  Followers: [],
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    name: "연희",
  },
  Images: [],
  Comments: [],
};

const userState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

const postState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        name: "희연",
      },
      content: "첫 번째 게시글",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "hee",
          },
          content: "우와!",
        },
        {
          User: {
            nickname: "yeon",
          },
          content: "안녕!",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

export default {
  dummyPost,
  dummyUser,
  postState,
  userState,
};
