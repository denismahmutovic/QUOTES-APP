import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import QuoteTag from "../Quotes/QuoteTag";
import { TokenContext } from "../Context/UserContext";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Citati</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        onChange={handleChange}
      >
        <MenuItem value="">
          <QuoteTag />
        </MenuItem>
      </Select>
    </FormControl>
  );
}
