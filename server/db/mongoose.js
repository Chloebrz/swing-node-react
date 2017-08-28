// Dependencies
const mongoose = require("mongoose");
const keys = require("../config/keys");

require("../models/user");
require("../models/picture");
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

module.exports = { mongoose };
