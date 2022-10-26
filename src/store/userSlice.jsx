import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "anhductran1810@gmail.com",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    user: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});

export const { user } = userSlice.actions;
export default userSlice.reducer;
