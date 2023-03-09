import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockModule } from './controllers/stock/stock.module';
import { Stock } from './schemas/stock/stock';
import { StockAdapterModule } from './adapters/stock/stock-adapter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ftt',
      database: 'postgres',
      entities: [Stock],
    }),
    StockModule,
    StockAdapterModule,
  ],
})
export class AppModule {}