import React, { useContext } from "react";
import {
  makeStyles,
  Button,
  Container,
  Grid,
  Typography,
  Avatar,
  Box,
  TextField,
  Switch,
} from "@material-ui/core";
import { UserContext } from "../context/UserContext";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../models";

export default function Profile() {
  const classes = useStyles();
  const user = useContext(UserContext);

  const [state, setState] = React.useState({
    checkedA: user.isEducator,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const original = await DataStore.query(User, user.id);
    await DataStore.save(
      User.copyOf(original, (updated) => {
        updated.isEducator = state.checkedA;
      })
    );
    window.location.reload();
  }
  return (
    <div>
      <>
        <Grid container>
          <Container maxWidth="sm" className={classes.container}>
            <p
              style={{ textAlign: "center", fontSize: "20px", padding: "20px" }}
            >
              My Account
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Avatar className={classes.avatar}>{user.name.charAt(0)}</Avatar>
              <div>
                <Typography>{user.name}</Typography>
                <Typography variant="subtitle2">@{user.username}</Typography>
              </div>
            </div>
            <Grid container className={classes.grid}>
              <Grid item xs={12}>
                <Box fontWeight={700} style={{ margin: "5px 0px" }}>
                  Display Name
                </Box>

                <TextField
                  defaultValue={user.name}
                  variant="outlined"
                  size="small"
                  style={{ width: "75%" }}
                  disabled
                />
              </Grid>
            </Grid>
            <Grid container className={classes.grid}>
              <Grid item xs={12}>
                <Box fontWeight={700} style={{ margin: "5px 0px" }}>
                  Email
                </Box>

                <TextField
                  defaultValue={user.email}
                  variant="outlined"
                  size="small"
                  style={{ width: "75%" }}
                  disabled
                />
              </Grid>
            </Grid>
            <Grid container className={classes.grid}>
              <Grid item>
                <Box fontWeight={700} style={{ margin: "5px 0px" }}>
                  Become an educator?
                </Box>
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Save
              </Button>
            )}
          </Container>
        </Grid>
      </>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(6),
    height: theme.spacing(6),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  container: {
    backgroundColor: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  grid: { marginBottom: "10px", padding: "5px" },
}));
