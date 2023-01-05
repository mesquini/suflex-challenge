import { Product } from '@prisma/client';
import { PaginatedResult } from 'prisma-pagination';

export interface IPaginator {
  perPage?: number;
  page?: number;
}

export interface IPaginatorDueDate extends IPaginator {
  dueDate?: number;
}

export interface IProductDao {
  listDueDateSort(
    options?: IPaginatorDueDate,
  ): Promise<PaginatedResult<Product>>;
  listAlphabeticalSort(options?: IPaginator): Promise<PaginatedResult<Product>>;
}
