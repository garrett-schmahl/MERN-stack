import React from "react";

const BoxInput = (props) => {
  const { boxList, setBoxList } = props;
  const pushBox = (e) => {
    e.preventDefault();
    setBoxList({
      boxes: [
        ...boxList.boxes,
        {
          color: e.target["colorChoice"].value,
          size: e.target["sizeChoice"].value,
        },
      ],
    });
    e.target["colorChoice"].value = "";
    e.target["sizeChoice"].value = "";
  };
  return (
    <form onSubmit={pushBox}>
      <div className="formBox">
        <label htmlFor="colorChoice">Color</label>
        <input type="text" name="colorChoice"></input>
      </div>
      <div className="formBox">
        <label htmlFor="sizeChoice">Size(px)</label>
        <input type="number" name="sizeChoice"></input>
      </div>

      <input type="submit" value="add"></input>
    </form>
  );
};

export default BoxInput;
