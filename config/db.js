const mongoose = require("mongoose");

// Global Configuration
const db = mongoose.connection;

module.exports = function () {
  // Connection to MongoDB
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // listen for error on connection
  db.on("error", (error) => console.error(error));
  db.on("open", () => console.log("Connected to MongoDB"));
  db.on("close", () => console.log("Mongo Disconnected"));
};
