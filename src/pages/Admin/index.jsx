import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../redux/action/createAction";
import { Button } from "@mui/material";
import EditProduct from "../../component/Admin/ProductManager/Modal/updateProduct";
import {
  ADDPRODUCT,
  ADDUSER,
  DETAILPRODUCT,
  DETAILUSER,
  UPDATEPRODUCT,
  UPDATEUSER,
} from "../../redux/constant";
import AddProduct from "../../component/Admin/ProductManager/Modal/addProduct";
import DetailProduct from "../../component/Admin/ProductManager/Modal/detailProduct";
import UpDateUser from "../../component/Admin/UserManager/updateUser";
import AddUser from "../../component/Admin/UserManager/addUser";
import DetailUser from "../../component/Admin/UserManager/detailUser";
import DishLish from "../../component/DishList";
export default function Admin() {
  const dispatch = useDispatch();

  const handleUpdateProduct = () => {
    dispatch(createAction(UPDATEPRODUCT, true));
  };

  const openDetailProduct = () => {
    dispatch(createAction(DETAILPRODUCT, true));
  };

  const handleAddProduct = () => {
    dispatch(createAction(ADDPRODUCT, true));
  };

  const handleUpdateUser = () => {
    dispatch(createAction(UPDATEUSER, true));
  };

  const openDetailUser = () => {
    dispatch(createAction(DETAILUSER, true));
  };

  const handleAddUser = () => {
    dispatch(createAction(ADDUSER, true));
  };
  return (
    <body className="body_admin">
      <input type="checkbox" name="" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <NavLink className="nav-link-logo" to="/">
            <h1>
              <span className="lab la-accusoft"></span> <span>VitaOrga</span>
            </h1>
          </NavLink>
        </div>
        <div className="sidebar-menu">
          <ul className="nav">
            <li className="active">
              <input type="checkbox" id="nav_checkbox" />
              <a className="a_active">
                <label htmlFor="nav_checkbox">
                  <span className="las la-igloo"></span>{" "}
                  <span>
                    Danh Mục <i class="fa fa-angle-down"></i>
                  </span>
                </label>
              </a>
              <ul className="nav nav__itemFirst ">
                <li className="mt-2">
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span class="fa fa-map-marker-alt"></span>
                    <span>Khu Vực</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <span class="fa fa-street-view"></span>
                    <span>Nhân Viên Khu Vực</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span className="las la-igloo"></span>
                    <span>Bàn</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span class="fa fa-clipboard-list"></span>
                    <span>Bảng Giá</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span class="fa fa-carrot"></span>
                    <span>Nguyên Liệu</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-dish-tab"
                    data-toggle="pill"
                    href="#v-pills-dish"
                    role="tab"
                    aria-controls="v-pills-dish"
                    aria-selected="false"
                  >
                    <span class="fa fa-concierge-bell"></span>
                    <span>Món</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span class="fa fa-sticky-note"></span>
                    <span>Ghi Chú</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span class="fa fa-address-card"></span>
                    <span>Thẻ Khách Hàng</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" id="nav_checkboxSecond" />
              <a className="a_activeSecond">
                <label htmlFor="nav_checkboxSecond">
                  <span className="las la-users"></span>{" "}
                  <span>
                    Kho <i class="fa fa-angle-down"></i>
                  </span>
                </label>
              </a>
              <ul className="nav nav__itemSecond">
                <li className="mt-2">
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span class="fa fa-tasks"></span>
                    <span>Yêu Cầu</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" id="nav_checkboxThird" />
              <a className="a_activeThird">
                <label htmlFor="nav_checkboxThird">
                  <span class="fa fa-cogs"></span>
                  <span>
                    Quản Lý <i class="fa fa-angle-down"></i>
                  </span>
                </label>
              </a>
              <ul className="nav nav__itemThird">
                <li className="mt-2">
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span className="las la-igloo"></span>
                    <span>Tiền Mặt</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span className="las la-igloo"></span>
                    <span>Yêu Cầu Trả Tiền Mặt</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span className="las la-igloo"></span>
                    <span>Hóa Đơn</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span className="las la-igloo"></span>
                    <span>Kho Chế Biến</span>
                  </a>
                </li>
                <li>
                  <a
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span className="las la-igloo"></span>
                    <span>Hủy Món</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h2>
            <label for="nav-toggle">
              <span className="las la-bars"> </span>{" "}
            </label>{" "}
            Dashboard
          </h2>
          <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="search" placeHolder="Search here" />
          </div>
          <div className="user-wrapper">
            <span className="las la-user-circle"></span>
            <div>
              <h4>John Doe</h4>
              <small>Super Admin</small>
            </div>
          </div>
        </header>
        <main>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div className="recent-grid">
                <div className="projects">
                  <div className="card">
                    <div className="card-header">
                      <h2>Recent Product</h2>
                      <button onClick={() => handleAddProduct()}>
                        Add Product
                        <span className="las la-arrow-right"></span>
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table width="100%">
                          <thead>
                            <tr>
                              <td>ID</td>
                              <td>Name</td>
                              <td>Date</td>
                              <td>Status</td>
                              <td>Check</td>
                              <td>Action</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>FrontEnd</td>
                              <td>05/05/2022</td>
                              <td>
                                <span className="status purple"></span>
                              </td>
                              <td>
                                <input type="checkbox" name="" id="" />
                              </td>
                              <td className="table-action">
                                <i
                                  class="las la-edit"
                                  onClick={() => handleUpdateProduct()}
                                ></i>
                                <i
                                  class="las la-info-circle"
                                  onClick={() => {
                                    openDetailProduct();
                                  }}
                                ></i>
                                <i class="las la-trash"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>BackEnd</td>
                              <td>05/05/2022</td>

                              <td>
                                <span className="status pink"></span>
                              </td>
                              <td>
                                <input type="checkbox" name="" id="" />
                              </td>
                              <td className="table-action">
                                <i
                                  class="las la-edit"
                                  onClick={() => handleUpdateProduct()}
                                ></i>
                                <i
                                  class="las la-info-circle"
                                  onClick={() => {
                                    openDetailProduct();
                                  }}
                                ></i>
                                <i class="las la-trash"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Mobile</td>
                              <td>05/05/2022</td>

                              <td>
                                <span className="status orange"></span>
                              </td>
                              <td>
                                <input type="checkbox" name="" id="" />
                              </td>
                              <td className="table-action">
                                <i
                                  class="las la-edit"
                                  onClick={() => handleUpdateProduct()}
                                ></i>
                                <i
                                  class="las la-info-circle"
                                  onClick={() => {
                                    openDetailProduct();
                                  }}
                                ></i>
                                <i class="las la-trash"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>FrontEnd</td>
                              <td>05/05/2022</td>

                              <td>
                                <span className="status purple"></span>
                              </td>
                              <td>
                                <input type="checkbox" name="" id="" />
                              </td>
                              <td className="table-action">
                                <i
                                  class="las la-edit"
                                  onClick={() => handleUpdateProduct()}
                                ></i>
                                <i
                                  class="las la-info-circle"
                                  onClick={() => {
                                    openDetailProduct();
                                  }}
                                ></i>
                                <i class="las la-trash"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>BackEnd</td>
                              <td>05/05/2022</td>
                              <td>
                                <span className="status pink"></span>
                              </td>
                              <td>
                                <input type="checkbox" name="" id="" />
                              </td>
                              <td className="table-action">
                                <i
                                  class="las la-edit"
                                  onClick={() => handleUpdateProduct()}
                                ></i>
                                <i
                                  class="las la-info-circle"
                                  onClick={() => {
                                    openDetailProduct();
                                  }}
                                ></i>
                                <i class="las la-trash"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Mobile</td>
                              <td>05/05/2022</td>
                              <td>
                                <span className="status orange"></span>
                              </td>
                              <td>
                                <input type="checkbox" name="" id="" />
                              </td>
                              <td className="table-action">
                                <i
                                  class="las la-edit"
                                  onClick={() => handleUpdateProduct()}
                                ></i>
                                <i
                                  class="las la-info-circle"
                                  onClick={() => {
                                    openDetailProduct();
                                  }}
                                ></i>
                                <i class="las la-trash"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade "
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <div className="cards">
                <div className="card-single">
                  <div>
                    <h1>79</h1>
                    <span>Project</span>
                  </div>
                  <div>
                    <span className="las la-clipboard"> </span>
                  </div>
                </div>
                <div className="card-single">
                  <div>
                    <h1>123</h1>
                    <span>Orders</span>
                  </div>
                  <div>
                    <span className="las la-shopping-bag"> </span>
                  </div>
                </div>
                <div className="card-single">
                  <div>
                    <h1>$54</h1>
                    <span>Income</span>
                  </div>
                  <div>
                    <span className="lab la-google-wallet"> </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade "
              id="v-pills-dish"
              role="tabpanel"
              aria-labelledby="v-pills-dish-tab"
            >
              <DishLish />
            </div>
          </div>
        </main>
      </div>
      <EditProduct />
      <AddProduct />
      <DetailProduct />
      {/*  */}
      <UpDateUser />
      <AddUser />
      <DetailUser />
    </body>
  );
}
