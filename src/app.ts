import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import { vehicle } from './modules';

const app = express();

app.use(bodyParser.json());

app.use('/vehicles', vehicle.router);

// eslint-disable-next-line no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack);
  res.status(500).end();
});

export default app;
