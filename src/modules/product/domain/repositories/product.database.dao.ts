import { addDays, format } from 'date-fns';
import { PrismaService } from './../../../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import {
  IPaginator,
  IPaginatorDueDate,
  IProductDao,
} from './interfaces/iproduct.dao';
import { Prisma, Product } from '@prisma/client';
import { PaginatedResult, createPaginator } from 'prisma-pagination';

const paginate = createPaginator({});

@Injectable()
export class ProductDatabaseDao implements IProductDao {
  constructor(private prismaClient: PrismaService) {}

  listAlphabeticalSort({
    page = 1,
    perPage = 20,
  }: IPaginator): Promise<PaginatedResult<Product>> {
    return paginate<Product, Prisma.ProductFindManyArgs>(
      this.prismaClient.product,
      {},
      {
        perPage,
        page,
      },
    );
  }

  async listDueDateSort({
    page = 1,
    perPage = 20,
    dueDate,
  }: IPaginatorDueDate): Promise<PaginatedResult<Product>> {
    return paginate<Product, Prisma.ProductFindManyArgs>(
      this.prismaClient.product,
      {
        where: {
          due_date: {
            equals: format(
              addDays(new Date(), dueDate),
              "yyyy-MM-dd'T00:00:00.000Z'",
            ),
          },
        },
      },
      {
        perPage,
        page,
      },
    );
  }
}
