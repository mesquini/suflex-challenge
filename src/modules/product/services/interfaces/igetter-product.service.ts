import { IPaginator } from './../../domain/repositories/interfaces/iproduct.dao';
import { PaginatedResult } from 'prisma-pagination';
import { Product } from '@prisma/client';

export interface IGetterProductService {
  listAlphabeticalSort(options?: IPaginator): Promise<PaginatedResult<Product>>;
  listDueDateSort(options?: IPaginator): Promise<PaginatedResult<Product>>;
}
