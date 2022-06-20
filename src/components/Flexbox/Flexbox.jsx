import React from "react";

import "./Flexbox.css";

export default function Flexbox({
  children,
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "start",
  fluid = false,
  className,
}) {
  return (
    <div
      className={`d-flex flex-justify-content-${justifyContent} flex-align-items-${alignItems} flex-direction-${flexDirection} ${
        fluid ? "w-100" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
