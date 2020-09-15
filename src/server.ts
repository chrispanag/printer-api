import initializeFolders from './utils/initializeFolder';

console.log('Initializing...');

import app from './app';

const PORT = 3000;

initializeFolders();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});