import { Context } from "koa";
import { getManager } from "typeorm";

import { User } from "src/dbc/user";
export default class userDatabaseController {
 
    async getUserInfo(ctx:Context){
     const userRepository=getManager().getRepository(User);
     const user=await userRepository.findOne(ctx.params.id);
    }
}