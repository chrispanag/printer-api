import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import router from './controllers/router';

const app = new Koa();

app.use(json());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());

export default app;