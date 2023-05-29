// 注册登录控制器
import { Context } from "koa";
import { getManager } from "typeorm";
import { User } from "src/dbc/user";
import * as argon from "argon2"

var login = async  (ctx: Context) :Promise<void> => {
   var { userName, password } = ctx.request.body; //get the data from the request object

   let loginUser = new User
   let hashedPass = argon.hash(password); //get the hased password from the user object
   let userManager = getManager().getRepository(loginUser);
   loginUser.password = hashedPass //get the ORM manager object from the ORM library
   let user: User = await userManager.findOne(loginUser); //find the user object with the given username
   if (user) {
     ctx.status = 200; //status code 200 is ok. It means that the user was found and the password was correct.
     ctx.body = user; //send the user object back to the client.
   } else {
      ctx.status = 400; //status 400 = Bad request, the username or password is incorrect.  We need to add a message to the response object.  We
      
   }
}

   var  register = async (ctx: Context) :Promise<void>=> {

      var { userName, phoneNumber, password, birthday, email, sex } = ctx.body;
      const userRepository = getManager().getRepository(User);
      let registerUser = new User;
      let hashPass = argon.hash(password);//this function will return a promise

      registerUser.userName = userName;//username is the only required field for a user.
      registerUser.phoneNumber = phoneNumber;//phoneNumber is optional.
      registerUser.password = hashPass;//password is required for a user.
      registerUser.birthday = birthday;//birthday is optional.
      registerUser.email = email;//email is optional.
      registerUser.sex = sex;//sex is optional.
      registerUser.resignTime = Date.now();
      await userRepository.save(registerUser);//save the user to the database.
      ctx.body = registerUser;//send the user to the response.
      ctx.status = 201;//201 is the HTTP status code for a "created" resource.  It means the client created the resource.  It is

   }


export {register,login} 
