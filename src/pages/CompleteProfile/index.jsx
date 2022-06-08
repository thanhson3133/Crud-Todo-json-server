import React, { useState } from "react";
import "./index.css";
import up from "../../assets/img/up.png";
import down from "../../assets/img/down.png";
import { useDispatch, useSelector } from "react-redux";
import { completeProfile } from "../../redux/action/user";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function CompleteProfile() {
  const [urlImgUp, seturlImgFront] = useState(null);
  const [urlImgDown, seturlImgBack] = useState(null);
  const [form, setForm] = useState({
    tinhThanhPho: "",
    huyenQuan: "",
    xaPhuong: "",
    duongSoNha: "",
    soDt: "",
    email: "",
    facebook: "",
    zalo: "",
    taiLe: "",
    xemPhim: "",
    ngheNhac: "",
    docSach: "",
    theThao: "",
    soDtNT: "",
    emailNT: "",
    fbNT: "",
    chieuCao: "",
    canNang: "",
    gioiTinh: "",
    diTat: "",
    Image_Up: "",
    Image_Down: "",
  });
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handlePostChangeUp = (e) => {
    seturlImgFront(e.target.files[0]);
    setForm({
      ...form,
      Image_Up: URL.createObjectURL(e.target.files[0]),
    });
  };
  console.log("urlImgUp", urlImgUp);
  const handlePostChangeDown = (e) => {
    seturlImgBack(e.target.files[0]);
    setForm({
      ...form,
      Image_Down: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleChangeSelect = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form);
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    // dispatch(completeProfile(form))
    Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
      },
      buttonsStyling: false,
    }).fire({
      title: "",
      html: `<a  style="color: #27ae60">Cập nhật thành công hồ sơ</a>`,
      icon: "success",
      confirmButtonText: "Xác Nhận",
    });
      navigator("/baikiemtra");
  };
  return (
    <div className="container_">
      <header>Hoàn Thiện Hồ Sơ</header>
      <form action="#" onSubmit={handleSubmitProfile}>
        <div className="details personal">
          <span className="title">Thông tin địa chỉ</span>
          <div className="fields">
            <div class="input-field">
              <label>
                Tỉnh / Thành Phố <span className="text-danger"> *</span>
              </label>
              <select
                onChange={handleChangeSelect}
                value={form.tinhThanhPho}
                name="tinhThanhPho"
              >
                <option value="" selected>
                  Chọn
                </option>
                <option value="HoChiMinh">Hồ Chí Minh</option>
                <option value="HaNoi">Hà Nội</option>
                <option value="DaNang">Đà Nẵng</option>
              </select>
            </div>
            <div class="input-field">
              <label>
                Huyện / Quận <span className="text-danger"> *</span>
              </label>
              <select
                onChange={handleChangeSelect}
                value={form.huyenQuan}
                name="huyenQuan"
              >
                <option value="" selected>
                  Chọn
                </option>
                <option value="TanBinh">Quận Tân Bình</option>
                <option value="BinhThanh">Quận Bình Thạnh</option>
                <option value="GoVap">Quận Gò Vấp</option>
              </select>
            </div>
            <div class="input-field">
              <label>
                Xã / Phường <span className="text-danger"> *</span>
              </label>
              <select
                onChange={handleChangeSelect}
                value={form.xaPhuong}
                name="xaPhuong"
              >
                <option value="" selected>
                  Chọn
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="input-field input-fields">
              <label>
                Đường / Số Nhà <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="duongSoNha"
                onChange={handleChange}
                value={form.duongSoNha}
              />
            </div>
          </div>
        </div>
        <div className="details personal">
          <span className="title">Thông tin liên hệ</span>
          <div className="fields">
            <div class="input-field">
              <label>
                Giới tính <span className="text-danger"> *</span>
              </label>
              <select
                onChange={handleChangeSelect}
                value={form.gioiTinh}
                name="gioiTinh"
              >
                <option value="" selected>
                  Chọn
                </option>
                <option value="nam">Nam</option>
                <option value="nu">Nữ</option>
                <option value="khac">Khác</option>
              </select>
            </div>
            <div class="input-field">
              <label>
                Số điện thoại <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="soDt"
                onChange={handleChange}
                value={form.soDt}
              />
            </div>
            <div class="input-field">
              <label>Email</label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div class="input-field">
              <label>Facebook</label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="facebook"
                onChange={handleChange}
                value={form.facebook}
              />
            </div>
            <div class="input-field">
              <label>Zalo</label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="zalo"
                onChange={handleChange}
                value={form.zalo}
              />
            </div>
            <div class="input-field"></div>
          </div>
        </div>
        <div className="details personal">
          <span className="title">Người thân</span>
          <div className="fields">
            <div class="input-field">
              <label>
                Số điện thoại <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="soDtNT"
                onChange={handleChange}
                value={form.soDtNT}
              />
            </div>
            <div class="input-field">
              <label>Email</label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="emailNT"
                onChange={handleChange}
                value={form.emailNT}
              />
            </div>
            <div class="input-field">
              <label>Facebook</label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="fbNT"
                onChange={handleChange}
                value={form.fbNT}
              />
            </div>
          </div>
        </div>
        <div className="details personal">
          <span className="title">Kỹ năng</span>
          <div className="fields">
            <div class="input-field">
              <label>Tài lẻ</label>
              <select
                onChange={handleChangeSelect}
                value={form.taiLe}
                name="taiLe"
              >
                <option value="" selected>
                  Chọn
                </option>
                <option>Hàn</option>
                <option>Điện</option>
                <option>Thợ xây</option>
                <option>Nấu ăn</option>
                <option>Ca hát</option>
              </select>
            </div>
          </div>
        </div>
        <div className="details detail_healthy">
          <span className="title">Sức khỏe</span>
          <div className="fields">
            <div class="input-field">
              <label>
                Chiều cao <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="chieuCao"
                onChange={handleChange}
                value={form.chieuCao}
              />
            </div>
            <div class="input-field">
              <label>
                Cân nặng <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="canNang"
                onChange={handleChange}
                value={form.canNang}
              />
            </div>
            <div className="input-field input-fields">
              <label>Dị tật ngoại hình </label>
              <input
                type="text"
                placeHolder="Nhập thông tin"
                name="diTat"
                onChange={handleChange}
                value={form.diTat}
              />
            </div>
          </div>
        </div>
        <div className="details detail_enjoy">
          <span className="title">Sở thích</span>
          <div className="fields">
            <div class="input-field">
              <label>Xem phim</label>
              <select
                onChange={handleChangeSelect}
                value={form.xemPhim}
                name="xemPhim"
              >
                <option disabled selected>
                  Quốc gia / Thể loại
                </option>
                <option>Mỹ</option>
                <option>Anh</option>
                <option>Pháp</option>
                <option>Việt Nam</option>
              </select>
            </div>
            <div class="input-field">
              <label>Nghe nhạc</label>
              <select
                onChange={handleChangeSelect}
                value={form.ngheNhac}
                name="ngheNhac"
              >
                <option disabled selected>
                  Chọn
                </option>
                <option>Quê hương</option>
                <option>Sôi động</option>
                <option>Thính phòng</option>
                <option>Khác</option>
              </select>
            </div>
            <div class="input-field">
              <label>Đọc sách</label>
              <select
                onChange={handleChangeSelect}
                value={form.docSach}
                name="docSach"
              >
                <option disabled selected>
                  Chọn
                </option>
                <option>Tiểu thuyết</option>
                <option>Kinh doanh</option>
                <option>Nấu ăn</option>
              </select>
            </div>
            <div class="input-field">
              <label>Thể thao</label>
              <select
                onChange={handleChangeSelect}
                value={form.theThao}
                name="theThao"
              >
                <option disabled selected>
                  Chọn
                </option>
                <option>Đá bóng</option>
                <option>Tenis</option>
                <option>Cầu lông</option>
              </select>
            </div>
          </div>
        </div>
        <div className="citizenship">
          <span className="title">Ảnh CCCD</span>
          <div className="citizenship-img">
            <div className="img-profile">
              {form.Image_Up ? (
                <img src={form.Image_Up} alt="" className="img-bg" />
              ) : (
                <img src={up} alt="" className="img-bg" />
              )}
              <label htmlFor="icon-button-file-up">
                <i class="fa fa-camera text-dark"></i>Mặt Trước
              </label>
              <input
                style={{ display: "none" }}
                id="icon-button-file-up"
                type="file"
                name="Image_Up"
                onChange={handlePostChangeUp}
              />
            </div>
            <div className="img-profile">
              {form.Image_Down ? (
                <img src={form.Image_Down} alt="" className="img-bg" />
              ) : (
                <img src={down} alt="" className="img-bg" />
              )}
              <label htmlFor="icon-button-file-down">
                <i class="fa fa-camera text-dark"></i>Mặt Sau
              </label>
              <input
                style={{ display: "none" }}
                id="icon-button-file-down"
                type="file"
                name="Image_Down"
                onChange={handlePostChangeDown}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn_update">
            <span className="btnText" onClick={handleSubmitProfile}>
              Cập nhật
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
