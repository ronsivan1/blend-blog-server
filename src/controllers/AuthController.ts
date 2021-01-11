import argon2 from "argon2";
import { Request, Response } from "express";
import { getRepository, getConnection } from "typeorm";
import { HttpStatusEnum, IUser, IUserInput } from "../types";
import { User } from "../entity/User";
import createToken from '../functions/createToken'
class AuthController {
  static validateToken = (req: Request, res: Response) => {
    console.log("Token validated, user authorized")

    return res.status(HttpStatusEnum.SUCCESS).json({
      message: "Token validated"
    });
  };

  static login = async (req: Request, res: Response) => {
    let {username, password} = req.body;
    console.log(username, password);
    if (!(username && password)) {
      return res.status(HttpStatusEnum.BAD_REQUEST).json("Empty fields");
    }

    let user = await getRepository(User)
       .createQueryBuilder("user")
       .where("user.username = :username", {username: username})
       .addSelect("user.password")
       .getOne();

    if (!user) {
      return res.status(HttpStatusEnum.BAD_REQUEST).json("User not found");
    }

    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return res.status(HttpStatusEnum.BAD_REQUEST).send("Incorrect password");
    }

    let userResponse: IUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    await createToken(userResponse, (error, token) => {
      if (error) {
        console.error("Unable to sign token: ", error)

        return res.status(HttpStatusEnum.UNAUTHORIZED).json("Unauthorized")
      } else if (token) {
        return res.status(HttpStatusEnum.SUCCESS).json({
          message: "Auth Successful",
          token,
          user: userResponse
        });
      }
    });

    //return res.status(HttpStatusEnum.SERVER_ERROR).json("Failed to create token");
  };

  static register = async (req: Request, res: Response): Promise<Response> => {
    let {email, password, username} = req.body;
    let userInput: IUserInput = {
      email: email,
      username: username,
      password: password,
    };

    const hashedPass = await argon2.hash(userInput.password);
    userInput.password = hashedPass;
    try {
      await getConnection()
         .createQueryBuilder()
         .insert()
         .into(User)
         .values(userInput)
         .execute();
    } catch (error) {
      return res.status(HttpStatusEnum.FORBIDDEN).json({error: error});
    }
    return res.status(HttpStatusEnum.SUCCESS_NO_CONTENT).json("User created");
  };
}

export default AuthController
