import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "userloggedin",
  initialState: false,
  reducers: {
    setUserLoggedIn: (state, action) => {
        return action.payload;
      },
      setUserLoggedOut: (state, action) => {
        return action.payload;
      },
  },
});
export const { setUserLoggedIn, setUserLoggedOut } = loginSlice.actions;
export default loginSlice.reducer;