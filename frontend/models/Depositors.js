const mongoose = require('mongoose');

const depositorSchema = new mongoose.Schema({
  address: String,
  contracts: Array
});

module.exports = mongoose.model('Depositor', depositorSchema);