import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FILTER_STATUS,
  GET_PRODUCT,
  SEARCH_PRODUCT,
  SIGNIN,
  SIGNUP,
  SORT_PRODUCT,
  UPDATE_PRODUCT,
} from "../constant";

const initialState = {
  signup: {},
  signin: {},
  data_product: [],
  isDelete: false,
  isCreate: false,
  isUpdate: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      state.signup = action.payload;
      return { ...state };
    case SIGNIN:
      state.signin = action.payload;
      return { ...state };
    case GET_PRODUCT:
      state.data_product = action.payload;
      return { ...state };
    case SEARCH_PRODUCT:
      state.data_product = action.payload;
      return { ...state };
    case SORT_PRODUCT:
      state.data_product = action.payload;
      return { ...state };
    case FILTER_STATUS:
      state.data_product = action.payload;
      return { ...state };
    case DELETE_PRODUCT:
      state.isDelete = action.payload;
      return { ...state };
    case UPDATE_PRODUCT:
      state.isUpdate = action.payload;
      return { ...state };
    case CREATE_PRODUCT:
      state.isCreate = action.payload;
      return { ...state };
    default:
      return state;
  }
};
