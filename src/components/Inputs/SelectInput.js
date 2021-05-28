import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme, props) => ({
  formControl: {
    margin: theme.spacing(2),
    width: (props) => props.text.length * 10 + 10,
    minWidth: "240px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectInput(props) {
  const classes = useStyles(props);

  const { text, options, value, changeValue } = props;

  const allOptions = options.map((aOption, index) => {
    return (
      <MenuItem key={index} value={aOption}>
        {aOption}
      </MenuItem>
    );
  });

  return (
    <FormControl variant="outlined" className={classes.formControl} fullWidth>
      <InputLabel id="demo-simple-select-outlined-label">{text}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        required
        value={value}
        onChange={changeValue}
        label={text}
        fullWidth
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {allOptions}
      </Select>
    </FormControl>
  );
}

export default SelectInput;
