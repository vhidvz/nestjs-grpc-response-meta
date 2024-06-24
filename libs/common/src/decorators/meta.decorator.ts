import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { getRpcMeta } from '@app/common/utils';

/**
 * Must be used with the @MetadataInterceptor
 */
export const Meta = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    return getRpcMeta(ctx);
  },
);
