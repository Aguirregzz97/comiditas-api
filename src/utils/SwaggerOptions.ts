export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Comiditas API',
      version: '1.0.0',
      description: 'A simple express library',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/routes/api/*.ts'],
};
