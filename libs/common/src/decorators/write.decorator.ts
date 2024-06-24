import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { ServerWritableStream } from '@grpc/grpc-js';

/**
 * Must be used with the @MetadataInterceptor
 */
export const Write = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    return ctx.getArgByIndex<ServerWritableStream<any, any>>(2);
  },
);
