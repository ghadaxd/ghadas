import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Home } from "./pages/home";
import { CustomNav } from "./components/customNav";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  },
});

class App extends Component {
  render() {
    return (
      <Container
        component="main"
        className={this.props.classes.root}
        maxWidth="md"
      >
        <CssBaseline />
        <Home />
        <CustomNav />
      </Container>
    );
  }
}

export default withStyles(styles)(App);
