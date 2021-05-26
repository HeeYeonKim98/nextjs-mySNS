const userDummy = {
  id: 1,
  name: "희연",
  Posts: [],
  Followings: [],
  Followers: [],
};

const userState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

const postDummy = {
  id: 3,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    name: "희연",
  },
  Images: [],
  Comments: [],
};

const postState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        name: "희연",
      },
      content: "첫 번째 게시글 #첫번째 #완성#해쉬태그",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
      ],
      Comments: [
        {
          User: {
            name: "hee",
          },
          date: "2021-08-18",
          content: "우와!",
        },
        {
          User: {
            name: "yeon",
          },
          date: "2021-08-18",
          content: "안녕!",
        },
      ],
    },
    {
      id: 2,
      User: {
        id: "heeyeon",
        name: "희연",
      },
      content: "두 번째 게시글",
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
            name: "hee",
          },
          date: "2021-08-18",
          content: "우와!",
        },
        {
          User: {
            name: "yeon",
          },
          date: "2021-08-18",
          content: "안녕!",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

export { postDummy, userDummy, postState, userState };
