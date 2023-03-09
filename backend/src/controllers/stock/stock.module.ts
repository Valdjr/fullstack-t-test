import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockAdapterModule } from 'src/adapters/stock/stock-adapter.module';
import { Stock } from 'src/schemas/stock/stock';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stock]),
    StockAdapterModule
  ],
  providers: [StockService],
  controllers: [StockController],
})
export class StockModule { }