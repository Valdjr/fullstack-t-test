import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stock } from 'src/schemas/stock/stock';
import { Repository } from 'typeorm';


@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRepository: Repository<Stock>,
  ) {}

  findAll(): Promise<Stock[]> {
    return this.stockRepository.find();
  }
}