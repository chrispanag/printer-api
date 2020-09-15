import Koa from 'koa';
import logger from 'koa-logger';
import router from './controllers/router';
import cors from '@koa/cors';

if (process.platform === 'win32') {
    throw 'Not yet supported for win32'
}

const app = new Koa();

app.use(logger());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

export default app;