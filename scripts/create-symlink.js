const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.resolve(__dirname, '..', 'src', 'node_modules');
const workspaceNodeModulesPath = path.resolve(__dirname, '..', 'node_modules');

// Check if the symlink exists
if (!fs.existsSync(nodeModulesPath)) {
  // Create symlink if it doesn't exist
  try {
    fs.symlinkSync(workspaceNodeModulesPath, nodeModulesPath, 'junction'); // 'junction' works for Windows too
    console.log('Symlink created successfully');
  } catch (err) {
    console.error('Error creating symlink:', err);
  }
} else {
  console.log('Symlink already exists');
}