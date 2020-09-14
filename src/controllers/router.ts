import Router from "koa-router";
import search from './search'

const router = new Router();

router.use('/search', search.routes(), search.allowedMethods());

export default router;