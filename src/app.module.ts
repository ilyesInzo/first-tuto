import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/_entities/user.entity';

@Module({
    controllers: [AppController],
    imports: [
        UserModule,
        ProductModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'user_db',
            entities: [User],
            synchronize: true,
        }),
    ],
})
export class AppModule { }
