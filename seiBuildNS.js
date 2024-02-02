const basePath = process.cwd();
const { startGeneration, buildSetup } = require(`${basePath}/src/seiBuildNS.js`);

(() => {
  buildSetup();
  startGeneration();
})();
