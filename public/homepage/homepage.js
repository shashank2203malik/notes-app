window.addEventListener("load", (event) => {
	main ();
});

function main () {
	handleEvents ();
}

function handleEvents () {
	const createButton = document.querySelector("#goToCreate");
	const showNoteButton = document.querySelector("#viewList");

	showNoteButton.addEventListener("click", onShowNoteClick);
	createButton.addEventListener ("click", onCreateClick);
}

function onCreateClick (ev) {
	window.location.href = "/create";
}

function onShowNoteClick(ev) {
	window.location.href = "/list";
}
