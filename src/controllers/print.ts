import { Context, Next } from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-body'

import * as printer from '@thiagoelg/node-printer'
import env from '../utils/env'

const router = new Router()

const printerOptions = {
    success: (jobID: string) => {
        console.log('Sent to printer with ID: ' + jobID)
    },
    error: (err: Error) => {
        console.log(err)
    },
    ...(env.printerName ? { printer: env.printerName } : {}),
}

async function print(ctx: Context, next: Next) {
    try {
        const files = ctx.request.files
        if (!files) {
            throw new Error('No file uploaded!')
        }
        if (!files['pdf']) {
            throw new Error('No file uploaded!')
        }

        const file = files['pdf']

        printer.printFile({
            filename: file.path,
            ...printerOptions,
        })

        ctx.body = { success: true }
        await next()
    } catch (err) {
        console.log(err)
        if (err instanceof Error) {
            ctx.body = { error: err.message }
        }

        throw new Error('Severe error!')
    }
}

router.post(
    '/',
    bodyParser({
        formidable: { uploadDir: './uploads', multiples: false },
        multipart: true,
        urlencoded: true,
    }),
    print
)

export default router
