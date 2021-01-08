import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAdmin1610136338736 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'admins',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'fullNameAdmin',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'emailAdmin',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'passwordAdmin',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('admins');
  }
}
