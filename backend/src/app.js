import express from "express";
import bodyParser from "body-parser";
import urlShortener from "node-url-shortener";
import cors from "cors";
import { sequelize } from "../models/index.js";
import DataRoutes from "./routes/DataRoutes.js"

const app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.end("¡Welcome!");
});

app.post("/url", function (req, res) {
  const url = req.body.url;
  urlShortener.short(url, function (err, shortUrl) {
    res.send(shortUrl);
  });
});

app.use('/api/data', DataRoutes)

sequelize
  .sync({ force: false, logging: console.log })
  .then(() => {
    console.log("¡We connect to the database!");

    app.listen(port, function () {
      console.log("¡Server up in port " + port + "!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
