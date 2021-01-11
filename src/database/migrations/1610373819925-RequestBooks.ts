import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class RequestBooks1610373819925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'requestsbooks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name_book',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'id_user',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'id_admin',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'requestsbooks',
      new TableForeignKey({
        name: 'NameBook',
        columnNames: ['name_book'],
        referencedColumnNames: ['id'],
        referencedTableName: 'books',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'requestsbooks',
      new TableForeignKey({
        name: 'IdUser',
        columnNames: ['id_user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'requestsbooks',
      new TableForeignKey({
        name: 'IdAdmin',
        columnNames: ['id_admin'],
        referencedColumnNames: ['id'],
        referencedTableName: 'admins',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('requestBooks');
  }
}
