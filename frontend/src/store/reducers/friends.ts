import { createSlice } from "@reduxjs/toolkit";
import { sendFriendInvitation } from "../actions/friendsAction";

interface friendsProps {
  friends: string[];
  pendingFriendsInvitations: string[];
  onlineUsers: string[];
}

const initialState: friendsProps = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setPendingFriendsInvitations(state, action) {
      state.pendingFriendsInvitations.push(action.payload);
    },
    setFriends(state, action) {
      state.friends.push(action.payload);
    },
    setOnlineUsers(state, action) {
      state.onlineUsers.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(sendFriendInvitation.pending, (state) => {
        state.pendingFriendsInvitations = [];
      })
      .addCase(sendFriendInvitation.fulfilled, (state, action) => {
        state.pendingFriendsInvitations.push(action.payload);
      })
      .addCase(sendFriendInvitation.rejected, (state) => {
        state.pendingFriendsInvitations = [];
      }),
});

export const {} = friendsSlice.actions;
export default friendsSlice.reducer;
// export const alertAction = alertSlice.actions;
