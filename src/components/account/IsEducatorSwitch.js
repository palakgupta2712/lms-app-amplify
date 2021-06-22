import React, { useContext } from "react";
import { Button, Grid, Switch } from "@material-ui/core";
import { UserContext } from "../../context/UserContext";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../models";
import Label from "./Label";
import MessageAlert from "./MessageAlert";

function IsEducatorSwitch() {
  const user = useContext(UserContext);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [state, setState] = React.useState({
    checkedA: user.isEducator,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const original = await DataStore.query(User, user.id);
    const data = await DataStore.save(
      User.copyOf(original, (updated) => {
        updated.isEducator = state.checkedA;
      })
    );
    if (data) setOpen(true);
  }
  return (
    <React.Fragment>
      <Grid container style={{ marginBottom: "10px", padding: "5px" }}>
        <Grid item>
          <Label text="Become an Educator?" />
        </Grid>
        <Grid item xs></Grid>
        <Grid item>
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </Grid>
      </Grid>
      {user.isEducator === state.checkedA ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled
        >
          Save
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      )}
      <MessageAlert handleClose={handleClose} open={open} />
    </React.Fragment>
  );
}

export default IsEducatorSwitch;
