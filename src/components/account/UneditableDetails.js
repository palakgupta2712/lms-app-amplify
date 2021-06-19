import React, { useContext } from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import { UserContext } from "../../context/UserContext";
import Label from "./Label";

function UneditableDetails() {
  const user = useContext(UserContext);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Label text="Display Name" />
          <TextField
            defaultValue={user.name}
            variant="outlined"
            size="small"
            className={classes.textField}
            disabled
          />
        </Grid>
      </Grid>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Label text="Email" />
          <TextField
            defaultValue={user.email}
            variant="outlined"
            size="small"
            disabled
            className={classes.textField}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default UneditableDetails;
const useStyles = makeStyles((theme) => ({
  grid: { marginBottom: "10px", padding: "5px" },
  textField: {
    width: "100% ",
    [theme.breakpoints.up("sm")]: {
      width: "75% ",
    },
  },
}));
