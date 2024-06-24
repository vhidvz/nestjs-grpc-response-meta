import { ClientsModule, Transport } from '@nestjs/microservices';
import { InterceptingCall } from '@grpc/grpc-js';
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
            channelOptions: {
              interceptors: [
                (options: any, nextCall: any) => {
                  const interceptingCall = new InterceptingCall(
                    nextCall(options),
                    {
                      start: function (metadata, _listener, next) {
                        const response: any = {};

                        const listener = {
                          onReceiveMetadata: (metadata: any, next: any) => {
                            response.metadata = metadata;
                            next(metadata);
                          },
                          onReceiveMessage: (message: any, next: any) => {
                            response.message = message;
                            next(response);
                          },
                          onReceiveStatus: (status: any, next: any) => {
                            const { code, details } = status;
                            response.status = { code, details };
                            next(status);
                          },
                        };

                        next(metadata, listener);
                      },
                    },
                  );
                  return interceptingCall;
                },
              ],
            },
          },
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
