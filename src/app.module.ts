import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

const mongoUri =
  'mongodb+srv://kanistra50:KheraKhari37$@cluster0.1yjjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
