import axios from "axios";
export const loginAction = async (credentials) => {
  const res = await axios.post(`http://localhost:3000/user/login`, credentials);
  return res;
};
export const signupAction = async (credentials) => {
  const res = await axios.post(
    `http://localhost:3000/user/signup`,
    credentials
  );
  return res;
};
