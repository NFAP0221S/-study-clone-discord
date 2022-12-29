import { Request, Response } from "express";

export const postLogin = async (req: Request, res: Response) => {
  res.send("login route");
};
