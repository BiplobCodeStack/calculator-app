import React from "react";

function Display({ value }) {
  return <input type="text" value={value} readOnly className="display" />;
}

export default Display;
