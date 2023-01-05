import { ProductResponsePaginate } from './domain/dtos/product.res.interface';
import {
  DueDateProductQuery,
  PaginateProductQuery,
} from './domain/dtos/product.req.interface';
import { PaginatedResult } from 'prisma-pagination';
import { IGetterProductService } from './services/interfaces/igetter-product.service';
import { Product } from '@prisma/client';
import { DITokens } from '@common/enums/DITokens';
import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(
    @Inject(DITokens.ProductGetterService)
    private readonly productGetterService: IGetterProductService,
  ) {}

  @Get('alphabetical')
  @ApiOkResponse({
    type: ProductResponsePaginate,
  })
  @ApiOperation({ summary: 'Show all products in alphabetical order' })
  listAlphabeticalSort(
    @Query() page: PaginateProductQuery,
  ): Promise<PaginatedResult<Product>> {
    return this.productGetterService.listAlphabeticalSort(page);
  }

  @Get('due-date')
  @ApiOkResponse({
    type: ProductResponsePaginate,
  })
  @ApiOperation({ summary: 'Show all products in due date order' })
  listDueDateSort(
    @Query() data: DueDateProductQuery,
  ): Promise<PaginatedResult<Product>> {
    return this.productGetterService.listDueDateSort(data);
  }
}
