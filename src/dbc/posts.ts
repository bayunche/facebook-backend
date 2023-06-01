import { Context } from "koa"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user';

@Entity() // 这里使用 table-name: users 表示使用 USERS 表格。不要使用自己的

export class Posts {
    @PrimaryGeneratedColumn() // 这里使用 auto_increment 自动装配列表中的值。如果不提供，则可以使用主键列表中的值。 不要使用自动装配列表中的值，请使用主键列表中的值。 这个列是可选的。 不要使用自动装配列表中的值，请使用主键列表中的值。 这个列是可选的。 不要使用自动装配列
// 这里使用 auto_increment 自动装配列表中的值。如果不提供，则可以使用主键列表中的值。 不要使用自动装配列表中的值，请使用主键列表中的值。 这个列是可选的。 不要使用自动装配列
    id: number;
    @Column({ type: 'varchar', length: 255 }) // 这里使用 varchar(255) 类型的列。
    content: string; // 这个列是可选的。不要使用此列，请使用字符串。 这个列是
    @CreateDateColumn() // 这里使用日期格式化的列。不要使用此列，使用字符串。
    postedTime: Date; // 这个列是可选的。不要使用此列，使用日期格式化的列。 这
    @Column()
    favourite:number;
    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({ name: 'userId' })
    user: User;

} 	// 这里使用 primary-key: id 表示使用 PRIMARY-KEY (id) 。