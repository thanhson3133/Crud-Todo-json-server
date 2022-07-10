import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { Box } from "@mui/system";
import {
  create_product,
  delete_product,
  filter_status,
  get_product,
  search_product,
  sort_product,
  update_product,
} from "../redux/action/product";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import {
  CREATE_PRODUCT,
  DOMAIN,
  SEARCH_PRODUCT,
  SORT_PRODUCT,
  UPDATE_PRODUCT,
} from "../redux/constant";
import { createAction } from "../redux/action/createAction";
import InputField from "../component/InputField";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CreateProduct from "../component/Create";
import axios from "axios";
import UpdateProduct from "../component/Update";
import Loading from "../component/Loading";
import Modal from "../component/Modal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CrudTodo() {
  const sortOptions = [
    "title",
    "status",
    "description",
    "start_date",
    "end_date",
  ];
  const filterStatus = ["Processing", "Done"];

  const form = useForm({
    defaultValues: {
      keyword: null,
    },
  });

  const [loading, setLoading] = useState(false);
  const dataSignin = localStorage.getItem("login");
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [sortValue, setSortValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [valueUpdate, setValueUpdate] = useState("");
  const [dataLength, setDataLength] = useState([]);

  /* Effect Get All Products */
  useEffect(() => {
    getProduct();
  }, []);

  /* Effect Loading Page */
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  /* Effect Check Login Redirect */
  useEffect(() => {
    if (!dataSignin) {
      navigator("/signin");
      Swal.fire({
        title: "",
        html: `<span style="color:red">Please Login</span>`,
        icon: "error",
        confirmButtonText: "Xác Nhận",
      });
    }
  }, [dataSignin]);

  /* Effect Get Products Pagination */
  useEffect(() => {
    dispatch(get_product(page, limit));
  }, [dispatch, page, limit]);
  const data = useSelector((state) => state.reducers.data_product);

  /* Effect Update Form */
  useEffect(() => {
    form.reset({
      keyword: form.keyword,
    });
  }, [form]);

  const getProduct = async () => {
    let data = await axios.get(`${DOMAIN}/Products`);
    setDataLength(data.data.length);
  };

  const handleChangePage = (e, newPage) => {
    console.log("newPage", newPage);
    setPage(newPage);
  };

  const handleDelete = (id, page, limit) => {
    dispatch(delete_product(id, page, limit));
  };

  const handleUpdate = async (id) => {
    dispatch(createAction(UPDATE_PRODUCT, true));
    let dataUpdate = await axios.get(`${DOMAIN}/Products/${id}`);
    setValueUpdate(dataUpdate.data);
  };

  const handleCreate = () => {
    dispatch(createAction(CREATE_PRODUCT, true));
  };

  const handleSearch = () => {
    dispatch(search_product(keyword, page, limit));
  };

  const handleSort = (e) => {
    let valueSort = e.target.value;
    setSortValue(valueSort);
    dispatch(sort_product(valueSort, page, limit));
  };

  const handleFilterStatus = (e) => {
    let valueFilter = e.target.value;
    setStatusValue(valueFilter);
    dispatch(filter_status(valueFilter, page, limit));
  };

  const handleLogOut = () => {
    localStorage.removeItem("login");
    navigator("/signin");
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            background: "#CFD2CF",
            width: "80%",
            height: "45rem",
            margin: "auto",
            mt: "9%",
            mb: "2%",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ width: "70%", margin: "auto" }}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <Grid
                item
                xs={12}
                sm={12}
                display={"flex"}
                alignItems={"center"}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Typography variant={"h6"}>CRUD</Typography>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  width={"50%"}
                  justifyContent={"space-between"}
                >
                  <InputField
                    name={"keyword"}
                    form={form}
                    label={"Search"}
                    size="small"
                    sx={{ mb: 2, mr: 2 }}
                    flexShrink={0}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <LoadingButton
                    size="small"
                    color="success"
                    type="button"
                    variant="contained"
                    flexShrink={0}
                    onClick={() => handleSearch()}
                  >
                    Search
                  </LoadingButton>
                </Box>
                <LoadingButton
                  size="small"
                  color="primary"
                  type="button"
                  variant="contained"
                  onClick={() => handleLogOut()}
                >
                  LogOut
                </LoadingButton>
              </Grid>
            </form>
            <Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <FormControl variant="standard" sx={{ m: 1, width: "20%" }}>
                  <InputLabel id="sort-label">Sort</InputLabel>
                  <Select
                    labelId="sort-label"
                    id="sort"
                    value={sortValue}
                    variant="standard"
                    label="Sort"
                    onChange={handleSort}
                  >
                    {sortOptions?.map((item, index) => {
                      return (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, width: "20%" }}>
                  <InputLabel id="filter-status-label">
                    Filter-Status
                  </InputLabel>
                  <Select
                    labelId="filter-status-label"
                    id="filter-status"
                    value={statusValue}
                    variant="standard"
                    label="Filter"
                    onChange={handleFilterStatus}
                  >
                    {filterStatus?.map((item, index) => {
                      return (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <TableContainer
            component={Paper}
            sx={{ width: "70%", margin: "auto", marginTop: 2, mb: "2%" }}
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">ID</StyledTableCell>
                  <StyledTableCell align="left">Title</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
                  <StyledTableCell align="left">Status</StyledTableCell>
                  <StyledTableCell align="left">Start Date</StyledTableCell>
                  <StyledTableCell align="left">End Date</StyledTableCell>
                  <StyledTableCell align="center">
                    <Box
                      display={"flex"}
                      justifyContent={"space-around"}
                      alignItems={"center"}
                    >
                      <Typography sx={{ ml: 10 }}>Action</Typography>
                      <LoadingButton
                        sx={{ mr: -1 }}
                        size="small"
                        color="primary"
                        type="button"
                        variant="contained"
                        onClick={() => handleCreate()}
                      >
                        Create
                      </LoadingButton>
                    </Box>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow key={item.name}>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">{item.title}</StyledTableCell>
                    <StyledTableCell align="left">
                      {item.description}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.status}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.start_date}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.end_date}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <LoadingButton
                        sx={{ mr: 2 }}
                        size="small"
                        onClick={() => handleDelete(item.id)}
                        loading={loadingDelete}
                        variant="contained"
                        color="error"
                      >
                        Delete
                      </LoadingButton>
                      <LoadingButton
                        size="small"
                        color="success"
                        onClick={() => handleUpdate(item.id)}
                        loading={loadingUpdate}
                        variant="contained"
                      >
                        Update
                      </LoadingButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
            <Stack
              spacing={2}
              sx={{ mt: 2, mb: 2 }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Pagination
                count={Math.ceil(dataLength / 5)}
                page={page}
                onChange={handleChangePage}
                className="pagination"
                shape="rounded"
              />
            </Stack>
          </TableContainer>
          <CreateProduct />
          <UpdateProduct data={valueUpdate} />
          {/*<Modal data={valueUpdate} />*/}
        </Box>
      )}
    </>
  );
}
