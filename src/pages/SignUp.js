import React, { useEffect, useState } from "react";
import InputField from "../component/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import { now } from "lodash";
import { useDispatch } from "react-redux";
import { createAction } from "../redux/action/createAction";
import { SIGNUP } from "../redux/constant";
import { signUp } from "../redux/action/user";
const selectGender = [{ gender: "Male" }, { gender: "Female" }];
const schema = yup
  .object({
    name: yup.string().nullable().required("Please enter name"),
    username: yup.string().nullable().required("Please enter username"),
    password: yup.string().nullable().required("Please enter password"),
    confirm_password: yup
      .string()
      .nullable()
      .required("Please enter confirm password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    address: yup.string().nullable().required("Please enter address"),
    gender: yup.string().nullable().required("Required select gender"),
    //dayOfBirth: yup
    //  .date()
    //  .required("Please enter date"),
  })
  .required();

const theme = createTheme();

export default function MUI() {
  const form = useForm({
    defaultValues: {
      name: null,
      username: null,
      password: null,
      confirm_password: null,
      address: null,
      gender: null,
      dayOfBirth: null,
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const [valueDayOfBirth, setValueDayOfBirth] = useState(
    new Date("MM/dd/yyyy")
  );
  const [genderOption, setGenderOption] = useState("");
  console.log("genderOption", genderOption);
  useEffect(() => {
    form.reset({
      name: form.name,
      username: form.username,
      password: form.password,
      confirm_password: form.confirm_password,
      address: form.address,
      gender: genderOption,
      dayOfBirth: valueDayOfBirth,
    });
  }, []);
  const handleChangeGender = (event) => {
    setGenderOption(event.target.value);
  };
  const handleChangeDayOfBirth = (newValues) => {
    console.log("newValues", newValues);
    setValueDayOfBirth(newValues);
  };

  const onSubmit = (values) => {
    console.log("values", values);
    dispatch(signUp(values));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      name={"name"}
                      form={form}
                      label={"Name"}
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      name={"username"}
                      form={form}
                      label={"UserName"}
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      name={"password"}
                      form={form}
                      label={"Password"}
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      name={"confirm_password"}
                      form={form}
                      label={"Confirm-Password"}
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <InputField
                      name={"address"}
                      form={form}
                      label={"Address"}
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      variant="standard"
                      fullWidth
                      sx={{ mb: 2 }}
                      labelId="gender"
                      id="gender"
                      name="gender"
                      value={genderOption}
                      onChange={handleChangeGender}
                      label="Gender"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <DesktopDatePicker
                          variant="standard"
                          name={"dayOfBirth"}
                          label="Birthday"
                          inputFormat="MM/dd/yyyy"
                          value={valueDayOfBirth}
                          onChange={handleChangeDayOfBirth}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </Grid>
                  
                </Grid>
                <LoadingButton
                  type={"submit"}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </LoadingButton>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
