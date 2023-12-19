import React, { ComponentPropsWithRef, FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  color: "red" | "blue" | "orange";
}

export const Button: FC<ButtonProps> = ({
  color,
  children,
  onClick,
  ...props
}) => {
  const className = `${styles.button} ${styles[`button_${color}`]}`;
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
