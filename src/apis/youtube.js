import axios from "axios";

const KEY = "AIzaSyCO0Qo1Dj03gD1Iq413Acd1fdia9t3CL5A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
