import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    minHeight: "80vh",
    [theme.breakpoints.up("sm")]: {
      minHeight: "100vh",
      marginLeft: theme.spacing(8),
    },
  },
  title: {
    color: theme.palette.text.primary,
  },
  content: {
    color: theme.palette.text.secondary,
  },
}));

export const Coming = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      className={classes.root}
    >
      <Grid item>
        <Grow in={true} timeout={2000}>
          <Typography className={classes.title} component="h1" variant="h1">
            Still in the oven!
          </Typography>
        </Grow>
      </Grid>
      <Grid item>
        <Grow in={true} timeout={2500}>
          <Typography className={classes.content} paragraph>
            This page is still under development. 💁🏻‍♀️
            <br />
            Stay tuned ✨!
          </Typography>
        </Grow>
      </Grid>
    </Grid>
  );
};
