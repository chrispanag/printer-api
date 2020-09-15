import env from './utils/env';
import initializeFolders from './utils/initializeFolder';

console.log('Initializing...');

import app from './app';

const PORT = env.port;

initializeFolders();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});