const path = require("path")
const express = require('express');
const axios = require("axios")
const hbs = require('hbs');

require('dotenv').config();
const studentData = require('./students-data.js');
const { toNamespacedPath } = require("path/posix");
const { response } = require("express");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.all('/students', (req, res) => {
  const justStudentsNames = studentData.map(st => st.firstName)
  res.render("students-names", { names: justStudentsNames })
})

app.all("/albums", async (req, res) => {
  try {
    const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/albums/')
    res.render("albums", { albums: apiResponse.data })
  }
  catch (err) {
    res.send(err)
  }

})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`Running on port: ${PORT}`)
);
