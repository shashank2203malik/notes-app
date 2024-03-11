const notesModel = require ("../models/notes");

const controller = {};

controller.save = function (req, res) {
	const dataReceived = req.body;

	if (!dataReceived.noteHeading || !dataReceived.noteStuff) {
		res.status (400).send ({message : "One or more keys missing `noteHeading` or `noteStuff`"});
		return;
	}

	const notes = new notesModel(dataReceived);

	notes.save().then(
		(savedDocument) => {
			console.log({savedDocument}, "Your notes has been saved.");
			res.status(200).send(savedDocument);
		},
		(err) => {
			console.error ({err, dataReceived}, 'error saving document');
			res.status (500).send ({message : "Internal Server Error"});
		}
	);
};

controller.all = function (req, res) {
	res.status (500).send ("NOT IMPLEMENTED");
};

module.exports = controller;
