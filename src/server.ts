console.log('Initializing...');

import app from './app';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
});