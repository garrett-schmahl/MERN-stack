import React from "react";

const SelectTab = (props) => {
  const { tab, pageState, setPageState } = props;
  const changeActiveTab = (input) => {
    setPageState(input);
  };
  return (
    <div className="tabContainer">
      {tab.map((key) => (
        <button
          className={key.name}
          style={{
            backgroundColor: pageState === key.name ? "darkgrey" : "lightgray",
          }}
          onClick={() => changeActiveTab(key.name)}
        >
          {key.name}
        </button>
      ))}
    </div>
  );
};

export default SelectTab;
