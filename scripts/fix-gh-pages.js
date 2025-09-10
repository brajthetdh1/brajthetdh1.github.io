
const fs = require('fs');
const path = require('path');

const ghPagesPath = path.join(__dirname, '..', 'build');
const indexFile = path.join(ghPagesPath, 'index.html');
const errorFile = path.join(ghPagesPath, '404.html');

fs.copyFileSync(indexFile, errorFile);
console.log('404.html created → React routing fixed for GitHub Pages.');
