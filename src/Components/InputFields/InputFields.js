import React from "react";
import { TextField } from "@mui/material";

const InputField = ({
  name,
  label,
  type = "text",
  value,
  onChange,
  error = null,
  helperText = "",
  ...other
}) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      {...other}
    />
  );
};

export default InputField;
