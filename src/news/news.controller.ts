import {Controller, Get, NotFoundException, Param, ParseIntPipe} from '@nestjs/common';
import {NewsService} from "./news.service";
import {News} from "./news.entity";

@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {}

    @Get()
    async findAll() {
        const news:News[] = await this.newsService.getNews();
        if (news === undefined) return [];
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id) {
        const news:News = await this.newsService.findOne(id);
        if(news === undefined) throw new NotFoundException();
    }

}
