import mongoose, { Schema } from "mongoose";

interface IFriend {
  senderId: Schema.Types.ObjectId;
  receiverId: Schema.Types.ObjectId;
}

const postFriendInvitationSchema = new Schema<IFriend>({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const FriendInvitation = mongoose.model(
  "FriendInvitation",
  postFriendInvitationSchema
);
