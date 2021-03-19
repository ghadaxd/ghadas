import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    minHeight: "80vh",
  },
  hi: {
    color: theme.palette.text.primary,
  },
  intro: {
    color: theme.palette.text.secondary,
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignContent="center"
      className={classes.root}
    >
      <Grid item>
        <Typography className={classes.hi} component="h1" variant="h1">
          Hi,
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.intro} paragraph>
          I'm Ghada, = )
          <br />
          <br />
          On my way to be an amazing Frontend Web Developer.🚀
          <br />I like UI effects, animation, and bringing creative design to
          life! ✨
        </Typography>
      </Grid>
    </Grid>
  );
};
