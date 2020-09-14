import { Context, Next } from "koa";
import Router from "koa-router";
import bodyParser from "koa-body";

import * as printer from '@thiagoelg/node-printer';

const router = new Router();

async function print(ctx: Context, next: Next) {
    try {
        const file = ctx.request.files;
        if (!file) {
            throw new Error("No file uploaded!");
        }
        console.log(printer);
        console.log(printer.getPrinters())

        printer.printFile(file.path, { n: 1, p: 1 });

        ctx.body = { success: true }
        await next();
    } catch (err) {
        ctx.body = { error: err.message }
    }
}

router.post('/', bodyParser({
    formidable: { uploadDir: './uploads', multiples: false },
    multipart: true,
    urlencoded: true
}), print);

export default router;