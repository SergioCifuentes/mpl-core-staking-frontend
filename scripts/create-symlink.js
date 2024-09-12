const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(__dirname, '../src/node_modules');
const nodeModulesPath = path.resolve(__dirname, '../node_modules');

if (!fs.existsSync(srcPath)) {
  fs.symlinkSync(nodeModulesPath, srcPath, 'dir');
}