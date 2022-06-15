import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteDish, getDishLish, updateDish } from "../../redux/action/user";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import image from "../../assets/img/Images.png";
const statusCode = [
  { id: 0, value: "Tất Cả", isAll: true },
  { id: 1, value: "Hoạt Động", isAll: false },
  { id: 2, value: "Tạm Ngưng", isAll: false },
];
export default function DishLish() {
  const itemDish = useSelector((state) => state.reducers.setSearch);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize] = useState(10);
  const [form, setForm] = useState({
    tenMon: "",
    trangThai: 0,
  });
  const dispatch = useDispatch();
  const handleChangePage = (e, newPage) => {
    setPageIndex(newPage);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleCancelSearch = () => {};
  const handleSelect = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleDeleteDish = (id) => {
    console.log(id);
    // dispatch(deleteDish(id))
  };
  const handleUpdateDish = (id) => {
    console.log(id);
    // dispatch(updateDish(id))
  };
  useEffect(() => {
    dispatch(getDishLish(form.tenMon, form.trangThai, pageIndex, pageSize));
  }, [dispatch, form.tenMon, form.trangThai, pageIndex, pageSize]);
  const handleGetDishList = () => {
    return itemDish.data?.map((item, key) => (
      <TableRow key={item.id}>
        <TableCell align="left">{item.loaiMonStr}</TableCell>
        <TableCell align="left">{item.ten}</TableCell>
        <TableCell align="left">
          {/* <img src={item.url} alt="" /> */}
          <img src={image} alt="" />
        </TableCell>
        <TableCell align="left">{item.statusStr}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            className="mr-1"
            onClick={() => handleUpdateDish(item.id)}
          >
            Cập Nhật
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDeleteDish(item.id)}
            startIcon={<DeleteIcon />}
          >
            Xóa
          </Button>
        </TableCell>
      </TableRow>
    ));
  };
  return (
    <div className="dishList">
      <TableContainer component={Paper}>
        <div className="dishHeader">
          <div className="dishText">
            <h3>Danh sách món ăn</h3>
          </div>
          <div className="form-search d-flex">
            <div className="form-input d-flex mr-3">
              <input
                type="text"
                name="tenMon"
                placeholder="Tìm kiếm tên món ăn"
                onChange={handleSearch}
                value={form.tenMon}
              />
            </div>
            <select
              onChange={handleSelect}
              value={form.trangThai}
              name="trangThai"
              id=""
              className="mr-3"
            >
              {statusCode.map((item, index) => {
                return (
                  <option id={item.id} value={item.id}>
                    {item.value}
                  </option>
                );
              })}
            </select>
            {/* {isSearch ? (
                  <button
                    className="btn btn-danger"
                    onClick={handleCancelSearch}
                  >
                    <span>Hủy</span>
                  </button>
                ) : null} */}
            <button className="btn btn-success ml-1" onClick={handleSearch}>
              <i class="fa fa-search"></i>
              <span>Tìm kiếm</span>
            </button>
          </div>
          <div>
            <Button variant="outlined" color="success">
              Thêm Món Ăn
            </Button>
          </div>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Loại Món</TableCell>
              <TableCell align="left">Tên Món</TableCell>
              <TableCell align="left">Hình Ảnh</TableCell>
              <TableCell align="left">Trạng Thái</TableCell>
              <TableCell align="left">Chức Năng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{handleGetDishList()}</TableBody>
        </Table>
        <Stack spacing={2} className="pagination-form">
          <Pagination
            count={Math.ceil(itemDish.totalRecord / 10)}
            page={pageIndex}
            onChange={handleChangePage}
            className="pagination"
            shape="rounded"
          />
        </Stack>
      </TableContainer>
    </div>
  );
}
