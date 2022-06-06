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
    <body>
      <input type="checkbox" name="" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <NavLink className="nav-link-logo" to="/">
            <h1>
              <span className="lab la-accusoft"></span> <span>VitaOrga</span>
            </h1>
          </NavLink>
        </div>
        <div
          className="sidebar-menu nav nav-pills bg-navy "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <ul className="nav">
            <li className="active">
              <a
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <span className="las la-igloo"></span> <span>Dashboard</span>
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
                <span className="las la-users"></span> <span>Customers</span>
              </a>
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
                              <td >FrontEnd</td>
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
                <div className="custormers">
                  <div className="card">
                    <div className="card-header">
                      <h2>Customer</h2>
                      <button
                        onClick={() => {
                          handleAddUser();
                        }}
                      >
                        Add Customer
                        <span className="las la-arrow-right"></span>
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="customer">
                        <div className="info">
                          <span className="las la-arrow-right"></span>
                          <div>
                            <h4>Lewis S.Cunnigham</h4>
                            <small>CEO Excerpt</small>
                          </div>
                        </div>
                        <div className="contact">
                          <i
                            class="las la-edit"
                            onClick={() => {
                              handleUpdateUser();
                            }}
                          ></i>
                          <i
                            class="las la-exclamation-circle"
                            onClick={() => {
                              openDetailUser();
                            }}
                          ></i>
                          <i class="las la-trash"></i>
                        </div>
                      </div>

                      <div className="customer">
                        <div className="info">
                          <span className="las la-arrow-right"></span>
                          <div>
                            <h4>Lewis S.Cunnigham</h4>
                            <small>CEO Excerpt</small>
                          </div>
                        </div>
                        <div className="contact">
                          <i class="las la-edit"></i>
                          <i class="las la-exclamation-circle"></i>
                          <i class="las la-trash"></i>
                        </div>
                      </div>
                      <div className="customer">
                        <div className="info">
                          <span className="las la-arrow-right"></span>
                          <div>
                            <h4>Lewis S.Cunnigham</h4>
                            <small>CEO Excerpt</small>
                          </div>
                        </div>
                        <div className="contact">
                          <i class="las la-edit"></i>
                          <i class="las la-exclamation-circle"></i>
                          <i class="las la-trash"></i>
                        </div>
                      </div>
                      <div className="customer">
                        <div className="info">
                          <span className="las la-arrow-right"></span>
                          <div>
                            <h4>Lewis S.Cunnigham</h4>
                            <small>CEO Excerpt</small>
                          </div>
                        </div>
                        <div className="contact">
                          <i class="las la-edit"></i>
                          <i class="las la-exclamation-circle"></i>
                          <i class="las la-trash"></i>
                        </div>
                      </div>
                      <div className="customer">
                        <div className="info">
                          <span className="las la-arrow-right"></span>
                          <div>
                            <h4>Lewis S.Cunnigham</h4>
                            <small>CEO Excerpt</small>
                          </div>
                        </div>
                        <div className="contact">
                          <i class="las la-edit"></i>
                          <i class="las la-exclamation-circle"></i>
                          <i class="las la-trash"></i>
                        </div>
                      </div>
                      <div className="customer">
                        <div className="info">
                          <span className="las la-arrow-right"></span>
                          <div>
                            <h4>Lewis S.Cunnigham</h4>
                            <small>CEO Excerpt</small>
                          </div>
                        </div>
                        <div className="contact">
                          <i class="las la-edit"></i>
                          <i class="las la-exclamation-circle"></i>
                          <i class="las la-trash"></i>
                        </div>
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
                    <h1>54</h1>
                    <span>Customers</span>
                  </div>
                  <div>
                    <span className="las la-users"> </span>
                  </div>
                </div>
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
