const express = require("express");
const { Liquid } = require("liquidjs");
const path = require("path");

const app = express();
const engine = new Liquid();

app.engine("liquid", engine.express());
app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "liquid");

app.get("/", (req, res) => {
  res.render("index", { title: "Liquid on Vercel" });
});

app.listen(3000);
