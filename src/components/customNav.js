import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PhotoFilterIcon from "@material-ui/icons/PhotoFilter";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `${theme.palette.primary.main} solid 1px`,
    borderRadius: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      height: "3em",
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      height: "20em",
      width: "3em",
      marginRight: theme.spacing(5),
    },
  },
  circleLogo: {
    border: `${theme.palette.primary.main} solid 1px`,
    borderRadius: theme.spacing(10),
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundImage: `url("./assets/Ghaa.png")`,
    backgroundSize: "cover",
  },
  divider: {
    [theme.breakpoints.down("xs")]: {
      borderRight: `${theme.palette.primary.main} dotted 1px`,
      marginTop: theme.spacing(0.7),
      marginBottom: theme.spacing(0.7),
    },
    [theme.breakpoints.up("sm")]: {
      borderBottom: `${theme.palette.primary.main} dotted 1px`,
      marginRight: theme.spacing(0.7),
      marginLeft: theme.spacing(0.7),
    },
  },
  activeNavItem: {
    color: `${theme.palette.primary.main} !important`,
  },
  NavItemIcon: {
    color: theme.palette.grey[600],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const CustomNav = () => {
  const classes = useStyles();

  const theme = useTheme();
  let matches = useMediaQuery(theme.breakpoints.down("xs"));
  const placement = matches ? "top" : "left";

  return (
    <Slide direction="up" in={true} timeout={1500}>
      <Grid
        container
        spacing={3}
        className={classes.root}
        alignContent="center"
        justify="space-around"
      >
        <Tooltip title="Home 👋🏼" placement={placement} interactive>
          <NavLink
            to="/ghadas"
            activeClassName={classes.activeNavItem}
            className={classes.NavItemIcon}
          >
            <div className={classes.circleLogo} />
          </NavLink>
        </Tooltip>

        <span className={classes.divider} />

        <Tooltip title="About 👩🏻‍💻" placement={placement} interactive>
          <NavLink
            to="/about"
            activeClassName={classes.activeNavItem}
            className={classes.NavItemIcon}
          >
            <AssignmentIndIcon />
          </NavLink>
        </Tooltip>

        <Tooltip title="Projects ✨" placement={placement} interactive>
          <NavLink
            to="/coming"
            activeClassName={classes.activeNavItem}
            className={classes.NavItemIcon}
          >
            <PhotoFilterIcon />
          </NavLink>
        </Tooltip>

        <Tooltip title="Learning ✅" placement={placement} interactive>
          <NavLink
            to="/coming"
            activeClassName={classes.activeNavItem}
            className={classes.NavItemIcon}
          >
            <AssignmentTurnedInIcon />
          </NavLink>
        </Tooltip>

        <Tooltip title="Contact 💁🏻‍♀️" placement={placement} interactive>
          <NavLink
            to="/coming"
            activeClassName={classes.activeNavItem}
            className={classes.NavItemIcon}
          >
            <AlternateEmailIcon />
          </NavLink>
        </Tooltip>
      </Grid>
    </Slide>
  );
};
