const express = require("express");

// import route
const { homeRoutes, notFoundRoute } = require("./src/routes");

const app = express();

// routes
app.use("/", homeRoutes);
app.use("*", notFoundRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`🚀 on port ${port}`));
