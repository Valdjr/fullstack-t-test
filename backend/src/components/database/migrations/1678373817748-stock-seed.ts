import { MigrationInterface, QueryRunner } from "typeorm"

export class stockSeed1678373817748 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE "stock" (id integer PRIMARY KEY, symbol varchar(10), currentprice float)`,
        );
        await queryRunner.query(
            `INSERT INTO stock (id, symbol, currentprice) VALUES
            (1, 'PETR4', 28.44),
            (2, 'MGLU3', 25.91),
            (3, 'VVAR3', 25.91),
            (4, 'SANB11', 40.77),
            (5, 'TORO4', 115.98)`,
        )
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "stock"`);
      }

}
