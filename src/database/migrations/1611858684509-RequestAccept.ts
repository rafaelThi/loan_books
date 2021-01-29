import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class RequestAccept1611858684509 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'requests_accepts',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'id_request',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'id_book',
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
          {
            name: 'message',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            // unico que pode ser nulo pq sera editado pelo admin
            name: 'delivered',
            type: 'varchar(10)',
            isNullable: true,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'requests_accepts',
      new TableForeignKey({
        name: 'IdBook',
        columnNames: ['id_book'],
        referencedColumnNames: ['id'],
        referencedTableName: 'books',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'requests_accepts',
      new TableForeignKey({
        name: 'IdUser',
        columnNames: ['id_user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'requests_accepts',
      new TableForeignKey({
        name: 'IdAdmin',
        columnNames: ['id_admin'],
        referencedColumnNames: ['id'],
        referencedTableName: 'admins',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('requests_accepts');
  }
}
