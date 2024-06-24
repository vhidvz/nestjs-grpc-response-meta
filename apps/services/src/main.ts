import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { APP } from '@app/common/consts';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const rpcUrl = `0.0.0.0:${APP.SERVICE.GRPC_PORT}`;
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: rpcUrl,
      package: APP.SERVICE.PACKAGE.NAME,
      protoPath: join(__dirname, 'app.proto'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(APP.SERVICE.API_PORT);
}
bootstrap();
