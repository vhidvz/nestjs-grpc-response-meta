import { Injectable } from '@nestjs/common';
import { Metadata } from '@grpc/grpc-js';

@Injectable()
export class AppService {
  getHello(meta: Metadata) {
    meta.add('vahid', 'vakili');
    return { value: 'Hello World!' };
  }
}
