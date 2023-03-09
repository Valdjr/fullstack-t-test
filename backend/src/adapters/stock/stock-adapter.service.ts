import { Injectable } from '@nestjs/common';
import { Stock } from 'src/schemas/stock/stock';
import { StockResponse } from 'src/schemas/stock/stock-response';

@Injectable()
export class StockAdapterService {
  schemaToResponse(stockSchema: Stock): StockResponse {
    return {
      symbol: stockSchema.symbol,
      currentPrice: stockSchema.currentprice
    }
  }
}
