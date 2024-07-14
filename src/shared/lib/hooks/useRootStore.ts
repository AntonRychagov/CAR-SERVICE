import { useContext } from "react";
import { RootStoreContext } from "../store/RootStore";

export const useRootStore = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("useRootStore must be used within a RootStoreProvider");
  }
  return store;
};
