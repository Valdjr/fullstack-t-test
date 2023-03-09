import { Module } from '@nestjs/common';
import { StockAdapterService } from './stock-adapter.service';

@Module({
  providers: [StockAdapterService],
  exports: [StockAdapterService]
})
export class StockAdapterModule {}
