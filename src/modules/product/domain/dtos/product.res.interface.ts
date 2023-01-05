import { ProductEntity } from './../entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { PaginatedResult } from 'prisma-pagination';

class Meta {
  @ApiProperty()
  total: number;
  @ApiProperty()
  lastPage: number;
  @ApiProperty()
  currentPage: number;
  @ApiProperty()
  perPage: number;
  @ApiProperty()
  prev: number;
  @ApiProperty()
  next: number;
}

export class ProductResponsePaginate implements PaginatedResult<Product> {
  @ApiProperty({
    isArray: true,
    type: ProductEntity,
  })
  data: Product[];

  @ApiProperty()
  meta: Meta;
}
