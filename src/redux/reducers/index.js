import {
  ADDPRODUCT,
  ADDUSER,
  DETAILPRODUCT,
  DETAILUSER,
  UPDATEUSER,
  GET_TASK_LIST,
  UPDATEPRODUCT,
  LOGIN,
  ISSUCCESS,
} from "../constant";

const initialState = {
  taskList: [],
  taskSaga: [],
  isUpdateProduct: false,
  isDetailProduct: false,
  isAddProduct: false,
  isUpdateUser: false,
  isDetailUser: false,
  isAddUser: false,
  isLogin: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_LIST:
      state.taskList = action.payload;
      return { ...state };
    case "GETTASK":
      state.taskSaga = action.payload;
      return { ...state };
    case UPDATEPRODUCT:
      state.isUpdateProduct = action.payload;
      return { ...state };
    case DETAILPRODUCT:
      state.isDetailProduct = action.payload;
      return { ...state };
    case ADDPRODUCT:
      state.isAddProduct = action.payload;
      return { ...state };
    case ADDUSER:
      state.isAddUser = action.payload;
      return { ...state };
    case UPDATEUSER:
      state.isUpdateUser = action.payload;
      return { ...state };
    case DETAILUSER:
      state.isDetailUser = action.payload;
      return { ...state };
    case LOGIN:
      state.isLogin = action.payload;
      return { ...state };
    default:
      return state;
  }
};
