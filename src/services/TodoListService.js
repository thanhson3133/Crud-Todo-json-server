import axios from "axios";
import { DOMAIN } from "../util/contanst/settingSystem";

export class ToDoListService {
  constructor() {}
  loginAPISaga = (form) => {
    return axios({
      url: `https://web.truework.com.vn/api/Web/DangKyThongTinWebsite`,
      method: "POST",
      data: form,
    });
  };
  getTaskAPISaga = () => {
    return axios({
      url: `${DOMAIN}/ToDoList/GetAllTask`,
      method: "GET",
    });
  };
  addTaskAPI = (taskName) => {
    return axios({
      url: `${DOMAIN}/ToDoList/addTask`,
      method: "POST",
      data: { taskName: taskName },
    });
  };
  deleteTaskAPI = (taskName) => {
    return axios({
      url: `${DOMAIN}/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
  };
  checkDoneTaskAPI = (taskName) => {
    return axios({
      url: `${DOMAIN}/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    });
  };
  rejectTaskAPI = (taskName) => {
    return axios({
      url: `${DOMAIN}/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    });
  };
}

export const toDoListService = new ToDoListService();
