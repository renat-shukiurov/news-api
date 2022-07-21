import {Controller, Get, NotFoundException, Param, ParseIntPipe} from '@nestjs/common';
import {NewsService} from "./news.service";
import {News} from "./news.entity";

@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {}

    @Get()
    async findAll() {
        return await this.newsService.getNews();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id) {
        const news:News = await this.newsService.findOne(id);
        if(!news) throw new NotFoundException();
    }

}
