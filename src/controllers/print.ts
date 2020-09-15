import { Context, Next } from "koa";
import Router from "koa-router";
import bodyParser from "koa-body";

import * as printer from '@thiagoelg/node-printer';

const router = new Router();

async function print(ctx: Context, next: Next) {
    try {
        const files = ctx.request.files;
        if (!files) {
            throw new Error("No file uploaded!");
        }
        if (!files['pdf']) {
            throw new Error("No file uploaded!");
        }

        const file = files['pdf'];
        
        printer.printFile({
            filename: file.path, // printer name, if missing then will print to default printer
            printer: 'Lexmark_MX317dn@ET0021B7235B01.local',
            success: (jobID: string) => {
                console.log("sent to printer with ID: " + jobID);
            },
            error: (err: Error) => {
                console.log(err);
            }
        });

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