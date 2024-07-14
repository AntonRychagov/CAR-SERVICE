// src/shared/lib/store/RootStore.ts
import React, { createContext, useContext } from "react";
import { observer } from "mobx-react-lite";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeStore from "./ThemeStore";
import SearchStore from "./SearchStore";
import { RootStoreInterface } from "../../types";


class RootStore implements RootStoreInterface {
  themeStore: ThemeStore;
  searchStore: SearchStore;

  constructor() {
    this.themeStore = new ThemeStore();
    this.searchStore = new SearchStore(this);
  }
}

export const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider: React.FC<{ children: React.ReactNode }> =
  observer(({ children }) => {
    const rootStore = new RootStore();
    return (
      <RootStoreContext.Provider value={rootStore}>
        <ThemeProvider theme={rootStore.themeStore.theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </RootStoreContext.Provider>
    );
  });

export const useRootStore = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("useRootStore must be used within a RootStoreProvider");
  }
  return store;
};

export default RootStore;
