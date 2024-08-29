const { model } = require("mongoose");

const { OrdersSchema } = require("../model/OrdersSchema.js");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };