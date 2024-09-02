/* eslint-disable prettier/prettier */
import { ConfigService } from "@nestjs/config"
import { config } from "dotenv"
import { DataSource, DataSourceOptions } from "typeorm"

config()

const configService = new ConfigService()

export const dataSourceOptions: DataSourceOptions=({
    type: `mysql`,
    port: configService.get<number>(`DB_PORT`),
    host: configService.get(`HOST`),
    username: configService.get(`DB_USERNAME`),
    password: configService.get(`DB_PASSWORD`),
    database: configService.get(`DB_NAME`),
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/config/migrations/*.js'],
    synchronize: false,
    // synchronize: true,
})
const dataSource = new DataSource(dataSourceOptions)
export default dataSource;