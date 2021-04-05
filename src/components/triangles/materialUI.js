import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

export const MaterialUITri = () => {
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
        d="M 39.24 171 L 166.62 245.5 L 39.24 320 Z"
        fill="none"
        stroke="#ffb80a"
        strokeMiterlimit="10"
        transform="rotate(60,102.93,245.5)"
        pointerEvents="all"
      />
      <a.path
        style={{
          opacity,
        }}
        d="M 39.24 171 L 166.62 245.5 L 39.24 320 Z"
        fill="#ffb80a"
        stroke="#ffb80a"
        strokeMiterlimit="10"
        transform="rotate(60,102.93,245.5)"
        pointerEvents="all"
      />

      <rect
        x="33"
        y="204"
        width="33"
        height="35"
        fill="none"
        stroke="none"
        pointerEvents="all"
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
                width: "31px",
                height: "1px",
                paddingTop: "222px",
                marginLeft: "34px",
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
                  <font size="1" color="#ffb80a">
                    <span style={{ fontSize: "50px" }}>m</span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="50"
            y="225"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            m
          </text>
        </switch>
      </g>

      <rect
        x="63"
        y="184"
        width="33"
        height="35"
        fill="none"
        stroke="none"
        pointerEvents="all"
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
                width: "31px",
                height: "1px",
                paddingTop: "202px",
                marginLeft: "64px",
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
                  <font size="1" color="#ffb80a">
                    <span style={{ fontSize: "50px" }}>
                      <b>a</b>
                    </span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="80"
            y="205"
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
        x="80.19"
        y="176"
        width="33"
        height="35"
        fill="none"
        stroke="none"
        pointerEvents="all"
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
                width: "31px",
                height: "1px",
                paddingTop: "194px",
                marginLeft: "81px",
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
                  <font size="1" color="#ffb80a">
                    <span style={{ fontSize: "50px" }}>t</span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="97"
            y="197"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            t
          </text>
        </switch>
      </g>

      <rect
        x="101.38"
        y="167"
        width="33"
        height="35"
        fill="none"
        stroke="none"
        pointerEvents="all"
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
                width: "31px",
                height: "1px",
                paddingTop: "185px",
                marginLeft: "102px",
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
                  <font size="1" color="#ffb80a">
                    <span style={{ fontSize: "50px" }}>
                      <b>e</b>
                    </span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="118"
            y="188"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            e
          </text>
        </switch>
      </g>

      <rect
        x="59"
        y="222"
        width="33"
        height="35"
        fill="none"
        stroke="none"
        pointerEvents="all"
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
                width: "31px",
                height: "1px",
                paddingTop: "240px",
                marginLeft: "60px",
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
                  <font color="#ffb80a" style={{ fontSize: "60px" }}>
                    r
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="76"
            y="243"
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
        x="74"
        y="232"
        width="33"
        height="35"
        fill="none"
        stroke="none"
        pointerEvents="all"
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
                width: "31px",
                height: "1px",
                paddingTop: "250px",
                marginLeft: "75px",
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
                  <font color="#ffb80a" style={{ fontSize: "60px" }}>
                    i
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="91"
            y="253"
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
        x="96"
        y="208.5"
        width="33"
        height="35"
        fill="none"
        stroke="none"
        pointerEvents="all"
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
                width: "31px",
                height: "1px",
                paddingTop: "226px",
                marginLeft: "97px",
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
                  <font size="1" color="#ffb80a">
                    <span style={{ fontSize: "50px" }}>
                      <b>a</b>
                    </span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="113"
            y="230"
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
        x="90"
        y="246.43"
        width="33"
        height="35"
        fill="none"
        stroke="none"
        pointerEvents="all"
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
                width: "31px",
                height: "1px",
                paddingTop: "264px",
                marginLeft: "91px",
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
                  <font color="#ffb80a" style={{ fontSize: "40px" }}>
                    <b>L</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="107"
            y="268"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            L
          </text>
        </switch>
      </g>

      <rect
        x="103"
        y="244.5"
        width="33"
        height="35"
        fill="none"
        stroke="none"
        pointerEvents="all"
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
                width: "31px",
                height: "1px",
                paddingTop: "262px",
                marginLeft: "104px",
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
                  <font color="#ffb80a" style={{ fontSize: "20px" }}>
                    UI
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="120"
            y="266"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            UI
          </text>
        </switch>
      </g>

      <foreignObject
        style={{ overflow: "visible", textAlign: "left" }}
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
            width: "74px",
            height: "1px",
            paddingTop: "224px",
            marginLeft: "52px",
            opacity,
          }}
        >
          <font color="#fff">Material-UI</font>
        </a.div>
      </foreignObject>
    </g>
  );
};
