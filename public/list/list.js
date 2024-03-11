window.addEventListener("load", function(event) {
    main ();
});

function main() {
    eventHandler();
}

function eventHandler() {
    const goToHomeButton = document.querySelector("#goHome");
    goToHomeButton.addEventListener("click", onClickHome);
}

function onClickHome(ev) {
	window.location.href = "/";
}
