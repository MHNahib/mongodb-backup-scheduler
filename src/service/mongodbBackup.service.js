const { exec } = require("child_process");
const fs = require("fs");
const { dbName, dbUrl } = require("../config");

const makeBackupFolder = () => {
  if (!fs.existsSync(`${__dirname}/../backup`)) {
    fs.mkdirSync(`${__dirname}/../backup`);
  }
};

const renameZip = () => {
  try {
    fs.renameSync(
      `./src/backup/backup.gz`,
      `./src/backup/${dbName}-${new Date()
        .toISOString()
        .replace(/T.*/, "")
        .split("-")
        .reverse()
        .join("-")}.gz`
    );
  } catch (error) {
    console.log(`err: ${error}`);
  }
};

const backupAsGzip = () => {
  makeBackupFolder();
  execution = exec(
    `mongodump --uri ${dbUrl}/${dbName} --archive=./src/backup/backup.gz --gzip `
  );

  execution.on("exit", (code) => {
    if (code === 0) {
      console.log("Mongodump completed successfully");

      renameZip();
    } else {
      console.log(`Error: ${code}`);
    }
  });
};

module.exports = {
  backupAsGzip,
};
