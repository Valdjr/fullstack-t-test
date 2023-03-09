import { Controller, Get } from '@nestjs/common';
import { StockAdapterService } from 'src/adapters/stock/stock-adapter.service';
import { StockResponse } from 'src/schemas/stock/stock-response';
import { StockService } from './stock.service';

@Controller('stocks')
export class StockController {
  constructor(
    private stockService: StockService,
    private stockAdapter: StockAdapterService
  ) { }

  @Get()
  async findAll(): Promise<StockResponse[]> {
    const stocks = await this.stockService.findAll()
    return stocks.map(stock => this.stockAdapter.schemaToResponse(stock))
  }
}