import { createSlice } from "@reduxjs/toolkit";
import royImg from "../assets/roy.jpg";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Brovu",
    age: "19",
    about: "I am a web developer",
    avt: royImg,
    theme: "#80FF33",
    loading: false,
    error: false,
  },

  reducers: {
    updateLoading: (state) => {
      state.loading = true;
    },

    updateError: (state) => {
      state.loading = false;
      state.error = true;
    },

    updateSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avt = action.payload.avt;
      state.theme = action.payload.theme;
    },
  },
});
export const { updateLoading, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
