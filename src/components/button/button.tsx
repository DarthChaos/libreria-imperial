import { ReactNode } from "react";

import "./Button.css";

type ButtonProps = {
  children: string;
  type?: "base" | "cancel";
  className?: string;
  onClick?: () => {};
};

const Button = ({ children, className, type = "base" }: ButtonProps) => {
  const buttonClass = ` button parent group ${className || ""} ${
    type == "cancel" ? "cancel-button" : "primary-button"
  }`;
  const smallCorners =
    type == "base"
      ? "group-hover:border-primary-red-1"
      : "group-hover:border-primary-blue";

  return (
    <button className={buttonClass}>
      <span className={smallCorners} />
      {children}
      <span className={smallCorners} />
    </button>
  );
};

export default Button;
