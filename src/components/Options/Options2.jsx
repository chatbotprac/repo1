import React, { useState } from "react";
const Options2 = (props) => {
  return (
    <button
      onClick={props.actionProvider.handleJavascriptQuiz(1, "hi")}
      className="option-button"
    >
      hii
    </button>
  );
};
export default Options2;
