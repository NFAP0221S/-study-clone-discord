import { Request, Response } from "express";

export const postRegister = async (req: Request, res: Response) => {
  res.send("register route");
};
