import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const fetchData = createAsyncThunk ('fetchdata', () => {
//   const res =
// })

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
