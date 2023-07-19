import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    img: "",
  },
  reducers: {
    getUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.img = action.payload.imageUrl;
    },
  },
});

export const userActons = userSlice.actions;

export default userSlice.reducer;
