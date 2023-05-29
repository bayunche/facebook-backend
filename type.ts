import { type } from "os"

// 登录会请求的type
export type login ={
   userName:string,
   password:string

}
export type resign ={ 	
    userName:string,
    password:string,
    email:string,
    sex:string,
    birthday:Date,
    phone:number
    logoutTime:Date }

export type UserInfo ={
    userName:string, 		//用户名称
    sex:string,			//性别 - 男或女, 默认男, 可选值有男或女, 或空
    birday:Date,			//生日, 可选值有日期或空格或其他格式的日期或空格或
    

}
export type user = { 		//用户信息的类型, 可以是任意类型的对象或列表或列表
    userName:string,
    password:string,
    email:string,
    sex:string,
    birthday:Date,
    phone:number
    logoutTime:Date
}