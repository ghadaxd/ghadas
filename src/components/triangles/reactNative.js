import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

export const ReactNativeTri = () => {
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
        d="M 39 320 L 166.38 394.5 L 39 469 Z"
        fill="none"
        stroke="#f47122"
        strokeMiterlimit="10"
        transform="rotate(60,102.69,394.5)"
        pointerEvents="all"
      />
      <a.path
        style={{
          opacity,
        }}
        d="M 39 320 L 166.38 394.5 L 39 469 Z"
        fill="#f47122"
        stroke="#f47122"
        strokeMiterlimit="10"
        transform="rotate(60,102.69,394.5)"
        pointerEvents="all"
      />

      <rect
        x="24"
        y="354"
        width="42"
        height="43"
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
                width: "40px",
                height: "1px",
                paddingTop: "376px",
                marginLeft: "25px",
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
                  <font size="1" color="#f47122">
                    <b style={{ fontSize: "40px" }}>R</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="45"
            y="379"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            R
          </text>
        </switch>
      </g>

      <rect
        x="48"
        y="331"
        width="42"
        height="43"
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
                width: "40px",
                height: "1px",
                paddingTop: "353px",
                marginLeft: "49px",
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
                  <font color="#f47122" style={{ fontSize: "50px" }}>
                    e
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="69"
            y="356"
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
        x="69.5"
        y="325"
        width="42"
        height="36"
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
                width: "40px",
                height: "1px",
                paddingTop: "343px",
                marginLeft: "71px",
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
                  <font color="#f47122" size="1">
                    <b style={{ fontSize: "40px" }}>a</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="91"
            y="347"
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
        x="86.5"
        y="311"
        width="42"
        height="36"
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
                width: "40px",
                height: "1px",
                paddingTop: "329px",
                marginLeft: "88px",
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
                  <font color="#f47122" size="1">
                    <span style={{ fontSize: "40px" }}>c</span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="108"
            y="333"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            c
          </text>
        </switch>
      </g>

      <rect
        x="104"
        y="313"
        width="42"
        height="36"
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
                width: "40px",
                height: "1px",
                paddingTop: "331px",
                marginLeft: "105px",
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
                  <font color="#f47122" size="1">
                    <span style={{ fontSize: "40px" }}>
                      <b>t</b>
                    </span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="125"
            y="335"
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
        x="50"
        y="369"
        width="42"
        height="43"
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
                width: "40px",
                height: "1px",
                paddingTop: "391px",
                marginLeft: "51px",
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
                  <font size="1" color="#f47122">
                    <b style={{ fontSize: "40px" }}>N</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="71"
            y="394"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            N
          </text>
        </switch>
      </g>

      <rect
        x="75.69"
        y="347"
        width="42"
        height="43"
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
                width: "40px",
                height: "1px",
                paddingTop: "369px",
                marginLeft: "77px",
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
                  <font color="#f47122" style={{ fontSize: "50px" }}>
                    a
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="97"
            y="372"
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
        x="92.38"
        y="341"
        width="42"
        height="43"
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
                width: "40px",
                height: "1px",
                paddingTop: "363px",
                marginLeft: "93px",
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
                  <font color="#f47122" style={{ fontSize: "50px" }}>
                    t
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="113"
            y="366"
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
        x="104"
        y="344"
        width="42"
        height="43"
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
                width: "40px",
                height: "1px",
                paddingTop: "366px",
                marginLeft: "105px",
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
                  <font color="#f47122" style={{ fontSize: "50px" }}>
                    i
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="125"
            y="369"
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
        x="76.69"
        y="381"
        width="42"
        height="43"
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
                width: "40px",
                height: "1px",
                paddingTop: "403px",
                marginLeft: "78px",
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
                  <font color="#f47122" style={{ fontSize: "50px" }}>
                    <b>v</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="98"
            y="406"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            v
          </text>
        </switch>
      </g>

      <rect
        x="98.5"
        y="390"
        width="42"
        height="43"
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
                width: "40px",
                height: "1px",
                paddingTop: "412px",
                marginLeft: "100px",
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
                  <font color="#f47122" style={{ fontSize: "50px" }}>
                    <b>e</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="120"
            y="415"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            e
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
            width: "40px",
            height: "1px",
            paddingTop: "369px",
            marginLeft: "77px",
            opacity,
          }}
        >
          <font color="#fff">React Native</font>
        </a.div>
      </foreignObject>
    </g>
  );
};
