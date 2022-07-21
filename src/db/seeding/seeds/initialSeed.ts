import { Factory, Seeder } from 'typeorm-seeding';

import { Category } from '../../../category/entites/category.entity';
import { News } from '../../../news/entites/news.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory) {
    const categories = await factory(Category)().createMany(5);

    await factory(News)()
      .map(async (news) => {
        news.category =
          categories[Math.floor(Math.random() * categories.length)];
        return news;
      })
      .createMany(20);
  }
}
