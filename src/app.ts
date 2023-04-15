import express from 'express';
import config from 'config';
import router from './router';
import morganMiddleware from './middleware/morganMiddleware';

const app = express();

app.use(express.json());

app.use(morganMiddleware)
app.use('/api', router);


export default app;
// senha mongo: mldD7QP5vTjQD95