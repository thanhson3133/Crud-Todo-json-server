import { all } from "redux-saga/effects";
import * as FollowAction from './action/index'
/*redux có 2 loại action:
    Loại 1: action => object (action thường)
    Loại 2: action => funtion (thường dùng để xử lý api hoặc gọi các action khác)
*/
export function* rootSaga() {
  yield all([
    // nghiệp vụ theo dõi các action saga todolist
    FollowAction.followActionTaskAPI(),
    FollowAction.followDeleteTaskAPI(),
    FollowAction.followAddTaskAPI(),
    FollowAction.followCheckDoneTaskAPI(),
    FollowAction.followRejectTaskAPI(),
    FollowAction.followLoginSaga(),
  ])
}