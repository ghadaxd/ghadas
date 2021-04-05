import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { JSTri } from "./triangles/javascript";
import { HTMLTri } from "./triangles/html";
import { CSSTri } from "./triangles/css";
import { BootstrapTri } from "./triangles/bootstrap";
import { MaterialUITri } from "./triangles/materialUI";
import { ReactTri } from "./triangles/react";
import { ReactNativeTri } from "./triangles/reactNative";
import { JqueryTri } from "./triangles/jquery";
import { PHPTri } from "./triangles/php";
import { SQLTri } from "./triangles/sql";
import { DotTri } from "./triangles/dot";
import { FilledTris } from "./triangles/filledTris";

const useStyles = makeStyles((theme) => ({
  triSkills: {
    opacity: "85%",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

export const TriGSkills = () => {
  const classes = useStyles();

  return (
    <div className={classes.triSkills}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="109%"
        height="120%"
        viewBox="-0.5 -0.5 457 857"
      >
        <defs />
        <g>
          {/* Javascript */}
          <JSTri />
          {/* HTML */}
          <HTMLTri />
          {/* CSS */}
          <CSSTri />
          {/* Bootstrap */}
          <BootstrapTri />
          {/* Material-UI */}
          <MaterialUITri />
          {/* React */}
          <ReactTri />
          {/* React Native */}
          <ReactNativeTri />
          {/* The dot */}
          <DotTri />
          {/* Jquery */}
          <JqueryTri />
          {/* PHP */}
          <PHPTri />
          {/* SQL */}
          <SQLTri />
          {/* Filled triangles */}
          <FilledTris />
        </g>
        <switch>
          <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" />
          <a
            transform="translate(0,-5)"
            href="https://www.diagrams.net/doc/faq/svg-export-text-problems"
            target="_blank"
            rel="noopener noreferrer"
          >
            <text textAnchor="middle" fontSize="10px" x="50%" y="100%">
              Viewer does not support full SVG 1.1
            </text>
          </a>
        </switch>
      </svg>
    </div>
  );
};
