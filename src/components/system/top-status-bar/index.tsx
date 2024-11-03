import { WEEKS } from "@/content/date.content";
import Apple from "@/icons/system-icon/apple";
import classNames from "classnames";
import dayjs from "dayjs";
import React, { useMemo } from "react";
import styles from "./index.module.less";

export const TopStatusBar: React.FC = () => {
  const time = useMemo(() => {
    const now = dayjs();
    const m = now.month();
    const d = now.date();
    const w = now.day();
    return `${m}月${d}日 ${WEEKS[w]} ${now.format("HH:mm")}`;
  }, []);

  return (
    <div
      className={classNames(
        "h-8",
        styles["top-status-bar"],
        "flex",
        "items-center",
        "pl-2",
        "pr-2",
        "cursor-pointer",
        "justify-between",
      )}
    >
      <div>
        <span className="text-[14px]">
          <Apple />
        </span>
      </div>
      <div>
        <span className={classNames("text-[14px]", styles.time, "font-sans")}>
          {time}
        </span>
      </div>
    </div>
  );
};
