import {Controller, Get, NotFoundException, Param, ParseIntPipe, Query} from '@nestjs/common';
import {NewsService} from "./news.service";
import {News} from "./entites/news.entity";

@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {}

    @Get()
    findAll(
        @Query('categoryId') categoryId,
        @Query('page') page = 1,
        @Query('limit') limit = 10
    ) {
        limit = limit > 10 ? 10 : limit;
        return this.newsService.getNews(categoryId, {page,limit});
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id) {
        const news:News = await this.newsService.findOne(id);
        if(!news) throw new NotFoundException();
    }

}
