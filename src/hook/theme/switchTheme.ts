import { createAsyncThunk } from "@reduxjs/toolkit";

import { type RootState } from "@/store";

export const switchTheme = createAsyncThunk(
  "theme/switchTheme",
  async (_, { getState }) => {
    const { theme } = getState() as RootState;
    const { value } = theme;

    try {
      const isTheme = value === "light" ? "dark" : "light";

      document.documentElement.setAttribute("class", isTheme);
      localStorage.setItem("theme", isTheme);
      return isTheme;
    } catch (error) {
      throw new Error(" switch Theme ERROR:" + error);
    }
  }
);
