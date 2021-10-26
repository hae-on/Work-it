import React from "react";
import { ColorConsumer } from "./colorContext";

// const colors = [
//   "#FF98A5",
//   "#FFDCB0",
//   "#FEFF84",
//   "#B9FFBD",
//   "#ACE8FF",
//   "#D4B4FF",
//   "#FFD1D5",
// ];

const colors = [
  { red: "#FF98A5" },
  { orange: "#FFDCB0" },
  { yellow: "#FEFF84" },
  { green: "#B9FFBD" },
  { blue: "#ACE8FF" },
  { purple: "#D4B4FF" },
  { pink: "#FFD1D5" },
];

const SelectColors = () => {
  return (
    <div>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};

export default SelectColors;
