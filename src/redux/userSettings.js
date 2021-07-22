import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userSettings",
  initialState: {
    language: undefined,
    since: "daily",
    sortByStars: "asc" ,
  },
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setSince(state, action) {
      state.since = action.payload;
    },
    toggleSort(state) {
      state.sortByStars = state.sortByStars === "desc" ? "asc" : "desc";
    },
  },
});
export const {setLanguage, setSince, toggleSort} = slice.actions
export default slice.reducer;
