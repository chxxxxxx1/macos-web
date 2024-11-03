import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import styles from "./index.module.less";
import { TopStatusBar } from "./top-status-bar";

type SystemProps = {};

export const System: React.FC<PropsWithChildren<SystemProps>> = ({
  children,
}) => {
  return (
    <div className={classNames(styles.system)}>
      <TopStatusBar />
      {children}
    </div>
  );
};
