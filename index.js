const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./database");
require("./src/model/Posts");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// views
app.set("views", __dirname + "/src/views");

// carpeta public
app.use(express.static("public"));


app.set("view engine", "ejs");

app.use("/posts", require("./routes/posts.route"));

app.listen(4000, () => {
  sequelize.sync({ force: true });
  console.log("Base de datos 4000 ok");
});
