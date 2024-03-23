import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
  userName: string;
};

const initialState: User = {
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<{ userName: string }>) {
      state.userName = action.payload.userName;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
