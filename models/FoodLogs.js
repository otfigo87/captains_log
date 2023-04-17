const mongoose = require('mongoose');

const foodLogsSchema = mongoose.Schema({
    title: String,
    meal: ["breakfast", "lunch", "dinner"],
}, {timestamps: true})

const FoodLogs = mongoose.model('FoodLogs', foodLogsSchema)
module.exports = FoodLogs