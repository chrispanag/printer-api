import dotenv from 'dotenv';

dotenv.config();

const PRINTER_NAME = process.env.PRINTER_NAME;

const PORT = process.env.PORT || 3000;
if (!PORT) {
    throw new Error('Environment variable "PORT" is not defined');
}

export default {
    printerName: PRINTER_NAME,
    port: PORT
}