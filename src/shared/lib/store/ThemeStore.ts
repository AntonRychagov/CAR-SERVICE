import { makeAutoObservable } from "mobx";
import { createTheme, Theme } from "@mui/material/styles";
import { ThemeStoreInterface } from "../../types";

class ThemeStore implements ThemeStoreInterface {
  darkMode: boolean = false;
  theme: Theme;

  constructor() {
    makeAutoObservable(this);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.darkMode = savedTheme === "dark";
    }
    this.theme = this.createAppTheme();
  }

  toggleTheme = () => {
    this.darkMode = !this.darkMode;
    localStorage.setItem("theme", this.darkMode ? "dark" : "light");
    this.theme = this.createAppTheme();
  };

  createAppTheme = (): Theme => {
    return createTheme({
      palette: {
        mode: this.darkMode ? "dark" : "light",
      },
    });
  };
}

export default ThemeStore;
