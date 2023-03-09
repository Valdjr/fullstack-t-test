import { DataSource } from 'typeorm';
import { Stock } from './src/schemas/stock/stock';
import { stockSeed1678373817748 } from './src/components/database/migrations/1678373817748-stock-seed';


export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ftt',
  database: 'postgres',
  entities: [Stock],
  migrations: [stockSeed1678373817748]
});