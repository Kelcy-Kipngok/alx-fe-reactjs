import axios from "axios";

export const fetchUserData = async (username) => {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
};
