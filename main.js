let listItems = document.querySelectorAll("ol > li");
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
///////////////////////////////

let ulItems = document.querySelectorAll("ul > li");
for(item of ulItems) {
	item.addEventListener('click', toggleOpacity);
}

function toggleOpacity(event) {
	let lineStatus = event.target.style.opacity;

	if(lineStatus != "0.25") {
		event.target.style.opacity = "0.25";
	} else { 
		event.target.style.opacity = "1";
	}
	console.log("Status: " + lineStatus);
}

