import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CREATE_PRODUCT } from "../../redux/constant";
import { createAction } from "../../redux/action/createAction";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import InputField from "../InputField";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { create_product } from "../../redux/action/product";
import { now } from "lodash";
import { useState } from "react";

let today = new Date(),
  date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

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

  const isCreates = useSelector((state) => state.reducers.isCreate);
  console.log("iscreate", isCreates);

  const dispatch = useDispatch();
  useEffect(() => {
    form.reset({
      title: form.title,
      status: form.status,
      description: form.description,
      start_date: date,
      end_date: form.end_date,
    });
  }, []);

  const handleClose = () => {
    dispatch(createAction(CREATE_PRODUCT, false));
  };
  console.log("now", now);
  const onSubmit = (values) => {
    console.log(values);
    dispatch(create_product(values));
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
                    <InputField
                      name={"status"}
                      form={form}
                      label={"Status"}
                      size="small"
                      sx={{ mb: 2 }}
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
                  <Grid item xs={12} sm={12}>
                    <InputField
                      name={"end_date"}
                      form={form}
                      label={"End Date"}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
