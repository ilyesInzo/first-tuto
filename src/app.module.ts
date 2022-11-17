import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
    controllers: [AppController],
    imports: [UserModule, ProductModule],
})
export class AppModule { }
