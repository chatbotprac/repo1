import React, { useState } from "react";
const Options3 = (props) => {
  const [feedback, setFeedback] = useState("");
  return (
    <div>
      <textarea
        id="freeform"
        name="freeform"
        rows="4"
        cols="50"
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="You can Give your Feedback here"
      ></textarea>
      <button onClick={props.actionProvider.handleJavascriptQuiz1(feedback)}>
        Send Feedback
      </button>
    </div>
  );
};
export default Options3;
