const express = require("express");
const path = require("path");

// import route
const {
  homeRoutes,
  notFoundRoute,
  mongodbBackuproutes,
} = require("./src/routes");

const app = express();

// public folder
app.use(express.static(path.join(__dirname, "/public")));

// routes
app.use("/", homeRoutes);
app.use("/backup", mongodbBackuproutes);
app.use("*", notFoundRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`🚀 on port ${port}`));
