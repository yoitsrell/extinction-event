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

///////////////////////////////

let items = document.querySelectorAll("#row > img");
for(item of items) {
	item.addEventListener('click', toggleOpacity);
}

///////


document.querySelector("#destroy-all").addEventListener('click', destroyer);

let destruction = true;

function destroyer() {
	let lineThrus = document.querySelectorAll("ol > li");
	for(item of lineThrus) {
		item.style.textDecoration = destruction ? "line-through" : "";
	}


	let opaItems = [...document.querySelectorAll("#row > img"), ...document.querySelectorAll("ul > li")];

	for(item of opaItems) {
		item.style.opacity = destruction ? "0.25" : "1";
	}
	destruction = !destruction;
}