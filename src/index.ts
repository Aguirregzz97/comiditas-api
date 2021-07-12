import express from 'express';
import dotenv from 'dotenv-safe';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { apiRouter } from './routes';
import { options } from './utils/SwaggerOptions';

dotenv.config();

const app = express();
const port = process.env.API_PORT ?? 5000;

const specs = swaggerJsDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use('/', apiRouter, express.json());

app.listen(port, () => console.log(`Running on port ${port}`));
