const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const cors = require("./middlewares/cors");
const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

const app = express();
const PORT = 3000;

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.use(mainRoute, gamesRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
