import { IPaginator } from './../domain/repositories/interfaces/iproduct.dao';
import { PaginatedResult } from 'prisma-pagination';
import { DITokens } from '@common/enums/DITokens';
import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { IProductDao } from '../domain/repositories/interfaces/iproduct.dao';
import { IGetterProductService } from './interfaces/igetter-product.service';

@Injectable()
export class GetterProductService implements IGetterProductService {
  constructor(
    @Inject(DITokens.ProductDatabaseDao)
    private readonly productDatabaseDao: IProductDao,
  ) {}

  async listDueDateSort(
    options?: IPaginator,
  ): Promise<PaginatedResult<Product>> {
    const products = await this.productDatabaseDao.listDueDateSort(options);

    products.data = products.data.sort(
      (a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime(),
    );

    return products;
  }

  async listAlphabeticalSort(
    options: IPaginator,
  ): Promise<PaginatedResult<Product>> {
    const products = await this.productDatabaseDao.listAlphabeticalSort(
      options,
    );

    products.data = products.data.sort((a, b) => a.name.localeCompare(b.name));

    return products;
  }
}
