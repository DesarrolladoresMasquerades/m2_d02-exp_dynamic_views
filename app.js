const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.static("public"));


app.get("/home", (req, res, next) =>
res.sendFile(__dirname + "/views/home.html")
);

app.get("/about", (req, res, next) =>
res.sendFile(__dirname + "/views/about.html")
);

app.get("/", (req, res, next) => res.send("Hello there!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("🏃‍ on port 3000"));
