const express = require("express");
const app = express();
const expressLayouts = require("express-layouts");
const basedata = require("./database.json");
const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect(basedata.mongo, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("✅ | Connected to Mongoose."));

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
