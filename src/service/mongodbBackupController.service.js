const { exec } = require("child_process");
const fs = require("fs");
const { dbName, dbUrl } = require("../config");
const response = require("../utils/response");

const { StatusCodes } = require("http-status-codes");

const makeBackupFolder = () => {
  if (!fs.existsSync(`${__dirname}/../backup`)) {
    fs.mkdirSync(`${__dirname}/../backup`);
  }
};

const renameZip = (res) => {
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

    return response(
      res,
      StatusCodes.ACCEPTED,
      true,
      {
        message: `Backup completed as ${dbName}-${new Date()
          .toISOString()
          .replace(/T.*/, "")
          .split("-")
          .reverse()
          .join("-")}.gz`,
      },
      "Success"
    );
  } catch (error) {
    return response(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      false,
      null,
      error.message
    );
  }
};

const backupAsGzip = (res) => {
  makeBackupFolder();
  execution = exec(
    `mongodump --uri ${dbUrl}/${dbName} --archive=./src/backup/backup.gz --gzip `
  );

  execution.on("exit", (code) => {
    if (code === 0) {
      console.log("Mongodump completed successfully");

      return renameZip(res);
    } else {
      console.log(`Error: ${code}`);
      return response(
        res,
        StatusCodes.INTERNAL_SERVER_ERROR,
        false,
        null,
        `Error: ${code}`
      );
    }
  });
};

module.exports = {
  backupAsGzip,
};
