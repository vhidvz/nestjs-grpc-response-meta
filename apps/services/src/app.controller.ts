import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { Metadata, ServerWritableStream } from '@grpc/grpc-js';
import { Meta, Write } from '@app/common/decorators';
import { APP } from '@app/common/consts';

import { AppService } from './app.service';

@GrpcService()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod(APP.SERVICE.NAME)
  getHello(
    @Meta() meta: Metadata,
    @Write() write: ServerWritableStream<any, any>,
  ) {
    console.log('meta', meta.getMap());
    meta.set('vahid', 'vakili');
    write.sendMetadata(meta);
    return this.appService.getHello();
  }
}
