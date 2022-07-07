import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    DOMAIN,
    FILTER_STATUS,
    GET_PRODUCT,
    SEARCH_PRODUCT,
    SORT_PRODUCT,
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

  export const search_product = (keyword) => {
    try {
      return async (dispatch) => {
        await axios
          .get(`http://localhost:3000/Products?q=${keyword}`)
          .then((res) => {
            dispatch(createAction(SEARCH_PRODUCT, res.data));
          })
          .catch((err) => console.log(err));
      };
    } catch (err) {}
  };

  export const sort_product = (value) => {
    try {
      return async (dispatch) => {
        await axios
        .get(`http://localhost:3000/Products?_sort=${value}&_order=acs`)
        .then((res) => {
          dispatch(createAction(SORT_PRODUCT, res.data));
  
        })
        .catch((err) => console.log(err));
      };
    } catch (err) {}
  };

  export const filter_status = (value) => {
    try {
      return async (dispatch) => {
        await axios
        .get(`http://localhost:3000/Products?status=${value}`)
        .then((res) => {
          dispatch(createAction(FILTER_STATUS, res.data));
  
        })
        .catch((err) => console.log(err));
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
              html: `<a  style="color: green">Delete Success</a>`,
              icon: "success",
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
              html: `<a  style="color: green">Create Success</a>`,
              icon: "success",
              confirmButtonText: "Confirm",
            });
            dispatch(get_product());
          })
          .catch((err) => {
            alert(err.response.data);
          });
      };
    } catch (err) {}
  };