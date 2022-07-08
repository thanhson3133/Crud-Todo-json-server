import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CREATE_PRODUCT } from "../../redux/constant";
import { createAction } from "../../redux/action/createAction";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDispatch, useSelector } from "react-redux";
import {
  Autocomplete,
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import InputField from "../InputField";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { create_product } from "../../redux/action/product";
import { now } from "lodash";
import { useState } from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { date, dateFormat } from "../../helper/dateformat";

const statusOptions = [{ label: "Processing" }, { label: "Done" }];


const schema = yup
  .object({
    title: yup.string().nullable().required("Please enter title"),
    status: yup.string().nullable().required("Please enter status"),
    description: yup.string().nullable().required("Please enter description"),
    start_date: yup.string().nullable().required("Please enter start date"),
    end_date: yup.string().nullable().required("Please enter end date"),
  })
  .required();

export default function CreateProduct() {

  const form = useForm({
    defaultValues: {
      title: null,
      status: null,
      description: null,
      start_date: null,
      end_date: null,
    },
    resolver: yupResolver(schema),
  });
  const [valueEndDate, setValueEndDate] = useState(dateFormat);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const isCreates = useSelector((state) => state.reducers.isCreate);
  const dispatch = useDispatch();

  useEffect(() => {
    form.reset({
      title: form.title,
      status: form.status,
      description: form.description,
      start_date: dateFormat,
      end_date: valueEndDate,
    });
  }, []);

  const handleClose = () => {
    dispatch(createAction(CREATE_PRODUCT, false));
  };

  const handleChangeEndDate = (newValues) => {
    setValueEndDate(newValues);
  };
  
  const onSubmit = (values) => {
    console.log("values", values);
    dispatch(create_product(values, page, limit));
  };

  return (
    <div>
      <Dialog
        open={isCreates}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Create Product</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 3 }}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      name={"title"}
                      form={form}
                      label={"Title"}
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      name={"description"}
                      form={form}
                      label={"Description"}
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name={"status"}
                      control={form.control}
                      render={({
                        field: { onChange, value },
                        fieldState: { invalid, isTouched, isDirty, error },
                      }) => {
                        return (
                          <Autocomplete
                            multiple={false}
                            id="status-selection"
                            variant="standard"
                            sx={{ mb: 2 }}
                            options={statusOptions}
                            getOptionLabel={statusOptions.label}
                            onChange={(event, newValue) => {
                              onChange(newValue.label);
                            }}
                            defaultValue={form.gender}
                            renderInput={(params) => {
                              return (
                                <TextField
                                  sx={{ mb: 2 }}
                                  {...params}
                                  variant="standard"
                                  label="Select status"
                                  error={invalid}
                                  helperText={error?.message || ""}
                                />
                              );
                            }}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      disabled
                      name={"start_date"}
                      form={form}
                      label={"Start Date"}
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                            minDate={now()}
                            name={"end_date"}
                            label="End Date"
                            inputFormat="MM/dd/yyyy"
                            value={valueEndDate}
                            onChange={handleChangeEndDate}
                            renderInput={(params) => <TextField {...params} variant='standard'/>}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
