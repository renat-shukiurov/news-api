import {Controller, Get, NotFoundException, Param, ParseIntPipe} from '@nestjs/common';
import {CategoryService} from "./category.service";
import {Category} from "./entites/category.entity";

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) {}

    @Get()
    async findAll() {
        return await this.categoryService.getCategories();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id) {
        const category:Category = await this.categoryService.findOne(id);
        if (!category) throw new NotFoundException();

        return category;
    }

}
