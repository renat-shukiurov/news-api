import { Faker } from '@faker-js/faker';
import { define } from "typeorm-seeding";

import {Category} from "../../../category/entites/category.entity";

define(Category, (faker: Faker) => {
    const category = new Category();
    category.title = faker.company.bsNoun();

    return category;
});