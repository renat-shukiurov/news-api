import { Injectable } from '@nestjs/common';
import { News } from './entites/news.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private newsRepository: Repository<News>,
  ) {}

  async getNews(
    categoryId: number,
    options: IPaginationOptions,
  ): Promise<Pagination<News>> {
    const query = this.newsRepository
      .createQueryBuilder('news')
      .leftJoinAndSelect('news.category', 'category')
      .select([
        'news.id',
        'news.image',
        'news.title',
        'news.date',
        'news.short_description',
        'news.likes',
        'category',
      ]);

    if (categoryId > 0) {
      query.where('news.category = :id', { id: categoryId });
    }

    return paginate<News>(query, options);
  }

  async findOne(id: number): Promise<News | undefined> {
    return await this.newsRepository
      .createQueryBuilder('news')
      .leftJoinAndSelect('news.category', 'category')
      .select([
        'news.image',
        'news.title',
        'news.full_description',
        'news.likes',
        'category',
      ])
      .where('news.id = :id', { id })
      .getOne();
  }
}
