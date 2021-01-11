import jwt from 'jsonwebtoken'
import { IUser } from "../types";
import {jwtSecret} from "../config";

function createToken(user: IUser, callback: (error: Error | null, token: string | null) => void): void  {
   var timeSinceEpoch = new Date().getTime();
   const expireTime = 3600
   var expirationTime = timeSinceEpoch + Number(expireTime) * 100000 // in milliseconds
   var expirationTimeInSeconds = Math.floor(expirationTime / 1000)

   console.log(`Attempting to sign token for ${user.username}`)

   try {
      jwt.sign(
         user,
         jwtSecret,
         {
            algorithm: 'HS256',
            expiresIn: expirationTimeInSeconds
         },
         (error, token) => {
            if(error){
               callback(error, null)
            } else if (token) {
               callback(null, token)
            }
         }
      )
   } catch (error) {
      console.error(error.message, error)
      callback(error, null)
   }
}

export default createToken;


