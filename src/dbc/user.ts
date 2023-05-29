import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    userName: string;
    @Column() 		//  @Column(type="varchar2", length=30) 描述: 指定字段类型
    password: string;
    @Column() 		//  @Column(type="varchar2", length=30) 描述: 指定字段
    email: string;
    @Column() 		//  @Column(type="varchar2", length=30) 描述: 指定字段
    sex: string;
    @Column() 		//  @Column(type="varchar2", length=30) 描述: 指定字段类
    birthday: string;
    @Column()
    loginTime: Date;
    @Column()
    phone: number;
    @Column()
    signature: string;
    @Column()
    resignTime: string; 		//  @Column(type="jsonb", nullable=true) 描述: 指定字段的json
    //  @Column(type="varchar2", length=30) 描述: 指定字段类


    //auto increse  id 	int4, 	NOT NULL, 	PRIMARY KEY (
}	//Address类型是主键ID，名称叫做id，数据类型叫做bigint，在数