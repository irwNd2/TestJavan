const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const parentRoute = require("./routes/parentRoute");
const childRoute = require("./routes/childRoute");
const grandChildRoute = require("./routes/grandChildRoute");
const assetRoute = require("./routes/assetRoute");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/parent", parentRoute);
app.use("/children", childRoute);
app.use("/grandchildren", grandChildRoute);
app.use("/assets", assetRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Node.js WEB is running at http://localhost:${port}`);
});
