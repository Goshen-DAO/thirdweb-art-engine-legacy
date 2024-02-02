const fs = require('fs');
const path = require('path');
const basePath = process.cwd();

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function isImageFile(file) {
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff'];
  const ext = path.extname(file).toLowerCase();
  return imageExtensions.includes(ext);
}

function processEntries(directory) {
  const entries = fs.readdirSync(directory);

  let folderCount = 1;

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

    if (isDirectory) {
      // Rename the folder
      const newEntryPath = path.join(directory, newEntryNameWithBg);
      fs.renameSync(entryPath, newEntryPath);
      console.log(`Renamed folder: ${entryPath} to ${newEntryPath}`);
      
      // Recursively process subdirectories
      processEntries(newEntryPath);
    } else if (isImageFile(entry)) {
      // Get the folder name for file renaming
      const folderName = path.basename(directory);

      // Rename files inside the folder with folder name and incrementing numbers with the extension .png
      const newFileName = `${folderName} ${folderCount}.png`;
      const newFilePath = path.join(directory, newFileName);
      fs.renameSync(entryPath, newFilePath);
      console.log(`Renamed file:    ${entryPath}  =>  ${newFilePath}`);
      folderCount++;
    } else {
      console.log(`Skipped file:    ${entryPath}`);
    }
  });
}

// Replace 'YOUR_DIRECTORY_PATH' with the path to your root directory (in this case, the "layers" folder)
const rootDirectory = `${basePath}/layers`;

processEntries(rootDirectory);
