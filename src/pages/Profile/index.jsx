import React from "react";
import { Navigate } from "react-router-dom";
export default function Profile() {
  const logOut = () => {
    localStorage.removeItem("userLogin");
    window.location.reload();
  };
  if (localStorage.getItem("userLogin")) {
    return (
      <div>
        <button className="btn btn-danger" onClick={() => logOut()}>
          LogOut
        </button>
      </div>
    );
  } else {
    alert("Vui Lòng Đăng Nhập Để Vào Trang Này");
    return <Navigate to={"/login"} />;
  }
}
