"use client";

import "./Button.css";

type ButtonProps = {
  children: string;
  type?: "base" | "cancel";
  className?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  className,
  type = "base",
  onClick,
}: ButtonProps) => {
  const buttonClass = `w-[100px] button parent group ${className || ""} ${
    type == "cancel" ? "cancel-button" : "primary-button"
  }`;
  const smallCorners =
    type == "base"
      ? "group-hover:border-primary-red-1"
      : "group-hover:border-primary-blue";

  const onButtonClick = () => {
    onClick && onClick();
  };

  return (
    <button className={buttonClass} onClick={onButtonClick}>
      <span className={smallCorners} />
      {children}
      <span className={smallCorners} />
    </button>
  );
};

export default Button;
