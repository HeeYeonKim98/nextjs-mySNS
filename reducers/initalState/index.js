import shortid from "shortid";

const userDummy = (data) => ({
  email: data.email,
  password: data.password,
  id: 1,
  name: "희연",
  Posts: [{ id: 1 }],
  Followings: [{ nickname: "희연" }, { nickname: "희연" }],
  Followers: [{ nickname: "희d연" }],
});

const userState = {
  signupLoading: false, // 요청
  isSignedUp: false, // 완료
  signupError: null, // 실패

  loginLoading: false,
  loginDone: false,
  loginError: null,

  logoutLoading: false,
  logoutDone: false,
  logoutError: null,

  followLoading: false,
  followDone: false,
  followError: null,

  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,

  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,

  user: null, // 로그인 정보
  signUpData: {},
  loginData: {},
};

const postDummy = (data) => ({
  id: data.id,
  User: {
    id: 1,
    name: "희연",
  },
  content: data.content,
  Images: [],
  Comments: [],
});

const commentDummy = (data) => ({
  id: shortid.generate(),
  User: {
    id: 1,
    name: "희영",
  },
  date: "2021-08-18",
  content: data,
});

const postState = {
  viewPostLoading: false, // 요청
  viewPostDone: false, // 완료
  viewPostError: false, // 실패

  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: false,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,

  deleteCommentLoading: false,
  deleteCommentDone: false,
  deleteCommentError: false,

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
          id: shortid.generate(),
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
      ],
      Comments: [
        {
          id: shortid.generate(),
          User: {
            name: "hee",
          },
          date: "2021-08-18",
          content: "우와!",
        },
        {
          id: shortid.generate(),
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
};

export { postDummy, commentDummy, userDummy, postState, userState };
