import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput(props) {
  return (
    <TextField
      sx={{ mb: "8px" }}
      placeholder="Restaurante"
      variant="outlined"
      id="input-with-icon-textfield"
      onClick={props.onClick}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
