import React from "react";
const BoxDisplay = (props) => {
  const { boxList } = props;
  return (
    <div className="boxContainer">
      {boxList.boxes.map((key) => (
        <div
          className="colorBoxes"
          style={{
            backgroundColor: key["color"],
            width: key["size"] + "px",
            height: key["size"] + "px",
          }}
        ></div>
      ))}
    </div>
  );
};
export default BoxDisplay;
