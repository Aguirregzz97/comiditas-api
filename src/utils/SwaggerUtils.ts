import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  swagger: '2.0',
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'Comiditas API',
      description: 'Comiditas API Docs',
      contact: {
        name: 'Andres Aguirre Gonzalez',
      },
      servers: ['http://localhost:5000'],
    },
  },
  apis: ['routes/*.ts'],
};

export const SwaggerUtils = { swaggerOptions };
