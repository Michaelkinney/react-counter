import React, { useState } from "react";

function Display(props) {
  return (
    <div>
      <p className="message">
        Your total is <span className="message-amount">{props.count}</span>
      </p>
    </div>
  );
}

export default Display;
