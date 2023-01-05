import { ProductDatabaseDao } from './domain/repositories/product.database.dao';
import { GetterProductService } from './services/getter-product.service';
import { ProductController } from './product.controller';
import { DITokens } from '@common/enums/DITokens';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  exports: [],
  controllers: [ProductController],
  providers: [
    {
      provide: DITokens.ProductGetterService,
      useClass: GetterProductService,
    },
    {
      provide: DITokens.ProductDatabaseDao,
      useClass: ProductDatabaseDao,
    },
  ],
})
export class ProductModule {}
