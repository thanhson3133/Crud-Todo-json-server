import axios from "axios";
import Swal from "sweetalert2";
import {
  COMPLETEPROFILE,
  DOMAIN,
  GETDISHLISH,
  ISSUCCESS,
  LOGIN,
  SIGNUP,
} from "../constant";
import { createAction } from "./createAction";

export const loginThunk_ = (form) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "Waiting ...",
        text: "Đang xử lý ...",
        icon: "info",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      await axios({
        url: `${DOMAIN}Web/DangKyThongTinWebsite`,
        method: "POST",
        data: form,
      })
        .then((res) => {
          console.log("res", res.data);
          if (res.data.isSuccess === true) {
            dispatch(createAction(LOGIN, true));
            Swal.mixin({
              customClass: {
                confirmButton: "btn btn-success",
              },
              buttonsStyling: false,
            }).fire({
              title: "",
              html: `<a  style="color: #27ae60">Thực hiện thành công</a>`,
              icon: "success",
              confirmButtonText: "Xác Nhận",
            });
            setTimeout(() => {
              window.location.href = "/dangky";
            }, 1000);
          } else {
            Swal.mixin({
              customClass: {
                confirmButton: "btn btn-danger",
              },
              buttonsStyling: false,
            }).fire({
              title: "",
              html: `<span style="color:red">${res.data.message}</span>`,
              icon: "error",
              confirmButtonText: "Xác Nhận",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("", `${err.data.message}`, "error");
        });
    } catch (err) {
      console.log("err", err);
    }
  };
};
export const completeProfile = (form) => {
  // return async (dispatch) =>{
  //   try {
  //     Swal.fire({
  //       title: "Waiting ...",
  //       text: "Đang xử lý ...",
  //       icon: "info",
  //       showConfirmButton: false,
  //       allowOutsideClick: false,
  //     });
  //     await axios({
  //       // url: `${DOMAIN}Web/DangKyThongTinWebsite`,
  //       method: "POST",
  //       data: form,
  //     })
  //       .then((res) => {
  //         // console.log("res", res.data);
  //         if (res.data.isSuccess === true) {
  //           dispatch(createAction(COMPLETEPROFILE, true));
  //           Swal.mixin({
  //             customClass: {
  //               confirmButton: "btn btn-success",
  //             },
  //             buttonsStyling: false,
  //           }).fire({
  //             title: "",
  //             html: `<a  style="color: #27ae60">Tạo thành công</a>`,
  //             icon: "success",
  //             confirmButtonText: "Xác Nhận",
  //           });
  //           setTimeout(() => {
  //             window.location.href ='/baikiemtra'
  //           }, 1000);
  //         } else {
  //           Swal.mixin({
  //             customClass: {
  //               confirmButton: "btn btn-danger",
  //             },
  //             buttonsStyling: false,
  //           }).fire({
  //             title: "",
  //             html: `<span style="color:red">${res.data.message}</span>`,
  //             icon: "error",
  //             confirmButtonText: "Xác Nhận",
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         Swal.fire("", `${err.data.message}`, "error");
  //       });
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // }
};
export const getDishLish = (tenMon, trangThai, pageIndex, pageSize) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `https://devorder.truedata.vn/api/POSWeb/GetDanhSachMon?TenMon=${tenMon}&TrangThai=${trangThai}&PageIndex=${pageIndex}&PageSize=${pageSize}`,
        method: "GET",
      })
        .then((res) => {
          dispatch(createAction(GETDISHLISH, res.data));
          console.log("....aaaaa:", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch(err) {
      console.log(err);
    }
  };
};
export const signup = (form) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "Waiting ...",
        text: "Đang xử lý ...",
        icon: "info",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      await axios({
        url: `${DOMAIN}Web/DangKyThongTinWebsite`,
        method: "POST",
        data: form,
      })
        .then((res) => {
          if (res.data.isSuccess === true) {
            dispatch(createAction(SIGNUP, true));
            Swal.mixin({
              customClass: {
                confirmButton: "btn btn-success",
              },
              buttonsStyling: false,
            }).fire({
              title: "",
              html: `<span style="color: #27ae60">Thực hiện thành công</span>`,
              icon: "success",
              confirmButtonText: "Xác Nhận",
            });
            setTimeout(() => {
              window.location.href = "/hoanthienhoso";
            }, 1000);
          } else {
            Swal.mixin({
              customClass: {
                confirmButton: "btn btn-danger",
              },
              buttonsStyling: false,
            }).fire({
              title: "",
              html: `<span style="color:red">${res.data.message}</span>`,
              icon: "error",
              confirmButtonText: "Xác Nhận",
            });
            // setTimeout(() => {
            //   window.location.reload()
            // }, 1700);
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("", `${err.data.message}`, "error");
        });
    } catch (err) {
      console.log("err", err);
    }
  };
};
export const testAsk = (form) => {};
