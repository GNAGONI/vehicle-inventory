import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (_, res) => {
  res.status(200).send('Hello main branch');
});

app.listen(port, () => console.log(`Running on port ${port}`));
