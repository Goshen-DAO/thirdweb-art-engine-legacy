const basePath = process.cwd();
const { startGeneration, buildSetup } = require(`${basePath}/src/seiBuildAR.js`);

(() => {
  buildSetup();
  startGeneration();
})();
