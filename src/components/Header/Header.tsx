import React from "react";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import LastBubbles from "../LastBubbles/LastBubbles";
import styles from "./styles.module.scss";

export const Header = ({ children }: { children: React.ReactElement }):React.ReactElement => {
  return (
    <>
      <div className={styles.header}>
        <h3>Where in the world?</h3>
        <div className={styles.rightContainer}>
          <LastBubbles />
          <DarkModeBtn />
        </div>
      </div>
      {children}
    </>
  );
};
