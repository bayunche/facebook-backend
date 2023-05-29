import  {Context} from "koa"
import * as fs from "fs"
import { json } from "express";

export function logger() {
    return async (ctx:Context,next:()=> Promise <void>)=>{
        const start=Date.now();
        await next();
        const ms=Date.now()-start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms `)
        fs.appendFileSync("./log.txt",JSON.stringify(`${ctx.method} ${ctx.url} - ${ms}ms `))

    }
}