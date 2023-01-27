import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  // extraReducers: (builder) => builder,
});

export const {} = friendsSlice.actions;
export default friendsSlice.reducer;
// export const alertAction = alertSlice.actions;
