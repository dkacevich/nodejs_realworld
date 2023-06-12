import {Module} from "@nestjs/common";
import {UsersModule} from './users/users.module';
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";


@Module({
    imports: [
        ConfigModule.forRoot({
           envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [],
            autoLoadModels: true
        }),
        UsersModule
    ]
})
export class AppModule {
}
