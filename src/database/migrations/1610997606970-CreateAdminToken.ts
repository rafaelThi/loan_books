import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAdminToken1610997606970 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'admin_tokens',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'token',
            type: 'uuid',
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'id_admin',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'TokenUser',
            referencedTableName: 'admins',
            referencedColumnNames: ['id'],
            columnNames: ['id_admin'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('admin_tokens');
  }
}
