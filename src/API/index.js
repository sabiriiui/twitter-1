import axios from "axios";

const BASE_URL = "https://dmsglobal.net/ct-api";

const getToken = () => {
  // You can implement your own logic to get the token here
  return "8U7dPDoiozxF26WNLAdJdo2S9KN7wwg58Dub0v9D";
};

const callAPI = (method, endpoint, data) => {
  const token = getToken();

  return axios({
    method,
    url: `${BASE_URL}/${endpoint}`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};

export const getTimeline = (page = 1) => {
  return callAPI("get", `timeline?page=${page}`);
};

export const likePost = (postId) => {
  return callAPI("post", "like", { post_id: postId });
};

export const unlikePost = (postId) => {
  return callAPI("post", "unlike", { post_id: postId });
};
