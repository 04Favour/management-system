/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [ConfigModule, TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigService)=> ({
            type: `mysql`,
            port: configService.get<number>(`PORT`),
            host: configService.get(`HOST`),
            username: configService.get(`DB_USERNAME`),
            password: configService.get(`DB_PASSWORD`),
            database: configService.get(`DB_NAME`),
            synchronize: true,
            autoLoadEntities: true,
        }),
        inject: [ConfigService],
    })]
})
export class DatabaseModule {}
