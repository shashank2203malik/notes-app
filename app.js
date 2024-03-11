const express    = require("express");
const path       = require("path");
const notesModel = require ("./models/notes");

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

app.post("/data", function(req, res) {
	const dataReceived = req.body;

	if (!dataReceived.noteHeading || !dataReceived.noteStuff) {
		res.status (400).send ({message : "One or more keys missing `noteHeading` or `noteStuff`"});
		return;
	}

	const notes = new notesModel(dataReceived);

	notes.save().then(
		(savedDocument) => {
			console.log({savedDocument}, "Your notes has been saved.");
			res.send(savedDocument);
		},
		(err) => {
			console.error ({err, dataReceived}, 'error saving document');
			res.status (500).send ({message : "Internal Server Error"});
		}
	);
});


app.listen (PORT, function(err) {
	if (err) {
		process.exit (1);
		return;
	}
	console.log("server has started");
});
