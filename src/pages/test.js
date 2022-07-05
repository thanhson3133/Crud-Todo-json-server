import React, { useEffect } from "react";
import InputField from "../component/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { Grid, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
const selectGender = [{ gender: "Male" }, { gender: "Female" }];

const schema = yup
  .object({
    name: yup.string().nullable().required("Please enter name"),
    username: yup.string().nullable().required("Please enter username"),
    password: yup.string().nullable().required("Please enter password"),
    confirm_password: yup
      .string()
      .nullable()
      .required("Please enter confirm-password"),
    address: yup.string().nullable().required("Please enter address"),
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
    },
    resolver: yupResolver(schema),
  });

  const [value, setValue] = React.useState(new Date("2022-07-05T21:11:54"));
  const [gender, setGender] = React.useState("");

  useEffect(() => {
    form.reset({
      name: form.name,
      username: form.username,
      password: form.password,
      confirm_password: form.confirm_password,
      address: form.address,
    });
  }, []);

  const onSubmit = (values) => {
    console.log("values", values);
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
       {/*<Grid item xs={12}>
                  <SelectField
                    name="gender"
                    label="Selected Gender"
                    form={form}
                    options={selectGender}
                    multiple={false}
                    getOptionLabel={(item) =>
                      [item?.gender]
                    }
                    sx={{ width: "auto", mb: 6 }}
                  />
                </Grid>*/}
              {/*<Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        label="BirthDay"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Grid>*/}
    </ThemeProvider>
    
  );
}
