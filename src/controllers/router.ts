import Router from "koa-router";
import search from './print'

const router = new Router();

router.use('/print', search.routes(), search.allowedMethods());

export default router;