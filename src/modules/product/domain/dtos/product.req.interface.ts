import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class PaginateProductQuery {
  @IsOptional()
  @ApiProperty()
  @IsNumberString()
  page: number;

  @IsOptional()
  @ApiProperty()
  @IsNumberString()
  perPage: number;
}

export class DueDateProductQuery extends PaginateProductQuery {
  @ApiProperty()
  @IsNumberString()
  dueDate: number;
}
