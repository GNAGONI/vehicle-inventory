import app from './app';
import dotenv from 'dotenv';

dotenv.config();
init();

async function init() {
  try {
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Running on port ${port}`));
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}
