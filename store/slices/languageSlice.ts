import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LanguageState = { lang: "en" | "ar" };
const initialState: LanguageState = {
  lang:
    typeof window !== "undefined"
      ? (localStorage.getItem("lang") as "en" | "ar") || "en"
      : "en",
};

const slice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<"en" | "ar">) {
      state.lang = action.payload;
      if (typeof window !== "undefined")
        localStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLanguage } = slice.actions;
export default slice.reducer;
