const fs = require('fs');
const path = require('path');
const basePath = process.cwd();

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function processEntries(directory) {
  const entries = fs.readdirSync(directory);

  entries.forEach(entry => {
    const entryPath = path.join(directory, entry);
    const isDirectory = fs.statSync(entryPath).isDirectory();

    // Replace dashes with spaces in folder or file name
    const newEntryName = entry.replace(/-/g, ' ');
    const capitalizedEntryName = newEntryName
      .split(' ')
      .map(capitalizeFirstLetter)
      .join(' ');

    // Replace 'Bg', 'bG', 'BG', or 'bg' with 'BG' for both folders and files
    const newEntryNameWithBg = capitalizedEntryName.replace(/\bbg\b/ig, 'BG');

    // Rename the folder or file
    const newEntryPath = path.join(directory, newEntryNameWithBg);
    fs.renameSync(entryPath, newEntryPath);
    console.log(`Renamed: ${entryPath} to ${newEntryPath}`);

    if (isDirectory) {
      // Recursively process subdirectories
      processEntries(newEntryPath);
    }
  });
}

// Replace 'YOUR_DIRECTORY_PATH' with the path to your root directory
const rootDirectory = `${basePath}/layers`;

processEntries(rootDirectory);
