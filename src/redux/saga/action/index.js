import { useNavigate } from "react-router-dom";
import { call, put } from "redux-saga/effects";
import { takeEvery, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import { toDoListService } from "../../../services/TodoListService";
import { STATUSCODE } from "../../../util/contanst/settingSystem";
import { LOGIN } from "../../constant";

export function* getTaskAPISaga(action) {
  // yield delay(3000);
  //yield take("getTaskAPIAction"); //theo dõi action -> xem action nào dispatch trùng với type trong take thì mới làm các công việc bên dưới
  //call tiếp các API dispatch lên reducer
  // ----------------
  let { data, status } = yield call(toDoListService.getTaskAPISaga);
  // khi lấy giá trị thành công dùng put tương đương dispatch của thunk
  yield put({
    type: "GETTASK",
    payload: data,
  });
}
function* loginSaga(action) {
  const { form } = action;
  try {
    const { data, status } = yield call(() => {
      return toDoListService.loginAPISaga(form);
    });
    if (data.isSuccess === true) {
      yield put({
        type: LOGIN,
        form: form,
      });
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
        window.location.reload();
      }, 1500);
    } else {
      Swal.mixin({
        customClass: {
          confirmButton: "btn btn-danger",
        },
        buttonsStyling: false,
      }).fire({
        title: "",
        html: `<span style="color:red">${data.message}</span>`,
        icon: "error",
        confirmButtonText: "Xác Nhận",
      });
    }
  } catch (err) {
    console.log("err", err);
  }
}
function* deleteTaskAPISaga(action) {
  const { taskName } = action;
  try {
    const { data, status } = yield call(() => {
      return toDoListService.deleteTaskAPI(taskName);
    });
    if (status === STATUSCODE.success) {
      yield put({
        type: "getTaskAPIAction",
      });
    }
  } catch (err) {
    console.log(err);
  }
}
function* addTaskAPISaga(action) {
  const { taskName } = action;
  try {
    const { data, status } = yield call(() => {
      return toDoListService.addTaskAPI(taskName);
    });
    if (status === STATUSCODE.success) {
      yield put({
        type: "getTaskAPIAction",
      });
    }
  } catch (err) {
    console.log(err);
  }
}
function* checkDoneTaskAPISaga(action) {
  const { taskName } = action;
  try {
    const { data, status } = yield call(() => {
      return toDoListService.checkDoneTaskAPI(taskName);
    });
    if (status === STATUSCODE.success) {
      yield put({
        type: "getTaskAPIAction",
      });
    }
  } catch (err) {
    console.log(err);
  }
}
function* rejectTaskAPISaga(action) {
  const { taskName } = action;
  console.log("taskname2", taskName);
  try {
    const { data, status } = yield call(() => {
      return toDoListService.rejectTaskAPI(taskName);
    });
    if (status === STATUSCODE.success) {
      yield put({
        type: "getTaskAPIAction",
      });
    }
  } catch (err) {
    console.log(err);
  }
}
export function* followDeleteTaskAPI() {
  yield takeLatest("delTaskAPIAction", deleteTaskAPISaga);
}
export function* followActionTaskAPI() {
  yield takeEvery("getTaskAPIAction", getTaskAPISaga);
}
export function* followAddTaskAPI() {
  yield takeEvery("addTaskAPIAction", addTaskAPISaga);
}
export function* followCheckDoneTaskAPI() {
  yield takeEvery("checkDoneTaskAction", checkDoneTaskAPISaga);
}
export function* followRejectTaskAPI() {
  yield takeEvery("rejectTaskAction", rejectTaskAPISaga);
}
export function* followLoginSaga() {
  yield takeLatest("LOGINAPI", loginSaga);
}
