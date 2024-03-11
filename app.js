const express    = require("express");
const path       = require("path");
const notesRouter= require ("./routers/notes");

const app = express ();
const PORT = 3001;

app.use(express.json());
app.use(express.static("public"));


/*HOMEPAGE GET CALL*/
app.get ("/", function(req, res) {
	res.sendFile(path.join(__dirname, "public", "homepage", "homepage.html"));
});

//CREATEPAGE GET CALL
app.get ("/create", function(req, res) {
	res.sendFile(path.join(__dirname, "public", "createpage", "createpage.html"));
});

//VIEWPAGE GET CALL
app.get("/list", function(req, res) {
	res.sendFile(path.join(__dirname, "public", "list", "list.html"));
});

app.use ("/notes", notesRouter);


app.listen (PORT, function(err) {
	if (err) {
		process.exit (1);
		return;
	}
	console.log({PORT}, "server has started");
});
