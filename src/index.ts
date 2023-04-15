import dotenv from 'dotenv';
import config from 'config';
import app from './app';
import db from '../config/db';
import Logger from '../config/logger';

dotenv.config();

const port = process.env.PORT;

const server = app.listen(port, async () => {
  await db()
  Logger.info(`Aplicação rodando na porta: ${port}`)
});

export default server;