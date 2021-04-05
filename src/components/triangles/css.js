import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

export const CSSTri = () => {
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
        d="M 166.37 97.43 L 294.75 171.93 L 166.37 246.43 Z"
        fill="none"
        stroke="#ee8208"
        strokeMiterlimit="10"
        transform="rotate(60,230.56,171.93)"
        pointerEvents="all"
      />
      <a.path
        style={{
          opacity,
        }}
        d="M 166.37 97.43 L 294.75 171.93 L 166.37 246.43 Z"
        fill="#ee8208"
        stroke="#ee8208"
        strokeMiterlimit="10"
        transform="rotate(60,230.56,171.93)"
        pointerEvents="all"
      />

      <rect
        x="176"
        y="131.5"
        width="42"
        height="42"
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
                paddingTop: "153px",
                marginLeft: "177px",
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
                  <font size="1" color="#ee8208">
                    <b style={{ fontSize: "80px" }}>C</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="197"
            y="156"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            C
          </text>
        </switch>
      </g>

      <rect
        x="219"
        y="106"
        width="42"
        height="42"
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
                paddingTop: "127px",
                marginLeft: "220px",
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
                  <font size="1" color="#ee8208">
                    <b style={{ fontSize: "60px" }}>C</b>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="240"
            y="131"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            C
          </text>
        </switch>
      </g>

      <rect
        x="220"
        y="156"
        width="42"
        height="42"
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
                paddingTop: "177px",
                marginLeft: "221px",
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
                  <font size="1" color="#ee8208">
                    <span style={{ fontSize: "60px" }}>S</span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="241"
            y="181"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            S
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
            paddingTop: "153px",
            marginLeft: "195px",
            opacity,
          }}
        >
          <font color="#fff">CSS</font>
        </a.div>
      </foreignObject>
    </g>
  );
};
