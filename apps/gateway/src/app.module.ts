import { ClientsModule, Transport } from '@nestjs/microservices';
import { APP } from '@app/common/consts';
import { Module } from '@nestjs/common';
import { join } from 'path';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register({
      clients: [
        {
          name: APP.SERVICE.PACKAGE.SYMBOL,
          transport: Transport.GRPC,
          options: {
            package: APP.SERVICE.PACKAGE.NAME,
            url: `${APP.SERVICE.HOST}:${APP.SERVICE.GRPC_PORT}`,
            protoPath: join(__dirname, 'protobuf/services.proto'),
          },
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
