import axios from "axios";

export const searchUsers = async (username, location, minRepos) => {
  let query = username ? `${username}` : "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const res = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return res.data;
};
import axios from "axios";

export const fetchUserData = async (username) => {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
};
