import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useSpring, animated as a } from "react-spring";

export const JSTri = () => {
  const theme = useTheme();

  const [flipped, set] = useState(false);

  const { opacity } = useSpring({
    config: { mass: 5, tension: 500, friction: 80 },

    from: { opacity: 0 },
    to: { opacity: flipped ? 1 : 0 },
  });

  return (
    <g
      onMouseEnter={() => set((state) => !state)}
      onTouchStart={() => set((state) => !state)}
    >
      <a.path
        style={{
          opacity: opacity.to((o) => 1 - o),
        }}
        d="M 295 171 L 422.38 245.5 L 295 320 Z"
        fill="none"
        stroke="#f75929"
        strokeMiterlimit="10"
        transform="rotate(60,358.69,245.5)"
      />
      <a.path
        style={{
          opacity,
        }}
        d="M 295 171 L 422.38 245.5 L 295 320 Z"
        fill="#f75929"
        stroke="#f75929"
        strokeMiterlimit="10"
        transform="rotate(60,358.69,245.5)"
      />

      <rect
        x="278"
        y="203.43"
        width="27"
        height="43"
        fill="none"
        stroke="none"
      />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "25px",
                height: "1px",
                paddingTop: "225px",
                marginLeft: "279px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: "1.2",
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font style={{ fontSize: "40px" }} color="#f75929">
                    <b>J</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="292"
            y="229"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            J
          </text>
        </switch>
      </g>

      <rect x="309" y="193" width="27" height="43" fill="none" stroke="none" />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "25px",
                height: "1px",
                paddingTop: "215px",
                marginLeft: "310px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: 1.2,
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font color="#f75929" size="1">
                    <b style={{ fontSize: "80px" }}>a</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="323"
            y="218"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            a
          </text>
        </switch>
      </g>

      <rect
        x="328"
        y="185.5"
        width="54"
        height="53.5"
        fill="none"
        stroke="none"
      />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "52px",
                height: "1px",
                paddingTop: "212px",
                marginLeft: "329px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: 1.2,
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font color="#f75929" size="1">
                    <span style={{ fontSize: "70px" }}>V</span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="355"
            y="216"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            V
          </text>
        </switch>
      </g>

      <rect
        x="351"
        y="195"
        width="54"
        height="45.75"
        fill="none"
        stroke="none"
      />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "52px",
                height: "1px",
                paddingTop: "218px",
                marginLeft: "352px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: 1.2,
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font color="#f75929" style={{ fontSize: "50px" }}>
                    a
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="378"
            y="221"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            a
          </text>
        </switch>
      </g>

      <rect
        x="301"
        y="227"
        width="54"
        height="45.75"
        fill="none"
        stroke="none"
      />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "52px",
                height: "1px",
                paddingTop: "250px",
                marginLeft: "302px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: 1.2,
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font color="#f75929" style={{ fontSize: "30px" }}>
                    s
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="328"
            y="253"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            s
          </text>
        </switch>
      </g>

      <rect
        x="334"
        y="238"
        width="25"
        height="28.75"
        fill="none"
        stroke="none"
      />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "23px",
                height: "1px",
                paddingTop: "252px",
                marginLeft: "335px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: 1.2,
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font color="#f75929" style={{ fontSize: "50px" }}>
                    c
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="347"
            y="256"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            c
          </text>
        </switch>
      </g>

      <rect x="357" y="229" width="15" height="45" fill="none" stroke="none" />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "13px",
                height: "1px",
                paddingTop: "252px",
                marginLeft: "358px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: 1.2,
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font color="#f75929" style={{ fontSize: "50px" }}>
                    r
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="365"
            y="255"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            r
          </text>
        </switch>
      </g>

      <rect
        x="363"
        y="248"
        width="11"
        height="37.37"
        fill="none"
        stroke="none"
      />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "9px",
                height: "1px",
                paddingTop: "267px",
                marginLeft: "364px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: 1.2,
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font color="#f75929" style={{ fontSize: "30px" }}>
                    <b>i</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="369"
            y="270"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            i
          </text>
        </switch>
      </g>

      <rect
        x="371"
        y="242.75"
        width="21"
        height="32.75"
        fill="none"
        stroke="none"
      />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "19px",
                height: "1px",
                paddingTop: "259px",
                marginLeft: "372px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: 1.2,
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font color="#f75929" style={{ fontSize: "30px" }}>
                    P
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="382"
            y="263"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            P
          </text>
        </switch>
      </g>

      <rect
        x="372"
        y="261"
        width="21"
        height="32.75"
        fill="none"
        stroke="none"
      />
      <g transform="translate(-0.5 -0.5)">
        <switch>
          <foreignObject
            style={{ overflow: "visible", textAlign: "left" }}
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                display: "flex",
                alignItems: "unsafe center",
                justifyContent: "unsafe center",
                width: "19px",
                height: "1px",
                paddingTop: "277px",
                marginLeft: "373px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontFamily: "Helvetica",
                    color: "#000000",
                    lineHeight: 1.2,
                    pointerEvents: "all",
                    whiteSpace: "normal",
                    wordWrap: "normal",
                  }}
                >
                  <font color="#f75929" size="1">
                    <b style={{ fontSize: "35px" }}>t</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="383"
            y="281"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            t
          </text>
        </switch>
      </g>
      <foreignObject
        pointerEvents="none"
        width="100%"
        height="100%"
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      >
        <a.div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: "flex",
            alignItems: "unsafe center",
            justifyContent: "unsafe center",
            width: "52px",
            paddingTop: theme.spacing(26.5),
            marginLeft: theme.spacing(40),
            opacity,
          }}
        >
          <font color="#fff">JavaScript</font>
        </a.div>
      </foreignObject>
    </g>
  );
};
