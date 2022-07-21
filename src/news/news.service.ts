import { Injectable } from '@nestjs/common';
import {News} from "./news.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(News) private newsRepository: Repository<News>,
    ) {}

    async getNews(): Promise<News[]> {
        return await this.newsRepository.find();
    }

    async findOne(id: number): Promise<News | undefined> {
        return await this.newsRepository.findOneBy({id});
    }

}
