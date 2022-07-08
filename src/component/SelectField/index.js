import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export default function SelectField({form, id, label, multiple = false, name, disabeled = false, options = []}) {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({
        field: { onChange, value },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => {
        return (
          <Autocomplete
            multiple={multiple}
            id={id}
            disabeled={disabeled}
            options={options}
            value={value}
            getOptionLabel={options.label}
            onChange={(event, newValue) => {
              onChange(newValue.label);
            }}
            defaultValue={form.gender}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  variant="standard"
                  label={label}
                  error={invalid}
                  helperText={error?.message || ""}
                />
              );
            }}
          />
        );
      }}
    />
  );
}
