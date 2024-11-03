import React from "react";
import styles from "./index.module.less";

type BackgroundProps = {};

export const Background: React.FC<React.PropsWithChildren<BackgroundProps>> = ({
  children,
}) => {
  return <div className={styles.background}>{children}</div>;
};
