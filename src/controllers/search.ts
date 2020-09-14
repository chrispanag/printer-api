import { Context, Next } from "koa";
import Router from "koa-router";
import dummyData from "../dummyData/searchResults";

const router = new Router();

async function search(ctx: Context, next: Next) {
    const { } = ctx.query;

    ctx.body = dummyData;

    await next();
}

router.get('/', search);

export default router;