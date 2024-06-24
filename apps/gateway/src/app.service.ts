import { ServicesService } from '@app/common/interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { APP } from '@app/common/consts';
import { Metadata } from '@grpc/grpc-js';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject(APP.SERVICE.PACKAGE.SYMBOL) readonly grpc: ClientGrpc) {}

  async getHello(): Promise<string> {
    const meta = new Metadata();
    meta.set('key', 'value');

    const result = await lastValueFrom(
      this.services.getHello({ value: 'Hello World!' }, meta),
    );

    return result.value;
  }

  get services() {
    return this.grpc.getService<ServicesService>(APP.SERVICE.NAME);
  }
}
