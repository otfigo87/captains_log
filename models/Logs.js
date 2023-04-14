const mongoose = require('mongoose');

const logsSchema = mongoose.Schema({
    title: String,
    entry: String,
    shipIsBroken: {
        type: Boolean,
        default: true,
    }
}, {timestamps: true})

const Logs = mongoose.model('Logs', logsSchema)
module.exports = Logs