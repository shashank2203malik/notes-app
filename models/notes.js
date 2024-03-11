const mongoose = require("mongoose");

const DB_URL     = "mongodb://localhost:27017/meradatabase";
const Schema     = mongoose.Schema;

const noteSchema = new Schema({
	noteHeading: String,
	noteStuff: String
});

mongoose.connect(DB_URL);

const db = mongoose.connection;

db.on("error", function (err) {
	console.error ({err, DB_URL}, "error making connection to db");
});

db.once("open", function() {
	console.log({DB_URL}, "connection succeeded");
});

const notesModel = mongoose.model("notes", noteSchema);


module.exports = notesModel;
