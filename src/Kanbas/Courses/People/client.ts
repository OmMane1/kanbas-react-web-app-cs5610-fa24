import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const USERS_API = `${REMOTE_SERVER}/api/users`;
const COURSE_USERS_API = `${REMOTE_SERVER}/api/courses`;

export const getAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const getUserById = async (userId: string) => {
  const response = await axios.get(`${USERS_API}/${userId}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(USERS_API, user);
  return response.data;
};

export const updateUser = async (userId: string, updates: any) => {
  const response = await axios.put(`${USERS_API}/${userId}`, updates);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};

export const getUsersByCourseId = async (courseId: string) => {
  const response = await axios.get(`${COURSE_USERS_API}/${courseId}/users`);
  return response.data;
};
