import { OrdersService } from './orders.service';
import { Controller, Get, Param, Patch } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAllOrders() {
    console.log('랜딩 페이지');
    return this.ordersService.getAllOrderItems();
  }

  @Patch('/:productOrderId/songJang')
  addSingleSongJang(
    @Param()
    { productOrderId },
  ) {
    console.log(productOrderId);
  }
}
