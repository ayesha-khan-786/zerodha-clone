const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,       // buy & sell
});

module.exports = { OrdersSchema };