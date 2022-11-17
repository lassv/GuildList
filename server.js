const express = require("express");
const app = express();
const expressLayouts = require("express-layouts");
const basedata = require("./database.json");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const profileRouter = require("./routes/profiles");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("✅ | Connected to Mongoose."));

app.use("/", indexRouter);
app.use("/profiles", profileRouter);

app.listen(process.env.PORT || 3000);
