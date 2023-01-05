import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';

export class ProductEntity implements Product {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  due_date: Date;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
}
