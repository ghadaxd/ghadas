import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

export const PHPTri = () => {
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
        d="M 167.62 393 L 295 467.5 L 167.62 542 Z"
        fill="none"
        stroke="#fd9d09"
        strokeMiterlimit="10"
        transform="rotate(60,231.31,467.5)"
        pointerEvents="all"
      />
      <a.path
        style={{
          opacity,
        }}
        d="M 167.62 393 L 295 467.5 L 167.62 542 Z"
        fill="#fd9d09"
        stroke="#fd9d09"
        strokeMiterlimit="10"
        transform="rotate(60,231.31,467.5)"
        pointerEvents="all"
      />

      <rect
        x="165.37"
        y="431"
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
                paddingTop: "449px",
                marginLeft: "166px",
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
                  <font size="1" color="#fd9d09">
                    <span style={{ fontSize: "50px" }}>P</span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="182"
            y="452"
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
        x="209"
        y="439"
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
                paddingTop: "457px",
                marginLeft: "210px",
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
                  <font style={{ fontSize: "80px" }} color="#fd9d09">
                    H
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="226"
            y="460"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            H
          </text>
        </switch>
      </g>

      <rect
        x="225"
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
                marginLeft: "226px",
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
                  <font size="1" color="#fd9d09">
                    <span style={{ fontSize: "50px" }}>P</span>
                  </font>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x="242"
            y="421"
            fill="#000000"
            fontFamily="Helvetica"
            fontSize="12px"
            textAnchor="middle"
          >
            P
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
            marginLeft: "200px",
            opacity,
          }}
        >
          <font color="#fff">PHP</font>
        </a.div>
      </foreignObject>
    </g>
  );
};
