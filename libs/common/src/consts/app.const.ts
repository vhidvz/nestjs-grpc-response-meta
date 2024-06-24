export const APP = {
  GATEWAY: {
    API_PORT: +(process.env.GATEWAY_API_PORT || 3000),
  },
  SERVICE: {
    NAME: 'ServicesService',
    HOST: process.env.SERVICE_HOST || '0.0.0.0',
    API_PORT: +(process.env.SERVICE_API_PORT || 3010),
    GRPC_PORT: +(process.env.SERVICE_GRPC_PORT || 5010),
    PACKAGE: { NAME: 'services', SYMBOL: Symbol('SERVICES') },
  },
};
