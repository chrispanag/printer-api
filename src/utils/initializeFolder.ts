import { existsSync, mkdirSync } from 'fs';

export default function initializeFolders(uploadsPath = './uploads') {
    const path = uploadsPath;
    try {
        if (!existsSync(path)) {
            mkdirSync(path);
        }
    } catch (err) {
        throw err;
    }
}