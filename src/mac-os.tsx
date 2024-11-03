import dayjs from "dayjs";
import React, { useEffect } from "react";
import { Background } from "./components/background";
import { Framework } from "./components/framework";
import { System } from "./components/system";
import { ConfigProvider } from "./context/config.ctx";

export const MacOS: React.FC = () => {
  useEffect(() => {
    dayjs.locale("zh-cn");
  }, []);
  return (
    <ConfigProvider value={{}}>
      <Background>
        <System>
          <Framework />
        </System>
      </Background>
    </ConfigProvider>
  );
};
