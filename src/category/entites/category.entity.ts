import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {IsString} from 'class-validator';
import {News} from "../../news/entites/news.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsString()
    title: string

    @OneToMany(() => News, (news) => news.category)
    news: News[]
}