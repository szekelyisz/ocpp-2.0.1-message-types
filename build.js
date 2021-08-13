const messageTypes = ["BootNotificationRequest", "BootNotificationResponse"];

const fs = require("fs");
const json2ts = require("json-schema-to-typescript");

const files = fs.readdirSync("schemas");

const type_re = /([A-Za-z]+)\.json/;

async function processAllFiles() {
  for (const filename of files) {
    await processFile(filename);
  }
}

async function processFile(filename) {
  const type = filename.match(type_re)[1];

  console.log(type);

  await json2ts
    .compileFromFile(`schemas/${filename}`, { ignoreMinAndMaxItems: true })
    .then((ts) => fs.writeFileSync(`dist/${type}.d.ts`, ts))
    .catch((err) => console.error(err));
}

processAllFiles();
