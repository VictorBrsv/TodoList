import React, { FC } from "react";
import styles from "./header.module.css";

interface HeaderProps {
  todoCount: number;
}

export const Header: FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className={styles.header_container}>
      <h1 className={styles.header_title}>TodoList have {todoCount} task(s)</h1>
    </div>
  );
};
