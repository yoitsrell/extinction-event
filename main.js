let listItems = document.querySelectorAll('li');
for(item of listItems) {
	item.addEventListener('click', toggleLineThru);
}

function toggleLineThru(event) {
	let lineStatus = event.target.style.textDecoration;

	if(lineStatus != "line-through") {
		event.target.style.textDecoration = "line-through";
	} else { 
		event.target.style.textDecoration = "";
	}
	console.log("Status: " + lineStatus);
}