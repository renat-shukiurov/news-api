import { Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';

import { News } from '../../../news/entites/news.entity';

define(News, (faker: Faker) => {
  const news = new News();

  news.title = faker.lorem.words(Math.floor(Math.random() * 10 + 5));
  news.full_description = faker.lorem.words(
    Math.floor(Math.random() * 100 + 200),
  );
  news.short_description = faker.lorem.words(
    Math.floor(Math.random() * 10 + 5),
  );
  news.date = faker.date.past();
  news.image = faker.image.animals(200, 200, true);
  news.likes = Math.floor(Math.random() * 2000000);

  return news;
});
