import React from "react";

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`bg-violet-400 hover:bg-violet-800 text-gray-100 ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
