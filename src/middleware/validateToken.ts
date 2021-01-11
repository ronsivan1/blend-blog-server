import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";
import { HttpStatusEnum } from "../types";

export interface TokenDataStore {
  id: string;
  username: string;
}

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  console.log("Validating Token")

  let token = req.headers.authorization?.split(' ')[1];

  if(token) {
    jwt.verify(token, jwtSecret, (error, decoded) => {
      if(error) {
        return res.status(HttpStatusEnum.NOT_FOUND).json({
          message: error.message,
          error
        })
      } else {
        req.user_ID = (decoded as TokenDataStore).id;
        next();
      }
    })
  } else {
    return res.status(HttpStatusEnum.UNAUTHORIZED).json({
      message: 'Unauthorized'
    })
  }
}

export default validateToken
