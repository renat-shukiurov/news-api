import { Faker } from '@faker-js/faker';
import { define } from "typeorm-seeding";

import {Category} from "../../../Category/category.entity";

define(Category, (faker: Faker) => {
    const category = new Category();
    category.title = faker.company.bsNoun();

    return category;
});