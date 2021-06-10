import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./style/navTransition.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CustomNav } from "./components/customNav";
import { About } from "./pages/about";
import { Coming } from "./pages/coming";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
}));

export const App = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.root} maxWidth="md">
      <CssBaseline />

      <Router>
        <Switch>
          <Route exact path="/ghadas" children={<Home />} />
          <Route exact path="/about" children={<About />} />
          <Route exact path="/coming" children={<Coming />} />
        </Switch>
        <CustomNav />
      </Router>
    </Container>
  );
};
