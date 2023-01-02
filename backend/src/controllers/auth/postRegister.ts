import { Request, Response } from "express";
import bcrypt from "bcryptjs";
const User = require("../../models/user");

export default async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // user email이 존재하는지 check
    const userExists = await User.exists({ email: email.toLowerCase() });

    if (userExists) {
      return res.status(409).send("### 이미 사용중인 이메일입니다.");
    }

    // 받아온 password 값을 bcrypt를 사용하여 암호화
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // create JWT token
    const token = "JWT TOKEN";

    res.status(201).json({
      userDetails: {
        email: user.email,
        token: token,
        username: user.username,
      },
    });
  } catch (err) {
    return res
      .status(500)
      .send("### 서버(register) 에러 발생!!! 다시 시도해주세요.");
  }
};
