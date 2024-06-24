import { NestFactory } from '@nestjs/core';
import { APP } from '@app/common/consts';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(+APP.GATEWAY.API_PORT || 3000);
}
bootstrap();
