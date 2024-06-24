import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

export interface ServicesService {
  getHello: (
    data: { value: string },
    meta?: Metadata,
  ) => Observable<{
    metadata: Metadata;
    message: { value: string };
    status: { code: number; details: string };
  }>;
}
