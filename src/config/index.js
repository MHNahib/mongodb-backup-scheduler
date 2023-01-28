require("dotenv").config();

const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_Name;

module.exports = {
  dbUrl,
  dbName,
};
