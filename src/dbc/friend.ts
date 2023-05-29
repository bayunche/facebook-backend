import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity() // name of the table to be created in the database, in this case "Friend"

export class friend {
    @PrimaryGeneratedColumn()
    id: string;
    @Column() // name of the column in the table "friend" (same as the name of the class)
    userId: string;
    @Column("varchar2", { array: true })
    friend: string[];



}