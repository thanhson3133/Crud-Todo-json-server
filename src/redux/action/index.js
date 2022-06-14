import axios from "axios";
import { GETDISHLISH, GET_TASK_LIST } from "../constant";
import { createAction } from "./createAction";

export const getTaskListAPI = () => {
  return (dispatch) => {
    axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    })
      .then((res) => {
        dispatch(createAction(GET_TASK_LIST, res.data));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};