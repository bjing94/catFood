import React from "react";

export default function Typography({
  children,
  fontSize,
  fontWeight = "normal",
  color,
  className,
  lineHeight,
  textAlign = "start",
  ...rest
}) {
  return (
    <div
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight ? `${lineHeight}px` : ""}`,
        fontWeight: fontWeight,
        textAlign: textAlign,
      }}
      className={`typography ${color ?? ""} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}
