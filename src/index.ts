import express from 'express';
import dotenv from 'dotenv-safe';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { SwaggerUtils } from './utils/SwaggerUtils';

dotenv.config();

const app = express();
const port = process.env.MY_NAME ?? 5000;

const swaggerDocs = swaggerJsDoc(SwaggerUtils.swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(SwaggerUtils.swaggerOptions), express.json());

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Running on port ${port}`));
