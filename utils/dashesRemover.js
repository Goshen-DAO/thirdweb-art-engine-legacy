const fs = require('fs');
const path = require('path');
const basePath = process.cwd();

function removeDashes(directory) {
  const entries = fs.readdirSync(directory);

  entries.forEach(entry => {
    const entryPath = path.join(directory, entry);
    const isDirectory = fs.statSync(entryPath).isDirectory();

    // Remove dashes from folder or file name
    const newEntryName = entry.replace(/-/g, '');
    const newEntryPath = path.join(directory, newEntryName);

    // Rename the folder or file
    fs.renameSync(entryPath, newEntryPath);

    console.log(`Renamed: ${entryPath} to ${newEntryPath}`);

    if (isDirectory) {
      // Recursively process subdirectories
      removeDashes(newEntryPath);
    }
  });
}

// Replace 'YOUR_DIRECTORY_PATH' with the path to your root directory
const rootDirectory = `${basePath}/layers`;

removeDashes(rootDirectory);
