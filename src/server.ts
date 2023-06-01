// 引入依赖
import Koa from 'koa'; // koa-static, koa-body, koa-session, koa-validate, koa-static-
import { Context } from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { logger } from './logger';
import Router from 'koa-router';
import { createConnection } from 'typeorm';
import "reflect-metadata"
// const Koa=require("koa");
// const bodyParser=require("koa-bodyparser")


import { login, register } from "./controller/auth"
import { getUserInfo, changeUserInfo } from "./controller/user" 				//用户信息获取函数


createConnection().then(() => {
  // 初始化 Koa 应用实例
  const app = new Koa();
  const router = new Router(); // 创建路由对象，用于处理请求数据的根部。 这个对象可以

  // 注册中间件
  app.use(cors());
  app.use(bodyParser());
  app.use(logger());

  // 接口定义
  // app.use((ctx: any) => {
  //   ctx.body = 'Hello Koa';
  // });
  router.post("/login", async (ctx: any) => {
    login(ctx)
  }) 	// 定义访问路径 /login 的函数 或者 函数名称
  router.post("/resign", async (ctx: any) => {
    register(ctx)
  })
  router.get("/getUserInfo", async (ctx: any) => {
    getUserInfo(ctx)
  })


  router.post("/changeUserInfo", async (ctx: any) => {
    changeUserInfo(ctx)
  })


// 运行服务器
app.listen(() => {
  console.log('后端服务启动成功');
}, 3308);

}).catch ((err) => {
  console.log("数据库链接出错" + err);

})

