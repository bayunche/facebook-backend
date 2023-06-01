import { Context } from "koa";
import {Posts} from "../dbc/posts"; //import db from db.ts, and then use db.get() and db.find() to access it.
import { getManager } from "typeorm";


// 定义一个getPost函数，用于获取帖子
var getPost=async function (ctx:Context) {
    // 获取请求体中的userId
    let {userId} = ctx.request.body;
    // 获取Posts表
    let post=getManager().getRepository(Posts);
    // 调用Posts表中的find方法，获取帖子，并且按照postedTime排序
    let posts=await post.find({relations:["user"],order: { postedTime: 'DESC' }})
    // 返回帖子和用户Id

    ctx.body={status:200,message:"ok",data:{posts}}



      
}

var sendPost= async function (ctx:Context) {
    let {userId,posts}=ctx.request.body;
    let post=getManager().getRepository(Posts); //get the comments table from typeorm.  It's a "repository" for a specific
    posts.userID=userId; //set the user id on each comment.  It's a one-to-one relationship.  One comment can only have one user
    await post.save(posts);
    ctx.body={status:200,message:"ok",data:{posts}}
    

}

var deletePost= async function (ctx:Context) { //delete comment from db, then send back comments from db.  It's a many-to-many
let {postId}=ctx.request.body; //get comment id from request body.  It's a string.  We can parse it with JSON.parse()
let post=getManager().getRepository(Posts); //get the comments table from typeorm.  It's a "repository" for a
await post.delete(postId).catch((err)=>{
    if(err){
        console.log(err);
        ctx.status=500; // internal server error.  probably a database problem.  probably a query problem.  probably a syntax problem.  probably a query that doesn
    }
})

ctx.body={status:200,message:"ok"}

}

var favouritePost =async function (ctx:Context) {
    let {postId}=ctx.request.body; //get comment id from request body.  It's a string.  We can parse it with JSON.parse()
    let post=getManager().getRepository(Posts);
    await post.update(postId,{})
}
