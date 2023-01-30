import { User } from "../../models/user";
import { Request, Response } from "express";
import { FriendInvitation } from "../../models/friendInvitation";

export const postInvite = async (req: Request, res: Response) => {
  const { targetMailAddress } = req.body;
  const { userId, mail }: any = req.user;

  if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res
      .status(409)
      .send("Sorry. You cannot become friend with yourself");
  }

  const targetUser = await User.findOne({
    mail: targetMailAddress.toLowerCase(),
  });

  if (!targetUser) {
    return res
      .status(404)
      .send(
        `Friend of ${targetMailAddress} has not been found. Please check mail address.`
      );
  }

  // 이미 발송된 초대장인지 확인
  const invitationAlreadyReceived = await FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationAlreadyReceived) {
    return res.status(409).send("Invitation has been already sent");
  }

  // 이미 친구추가 되어진 유저인지 확인
  const usersAlreadyFriends = targetUser.friends.find(
    (friendId: any) => friendId.toString() === userId.toString()
  );

  if (usersAlreadyFriends) {
    return res
      .status(409)
      .send("Friend already added. Please check friends list");
  }

  // db에 새 초대 생성
  //   const newInvitation = await FriendInvitation.create({
  //     senderId: userId,
  //     receiverId: targetUser._id,
  //   });

  //   // TODO:초대 전송 성공 -> 친구추가 할 유저가 온라인 상태일 경우, 초대장 업데이트

  //   // 보류 중인 초대장 업데이트 후 전송
  //   friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());

  //   return res.status(201).send("Invitation has been sent");
};
