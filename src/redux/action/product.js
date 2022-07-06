import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  DOMAIN,
  GET_PRODUCT,
  UPDATE_PRODUCT,
} from "../constant";
import { createAction } from "./createAction";
import axios from "axios";
import Swal from "sweetalert2";

export const get_product = () => {
  try {
    return async (dispatch) => {
      await axios({
        url: `${DOMAIN}/Products`,
        method: "GET",
      })
        .then((res) => {
          dispatch(createAction(GET_PRODUCT, res.data));
          console.log("getdata", res.data);
        })
        .catch((err) => {
          alert(err);
        });
    };
  } catch (err) {}
};
export const delete_product = (id) => {
  try {
    return async (dispatch) => {
      await axios({
        url: `${DOMAIN}/Products/${id}`,
        method: "DELETE",
      })
        .then((res) => {
          dispatch(createAction(DELETE_PRODUCT, true));
          Swal.fire({
            title: "",
            html: `<a  style="color: red">Delete Success</a>`,
            icon: "error",
            confirmButtonText: "Confirm",
          });
          dispatch(get_product());
        })
        .catch((err) => {
          alert(err);
        });
    };
  } catch (err) {}
};
export const update_product = (form) => {
  try {
    return async (dispatch) => {
      await axios({
        url: `${DOMAIN}/Products`,
        method: "PUT",
        data: form,
      })
        .then((res) => {
          dispatch(createAction(UPDATE_PRODUCT, true));
          Swal.fire({
            title: "",
            html: `<a  style="color: red">Update Success</a>`,
            icon: "error",
            confirmButtonText: "Confirm",
          });
          dispatch(get_product());
        })
        .catch((err) => {
          alert(err);
        });
    };
  } catch (err) {}
};

export const create_product = (form) => {
  try {
    return async (dispatch) => {
      await axios({
        url: `${DOMAIN}/Products`,
        method: "POST",
        data: form,
      })
        .then((res) => {
          dispatch(createAction(CREATE_PRODUCT, false));
          Swal.fire({
            title: "",
            html: `<a  style="color: red">Create Success</a>`,
            icon: "success",
            confirmButtonText: "Confirm",
          });
        })
        .catch((err) => {
          alert(err.response.data);
        });
    };
  } catch (err) {}
};
