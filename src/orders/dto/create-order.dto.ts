import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { OrderStatus, orderStatusList } from '../enum/order.enum';

export class CreateOrderDto {
  @IsPositive()
  @IsNumber()
  totalAmount: number;

  @IsPositive()
  @IsNumber()
  totalItems: number;

  @IsEnum(orderStatusList, {
    message: `Possible status values are ${orderStatusList}`,
  })
  @IsOptional()
  status: OrderStatus = OrderStatus.PENDING;

  @IsBoolean()
  @IsOptional()
  paid: boolean = false;
}
