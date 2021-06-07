import React, { useContext } from "react";
import {
  makeStyles,
  Button,
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Switch,
} from "@material-ui/core";
import { UserContext } from "../../context/UserContext";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../models";
import Avatar from "boring-avatars";

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
              <Avatar
                size={60}
                name={user.username}
                variant="beam"
                colors={["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"]}
                className={classes.avatar}
              />

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
    padding: theme.spacing(1),
    margin: theme.spacing(1),
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
