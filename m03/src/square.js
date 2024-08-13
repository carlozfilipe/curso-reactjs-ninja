"use strict";

import React from "react";

const Square = ({ color }) => (
  <div
    style={{
      backgroundColor: color,
      height: "100px",
      width: "100px",
    }}
  />
);

Square.defaultProps = {
  color: "red",
};

const RenderSquare = () => (
  <div
    onClick={(e) => {
      alert("clicou na div");
    }}
  >
    {["blue", "yellow", "black", "blue"].map((square, index) => (
      <Square key={index} color={square} />
    ))}
  </div>
);

export default { Square, RenderSquare };
