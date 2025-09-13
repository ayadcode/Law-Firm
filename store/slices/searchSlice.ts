import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchState = { q: string; category: "all" | "team" | "services" };
const initialState: SearchState = { q: "", category: "all" };

const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.q = action.payload;
    },
    setCategory(state, action: PayloadAction<SearchState["category"]>) {
      state.category = action.payload;
    },
  },
});

export const { setQuery, setCategory } = slice.actions;
export default slice.reducer;
