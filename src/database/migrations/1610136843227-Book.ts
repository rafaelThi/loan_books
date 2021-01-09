import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class Book1610136843227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',

          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'author',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'language',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'amount',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'owner_id',
            type: 'uuid',
            isNullable: true,
          },
        ],

      }),
    );
    await queryRunner.createForeignKey(
      'books',
      new TableForeignKey({
        name: 'BookOwner',
        columnNames: ['owner_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'admins',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books');
  }
}
