import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {IsString, IsInt} from 'class-validator';
import {Category} from "../category/category.entity";

@Entity()
export class News {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsString()
    image: string

    @Column()
    @IsString()
    title: string

    @Column()
    date: Date;

    @Column()
    @IsString()
    short_description: string

    @Column()
    @IsString()
    full_description: string

    @Column()
    @IsInt()
    likes: number

    @ManyToOne(() => Category, (category) => category.news)
    category: Category

}