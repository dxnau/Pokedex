const mongoose = require("mongoose");
const axios = require('axios');
const db = require('./db.js');
const express = require("express");
const app = express();

module.exports = {

  getAll: function() {
    return db.find({});
  },

  post: function(body) {
    const pokemon = new db({pokemon: body[0], image: body[1]});
    return pokemon.save();
  }
}

