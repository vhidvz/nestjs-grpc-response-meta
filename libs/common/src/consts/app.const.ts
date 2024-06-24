export const APP = {
  GATEWAY: {
    API_PORT: +(process.env.GATEWAY_API_PORT || 3010),
  },
  SERVICE: {
    NAME: 'ServicesService',
    HOST: process.env.SERVICE_HOST || '0.0.0.0',
    GRPC_PORT: +(process.env.SERVICE_GRPC_PORT || 5030),
    PACKAGE: { NAME: 'services', SYMBOL: Symbol('SERVICES') },
  },
};
