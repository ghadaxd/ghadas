import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

import { TriGSkills } from "../components/triGSkills";
import logo from "../assets/Ghaa.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    minHeight: "80vh",
    [theme.breakpoints.up("sm")]: {
      minHeight: "100vh",
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(8),
    },
  },
  circleLogo: {
    border: `${theme.palette.primary.main} solid "1px"`,
    borderRadius: theme.spacing(10),
    width: "10em",
    height: "10em",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(1),
  },
  name: {
    textTransform: "uppercase",
    width: "10em",
    textAlign: "center",
  },
  title: {
    color: theme.palette.text.hint,
    width: "14.286em",
    textAlign: "center",
    borderBottom: `${theme.palette.primary.light} dotted "1px"`,
    paddingBottom: theme.spacing(2),
  },
  aboutContainer: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  aboutPaper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    boxShadow: "none",
  },
  about: {
    lineHeight: theme.spacing(0.22),
    color: theme.palette.text.secondary,
    textAlign: "center",
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Slide direction="right" in={true} timeout={1500}>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.aboutContainer}
          lg={6}
          md={4}
          sm={4}
        >
          <img src={logo} alt="My logo" className={classes.circleLogo} />
          <Typography variant="h6" className={classes.name}>
            Ghada Alaskar
          </Typography>
          <Typography variant="subtitle2" className={classes.title}>
            Frontend Developer
          </Typography>
          <Paper className={classes.aboutPaper}>
            <Typography className={classes.about} paragraph>
              I'm Ghada, a frontend developer who’s driven by passion and
              purpose.{" "}
              <span role="img" aria-label="charm">
                ✨
              </span>
              <br />
              <br />
              I’ve spent almost four years learning, growing, and developing
              projects.{" "}
              <span role="img" aria-label="rock">
                👩🏻‍💻
              </span>
              <br />
              <br />I enjoy solving puzzles, coloring, and TEA.{" "}
              <span role="img" aria-label="girl1">
                💆🏻‍♀️
              </span>
              <br />
              <br />
              Always full of curiosity, seeking knowledge, reading, and growing.{" "}
              <span role="img" aria-label="strong">
                💪🏼
              </span>
              <br />
              <br />
              Twitter is my favorite mini-books, Google is my best mentor.{" "}
              <span role="img" aria-label="info">
                💁🏻‍♀️
              </span>
              <br />
              <br />
              Happy coding.{" "}
              <span role="img" aria-label="girl2">
                👩🏻‍💻
              </span>
              <span role="img" aria-label="heart">
                🧡
              </span>
            </Typography>
          </Paper>
        </Grid>
      </Slide>
      <Slide direction="left" in={true} timeout={1500}>
        <Grid item>
          <TriGSkills />
        </Grid>
      </Slide>
    </Grid>
  );
};
