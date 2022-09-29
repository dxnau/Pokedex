const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/pokedex');

const pokedexSchema = new mongoose.Schema({
  pokemon: String,
  image: String
})

const Pokedex = mongoose.model('Pokedex', pokedexSchema);

module.exports = Pokedex;