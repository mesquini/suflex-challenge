import { IPaginator } from './../domain/repositories/interfaces/iproduct.dao';
import { PaginatedResult } from 'prisma-pagination';
import { DITokens } from '@common/enums/DITokens';
import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { IProductDao } from '../domain/repositories/interfaces/iproduct.dao';
import { IGetterProductService } from './interfaces/igetter-product.service';
import { alphabeticalSort, dueDateSort } from '@common/helpers/sortArray';

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

    products.data = dueDateSort(products.data);

    return products;
  }

  async listAlphabeticalSort(
    options: IPaginator,
  ): Promise<PaginatedResult<Product>> {
    const products = await this.productDatabaseDao.listAlphabeticalSort(
      options,
    );

    products.data = alphabeticalSort(products.data);

    return products;
  }
}
