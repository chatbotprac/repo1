import React from "react";
import "./Options.css";
const Welcome = (props) => {
  var data = `[
    {
      "id": 1,
      "text": "Devops",
      "pId": 0,
      "isAns": "no"
    },
    {
      "id": 2,
      "text": "Hr",
      "pId": 0,
      "isAns": "no"
    }
  ]`;
  var parsedData = JSON.parse(data);
  const buttonsMarkup = parsedData.map((option) => (
    <button
      key={option.id}
      onClick={props.actionProvider.handleDepartment(option.text)}
      className="option-button"
    >
      {option.text}
    </button>
  ));
  return <div className="options-container1">{buttonsMarkup}</div>;
};
export default Welcome;
