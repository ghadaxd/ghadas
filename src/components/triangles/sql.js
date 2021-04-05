import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

export const SQLTri = () => {
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
        d="M 264 375 L 392.38 448.5 L 264 522 Z"
        fill="none"
        stroke="#ffb80a"
        strokeMiterlimit="10"
        pointerEvents="all"
      />

      <a.path
        style={{
          opacity,
        }}
        d="M 264 375 L 392.38 448.5 L 264 522 Z"
        fill="#ffb80a"
        stroke="#ffb80a"
        strokeMiterlimit="10"
        pointerEvents="all"
      />

      <rect
        x="268.5"
        y="400"
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
                paddingTop: "418px",
                marginLeft: "270px",
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
                    <b style={{ fontSize: "70px" }}>S</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="285"
            y="421"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            S
          </text>
        </switch>
      </g>
      <rect
        x="311.69"
        y="427"
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
                paddingTop: "445px",
                marginLeft: "313px",
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
                    <span style={{ fontSize: "70px" }}>Q</span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="328"
            y="448"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            Q
          </text>
        </switch>
      </g>
      <rect
        x="267.5"
        y="456"
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
                paddingTop: "474px",
                marginLeft: "269px",
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
                    <span style={{ fontSize: "70px" }}>L</span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="284"
            y="477"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            L
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
            width: "31px",
            height: "1px",
            paddingTop: "450px",
            marginLeft: "300px",
            opacity,
          }}
        >
          <font color="#fff">SQL</font>
        </a.div>
      </foreignObject>
    </g>
  );
};
