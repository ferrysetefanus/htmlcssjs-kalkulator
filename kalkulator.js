var button = document.querySelector(".container-button");
var screen = document.querySelector("#screen");

button.addEventListener("click", function(e) {
	var buttonclick = e.target;
	var nilaibutton = buttonclick.innerText;

	if(nilaibutton == "C") {
		screen.value = "";
	} else if(nilaibutton == "<") {
		screen.value = screen.value.slice(0, -1);
	} else if(nilaibutton == "=") {
		screen.value = eval(screen.value);
	}
	else {
	screen.value = screen.value + nilaibutton;
}
});