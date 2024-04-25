import axios from "axios";
import { settings } from "../helpers/settings";

const apiURL = settings.apiURL;

export const getStudentsByPage = (size = 6, page = 0) => {
  return axios.get(`${apiURL}/users?limit=${size}&skip=${page}`);
};

export const deleteStudentById = (id) => {
  return axios.delete(`${apiURL}/users/${id}`);
};

export const searchStudents = (student) => {
  return axios.get(`${apiURL}/users/search?q=${student}`);
};

export const createNewStudent = (student) => {
  return axios.post(`${apiURL}/users/add`, student);
};

export const updateStudent = (id, student) => {
  return axios.put(`${apiURL}/users/${id}`, student);
};
