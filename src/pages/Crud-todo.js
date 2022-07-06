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
  get_product,
  update_product,
} from "../redux/action/product";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "../redux/constant";
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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, title, description, status, start_date, end_date) {
  return { id, title, description, status, start_date, end_date };
}

const rows = [createData(1, "Phone", 6.0, 24, 4.0)];

export default function CrudTodo() {
  const form = useForm({
    defaultValues: {
      keyword: null,
    },
  });
  const dataSignin = localStorage.getItem("login");
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const data = useSelector((state) => state.reducers.data_product);
  const [age, setAge] = React.useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState("10");

  useEffect(() => {
    if (!dataSignin) {
      navigator("/signin");
      Swal.fire({
        title: "",
        html: `<span style="color:red">Ban Chua Dang Nhap</span>`,
        icon: "error",
        confirmButtonText: "Xác Nhận",
      });
    }
  }, [dataSignin]);

  useEffect(() => {
    dispatch(get_product());
  }, []);

  useEffect(() => {
    form.reset({
      keyword: form.keyword,
    });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleDelete = (id) => {
    setLoadingDelete(true);
    dispatch(delete_product(id));
    setLoadingDelete(false);
  };

  const handleUpdate = (id) => {
    //setLoadingUpdate(true);
    dispatch(createAction(UPDATE_PRODUCT, true));
    //setLoadingUpdate(false);
  };

  const handleCreate = () => {
    dispatch(createAction(CREATE_PRODUCT, true));
  };

  const handleSearch = () => {};

  const handleSubmit = (values) => {
    console.log(values);
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box>
      <Box sx={{ width: "70%", margin: "auto", marginTop: "10%" }}>
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
              />
              <LoadingButton
                size="small"
                color="success"
                type="submit"
                variant="contained"
                flexShrink={0}
              >
                Search
              </LoadingButton>
            </Box>
            <LoadingButton
              size="small"
              color="primary"
              type="button"
              variant="contained"
              onClick={() => handleCreate()}
            >
              Create
            </LoadingButton>
          </Grid>
        </form>
        <Box>
          <FormControl sx={{ m: 1, width: "10%" }}>
            <InputLabel id="demo-simple-select-helper-label">Filter</InputLabel>
            <Select
              variant="standard"
              sx={{ width: "100%" }}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <TableContainer component={Paper} sx={{ width: "70%", margin: "auto" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Start Date</StyledTableCell>
              <StyledTableCell align="left">End Date</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
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
                <StyledTableCell align="left">{item.status}</StyledTableCell>
                <StyledTableCell align="left">
                  {item.start_date}
                </StyledTableCell>
                <StyledTableCell align="left">{item.end_date}</StyledTableCell>
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
          sx={{ mt: 2 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </TableContainer>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          control={form.control}
          name={"text"}
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="standard"
              onChange={onChange}
              value={value}
              placeholder="text"
              type={'text'}
            />
          )}
        />
      </form>
      <CreateProduct />
    </Box>
  );
}
