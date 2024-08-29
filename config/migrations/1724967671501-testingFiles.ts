/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class TestingFiles1724967671501 implements MigrationInterface {
    name = 'TestingFiles1724967671501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todolist\` ADD \`UserId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`todolist\` DROP FOREIGN KEY \`FK_02f35567d303922800cac486cd4\``);
        await queryRunner.query(`ALTER TABLE \`todolist\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`todolist\` ADD \`userId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`todolist\` ADD CONSTRAINT \`FK_02f35567d303922800cac486cd4\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todolist\` DROP FOREIGN KEY \`FK_02f35567d303922800cac486cd4\``);
        await queryRunner.query(`ALTER TABLE \`todolist\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`todolist\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`todolist\` ADD CONSTRAINT \`FK_02f35567d303922800cac486cd4\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`todolist\` DROP COLUMN \`UserId\``);
    }

}
