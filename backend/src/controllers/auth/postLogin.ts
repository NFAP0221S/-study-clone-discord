import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const User = require("../../models/user");

export const postLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // send new token
      const token = "JWT_TOKEN";

      return res.status(200).json({
        userDetails: {
          email: user.email,
          token: token,
          username: user.username,
        },
      });
    }

    return res.status(400).send("### 유효하지 않은 이메일입니다.");
  } catch (err) {
    return res
      .status(500)
      .send("### 서버(login) 에러 발생!!! 다시 시도해주세요.");
  }
};
