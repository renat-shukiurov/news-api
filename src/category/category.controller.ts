import {Controller, Get, NotFoundException, Param, ParseIntPipe} from '@nestjs/common';
import {CategoryService} from "./category.service";
import {Category} from "./category.entity";

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) {}

    @Get()
    async findAll() {
        const categories:Category[] = await this.categoryService.getCategories();
        if (categories === undefined) return [];
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id) {
        const category = await this.categoryService.findOne(id);
        if (category === undefined) throw new NotFoundException();
    }

}
