import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { Meta } from '@app/common/decorators';
import { Metadata } from '@grpc/grpc-js';
import { APP } from '@app/common/consts';

import { AppService } from './app.service';

@GrpcService()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod(APP.SERVICE.NAME)
  getHello(@Meta() meta: Metadata) {
    return this.appService.getHello(meta);
  }
}
