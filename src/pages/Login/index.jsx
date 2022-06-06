import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../assets/img/logoVitaorga.png";
import { useDispatch } from "react-redux";
import isEmpty from "validator/lib/isEmpty";
import { createAction } from "../../redux/action/createAction";
import { LOGIN } from "../../redux/constant";
import { loginThunk_ } from "../../redux/action/user";
export default function Login() {
  const regex = /^((0[3|8|9|7|5])+([0-9]{8}))|((84[3|8|9|7|5])+([0-9]{8}))$/;
  const [userLogin, setuserLogin] = useState({
    hoTen: "",
    soDienThoai: "",
    email: "",
    diaChi: "",
  });
  const [validationMsg, setValidationMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateAll = (e) => {
    const msg = {};
    if (isEmpty(userLogin.hoTen)) {
      msg.hoTen = "Vui lòng nhập họ tên!";
    }
    if (isEmpty(userLogin.soDienThoai)) {
      msg.soDienThoai = "Vui lòng nhập số điện thoại!";
    } else if (!regex.test(userLogin.soDienThoai)) {
      msg.soDienThoai = "Số điện thoại không đúng định dạng!";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserLogin({
      ...userLogin,
      [name]: value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    dispatch(loginThunk_(userLogin))
    // dispatch({type: 'LOGINAPI', form: userLogin});
  };
  return (
    <section className="form-sign-in-up">
      <div className="img-logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="form-sign-in">
        <form onSubmit={handleLogin}>
          <div className="text-login">
            <span>Xin mời Đăng Nhập!</span>
          </div>
          <div className="form-group">
            <label htmlFor="sign-in-username">Họ Tên</label>
            <div className="form-input">
              <i class="fa fa-user"></i>
              <input
                type="text"
                name="hoTen"
                id="hoTen"
                onChange={handleChange}
                value={userLogin.hoTen}
                className="form-control"
                placeholder="Nhập họ tên"
              />
            </div>
            <p className="text-danger text-left">{validationMsg.hoTen}</p>
          </div>
          <div className="form-group">
            <label htmlFor="sign-in-pass">Số điện thoại</label>
            <div className="form-input">
              <i class="fa fa-lock"></i>
              <input
                name="soDienThoai"
                type="text"
                id="soDienThoai"
                onChange={handleChange}
                value={userLogin.soDienThoai}
                className="form-control"
                placeHolder="Nhập số điện thoại"
              />
            </div>
            <p className="text-danger text-left">{validationMsg.soDienThoai}</p>
          </div>
          <div className="remember-login">
            <div className="remember">
              <i class="fa fa-check-square"></i>
              <span>Ghi nhớ tài khoản</span>
            </div>
            <div className="ask-remember">
              <i></i>
              <span>Quên mật khẩu?</span>
            </div>
          </div>
          <button type="submit" className="btn">
            Đăng nhập
          </button>
          <div className="mt-4 form-signup-link">
            <NavLink to="/signup" className="nav-link-signup">
              Chưa Có Tài Khoản? <span>Đăng Kí</span>
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  );
}
