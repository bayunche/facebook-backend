// 创建user控制器
import { Context } from "koa";
import { getManager } from "typeorm";
import {User}from "../dbc/user"
import * from "koa-bodyparser"

var getUserInfo = async function (ctx: Context) { 
   
    //ctx.state is a typeguard...  //ctx.state.user is a typeguard...  //ctx
    let {userId}= await ctx.request.body;
      //ctx.request.body is a typeguard...  //ctx.request.body.userId is a typeguard...  //
      let userRepository=getManager().getRepository(User);  //getRepo...  //userRepo is a typeguard...  //ctx.request.body.
      let userInfo= await userRepository.findOne(userId);  //findOne...  //userInfo is a typeguard...  //ctx.request.body
      if (userInfo===null) {
        ctx.status =404;  //not found  //ctx.throw(404, "user not found");  //Throw an error  //ctx.status
       }else{
        ctx.body={code:200,message: "OK",data: {userInfo}};  //return userInfo  //ctx.throw(200, "user found");  //Return userInfo  //ctx.status
       }
        //if userInfo is defined...  //ctx.state.user is a typeguard...  //ctx.request.

}

var changeUserInfo= async function (ctx:Context) {
  // changeType代表修改用户信息的类型，0为删除，1为添加，2为修改
   let {userId,changeType,userInfo}=await ctx.request.body;  //ctx.request.body is a typeguard...  //ctx.request.body.user
   let userRepository=getManager().getRepository(User);  //getRepo...  //userRepo is a typeguard...  //ctx.request.body.  //userRepo is a typeguard...  //ctx.request.body.userId is a typeguard...  //ctx.request.body.user  //ctx.request.body.userId is a typeguard...  //ctx.request.body.user.  //ctx.request.body.user.id is a typeguard...  //ctx.request.body.user.name is a typeguard
  switch (changeType) {
    case 0:
      await userRepository.delete(userId).catch((err):void=>{
      if(err){
        ctx.status=500;  //server error  //ctx.throw(500, "server error");  //Throw an error  //ctx.status  //ctx.body  //ctx.stack  //ctx.message  //ctx.err  //ctx.err.message  //ctx.err.stack  //ctx.err.inner  //ctx.err.stacktrace  //ctx.err.stack  //ctx.err.type  //ctx.err.name  //ctx.err.message  //ctx.err.stack  //ctx.err.getMessage  //ctx.
        console.log(err);  //console.log(err)  //console.error(err)  //console.error(err.message)
      }else{
        ctx.status=200;

      }
      })
      
      break;
      
      case 1:  //add user  //ctx.request.body.user.name is a typeguard...  //ctx.request.body.user
      await userRepository.save(userId,userInfo).then((userInfo) :void => {
        ctx.body = userInfo;  //ctx.request.body.user  //ctx.request.body.userId is a typeguard...  //ctx.request.body.user.  //ctx.request.body.user.id is a typeguard...  //ctx.request.body.user.name is a typeguard...  //ctx.request.body.user.name  //ctx.request.body.user.id is a typeguard...  //ctx.request.body.user.name  //ctx.request.body.user.id is a typeguard...
        ctx.status = 200;  //ok  //ctx.throw(200, "ok");  //ctx.status  //ctx.body  //ctx
        
      }).catch((err):void=>{  //save...  //ctx.request.body.userId is a type
      if (err) {
        console.log(err)
        ctx.status=500;  //server error  //ctx.throw(500, "server error");  //Throw an error  //ctx.status  //ctx
        console.log(err);  //console.error(err)  //console.error(err.message)  //console.error(err.

      }
      })
      break;

      case 2:
        let id= userId
        await userRepository.update(id,userInfo).catch((err) :void => {
          if(err){
            console.log(err);
            ctx.status=500;  //server error  //ctx.throw(500, "server error");  //Throw an error  //ctx.status
           
          }
        })
        ctx.body = userInfo;  //ctx.request.body.userId is a typeguard...  //ctx.request.body.user.
  }


}

export {getUserInfo,changeUserInfo}

