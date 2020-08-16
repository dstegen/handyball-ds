module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "lib/*.{js,png}",
    "./*.{ico,html,webmanifest}",
    "./sw.js"
  ],
  "swDest": "sw.js",
  "swSrc": "./service-worker.js"
};
