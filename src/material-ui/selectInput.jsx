import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme, props) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      // width: "35ch",
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles("hello");
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label={props.drpoDownData.InputName}
          value={currency}
          onChange={handleChange}
          helperText={props.drpoDownData.helperText}
          variant="outlined"
          style={{ width: props.drpoDownData.width }}
        >
          {props.drpoDownData.dropdown.map((option) => (
            <MenuItem key={option.cNmae} value={option.cName}>
              {option.cName}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
