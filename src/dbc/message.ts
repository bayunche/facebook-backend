import { Entity,Column,PrimaryColumn } from "typeorm";

@Entity() 	// name of the table to be created in database, in this case "users"

export class Message {
 @PrimaryColumn()
 id: number; 	//id of the message, auto incremented, primary key, not nullable
 @Column()	// name of the column in the table, not nullable, not auto incremented, set to "text" for a text message
 userID: string; 	// name of the column in the table, not nullable, not auto incremented, set to "text" for a text message
 @Column()
 title: string; 	// name of the column in the table, not nullable, not auto incremented, set to "text" for a text message.
@Column()
context: string; 	// name of the column in the table, not nullable, not auto incremented, set to "text" for a text message
@Column()
createTime:Date; 
@Column()
favourite:number;
@Column()
idFavourite:string[]; 	// name of the column in the table, not nullable, not auto incremented, set to "text" for a


 }