import React from "react";
import "./Button.scss";

//types are primary, secondary, view-more

const Button = ({
  text,
  type = "primary",
  icon,
  iconPosition = "right",
  className,
  disabled = false,
  handleClick,
}) => {
  let classtype = "";
  switch (type) {
    case "primary":
      classtype = "btn btn-primary";
      break;
    case "secondary":
      classtype = "btn btn-secondary";
      break;
    case "view-more":
      classtype = "btn btn-viewMore";
      break;
    case "pagination":
      classtype = "btn btn-pagination";
      break;
    default:
      break;
  }
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${classtype} ${className} ${disabled && 'btn-disabled'}`}
    >
      {iconPosition === "left" && (
        <span style={{ marginRight: "0.5rem" }}>{icon}</span>
      )}
      <span>{text}</span>
      {iconPosition === "right" && (
        <span style={{ marginLeft: "0.5rem" }}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
