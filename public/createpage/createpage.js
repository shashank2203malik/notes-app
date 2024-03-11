window.addEventListener("load", function(/*event*/) {
	main ();
});

function main() {
	eventHandler();
}

function eventHandler() {
	const goToHomeButton = document.querySelector("#goHome");
	goToHomeButton.addEventListener("click", onClickHome);

	const saveButton = document.querySelector("#save");
	saveButton.addEventListener("click", onClickSave);
}

function onClickHome(/*ev*/) {
	window.location.href = "/";
}

function onClickSave(/*ev*/) {
	const textArea1 = document.querySelector(".textarea1").value;
	const textArea2 = document.querySelector(".textarea2").value;

	const data = {
		noteHeading: textArea1, 
		noteStuff:   textArea2
	};

	fetch("/notes/save", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then(
		async (res) => {
			const dataFromServer = await res.json();

			if (res.status >= 200 && res.status <= 299) {
				console.log({dataFromServer}, "server response");

				document.querySelector(".textarea1").value = "";
				document.querySelector(".textarea2").value = "";
				return;
			}

			console.error ({err: dataFromServer}, "error saving data");
		},
		(err) => {
			console.error ({err}, "error saving data");
		}
	);
}
