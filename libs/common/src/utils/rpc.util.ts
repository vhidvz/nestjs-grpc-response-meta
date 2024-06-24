import { ExecutionContext } from '@nestjs/common';
import { Metadata } from '@grpc/grpc-js';

export const getRpcMeta = (context: ExecutionContext): Metadata => {
  return context.switchToRpc().getContext() as Metadata;
};
