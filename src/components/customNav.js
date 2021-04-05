import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PhotoFilterIcon from "@material-ui/icons/PhotoFilter";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `${theme.palette.primary.main} solid 1px`,
    borderRadius: theme.spacing(10),
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
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5),
    },
    [theme.breakpoints.up("sm")]: {
      borderBottom: `${theme.palette.primary.main} dotted 1px`,
      marginRight: theme.spacing(1.5),
      marginLeft: theme.spacing(1.5),
    },
  },
}));

export const CustomNav = () => {
  const classes = useStyles();
  const [aboutIcon, setAboutIcon] = React.useState("default");
  const [projectsIcon, setProjectsIcon] = React.useState("default");
  const [learningIcon, setLearningIcon] = React.useState("default");
  const [contactIcon, setContactIcon] = React.useState("default");
  const [previous, setPrevious] = React.useState("home");

  const theme = useTheme();
  let matches = useMediaQuery(theme.breakpoints.down("xs"));
  const placement = matches ? "top" : "left";

  const handleClick = (clicked, type) => {
    switch (clicked) {
      case "about":
        setAboutIcon(type);
        break;
      case "projects":
        setProjectsIcon(type);
        break;
      case "learning":
        setLearningIcon(type);
        break;
      case "contact":
        setContactIcon(type);
        break;
      default:
        break;
    }
    type === "primary" && setPreviousIcon(clicked);
  };

  const setPreviousIcon = (clicked) => {
    if (clicked === previous) {
      return;
    }
    const preIcon = previous;
    setPrevious(clicked);
    handleClick(preIcon, "default");
  };

  return (
    <Slide direction="up" in={true} timeout={1500} mountOnEnter unmountOnExit>
      <Grid
        container
        spacing={3}
        className={classes.root}
        alignContent="center"
        justify="space-between"
      >
        <Tooltip title="Home 👋🏼" placement={placement} interactive>
          <IconButton
            aria-label="home"
            onClick={() => handleClick("home", "primary")}
          >
            <div className={classes.circleLogo} />
          </IconButton>
        </Tooltip>

        <span className={classes.divider} />

        <Tooltip title="About 👩🏻‍💻" placement={placement} interactive>
          <IconButton
            aria-label="about"
            onClick={() => handleClick("about", "primary")}
            color={aboutIcon}
          >
            <AssignmentIndIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Projects ✨" placement={placement} interactive>
          <IconButton
            aria-label="projects"
            onClick={() => handleClick("projects", "primary")}
            color={projectsIcon}
          >
            <PhotoFilterIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Learning ✅" placement={placement} interactive>
          <IconButton
            aria-label="learning"
            onClick={() => handleClick("learning", "primary")}
            color={learningIcon}
          >
            <AssignmentTurnedInIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Contact 💁🏻‍♀️" placement={placement} interactive>
          <IconButton
            aria-label="contact"
            onClick={() => handleClick("contact", "primary")}
            color={contactIcon}
          >
            <AlternateEmailIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Slide>
  );
};