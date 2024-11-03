import { createContext } from "react";

type ConfigProviderProps = {};

export const config = createContext<ConfigProviderProps>({});

export const ConfigProvider = config.Provider;
