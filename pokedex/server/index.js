const express = require("express");
const path = require("path");
const PORT = 8080;
const models = require("./models.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../public/index.html")));
app.use(express.json());

app.get('/pokedex', (req, res) => {
  models.getAll()
    //Retrieved info from database
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log('Error getting info')
      res.sendStatus(404);
    });
});

app.post('/pokedex', (req, res) => {
  models.post(req.body)
    .then((response) => {
      console.log('Posted')
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error posting ', err)
      res.sendStatus(404);
    });
});

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
