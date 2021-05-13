import React from "react";

const DisplayTabContent = (props) => {
  const { tab, pageState } = props;
  let renderText = "";
  const currentTabCheck = () => {
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].name === pageState) {
        renderText = tab[i].data;
        break;
      }
    }
  };
  currentTabCheck();
  return <div className="textDisplay">{renderText}</div>;
};

export default DisplayTabContent;
