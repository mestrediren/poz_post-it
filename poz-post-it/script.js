var nb = 1;
var color = [];
var background = [];
var arrayColor = [];

function random(input){
	return Math.floor(Math.random() * input);
}

function selectColor(str){
	var rgb = ["r", "g", "b"];

	if (document.getElementById("rand").checked == true){
		arrayColor = [random(256), random(256), random(256)];
		rgb.forEach(function(item, index, rgb) {
			document.getElementById(str + "." + item).value = arrayColor[index];
		});
		return "rgb("+ arrayColor[0] +","+ arrayColor[1] +","+ arrayColor[2] +")";
	}
	else {
		arrayColor = [];
		rgb.forEach(function(item, index, rgb) {
			arrayColor.push(document.getElementById(str + "." + item).value);
		});
		return "rgb("+ arrayColor[0] +","+ arrayColor[1] +","+ arrayColor[2] +")";
	}
}
		
function setColor(){
	color.forEach(function(item, index, color) {
		document.getElementById(item).style.color = selectColor(item + ".color");
	});
	background.forEach(function(item, index, background) {
		document.getElementById(item).style.background = selectColor(item + ".background");
	});
	setTimeout(setColor,1000);
}
		
function addRow() {
	var div = document.createElement('div');
	div.className = 'classRow' + nb;
	div.setAttribute("id", "row" + nb);
	div.innerHTML =
	'<input type="button" value="remove" onclick="removeRow(this)"> ' 
	+ (document.getElementById('creatorTitle').value != "" ? document.getElementById('creatorTitle').value : "unnamed") 
	+ " : "
	+ document.getElementById('creatorText').value;
	document.getElementById('content').appendChild(div);

	var div = document.createElement('div');
	div.className = 'classRow' + nb + ".color";
	div.setAttribute("id", "row" + nb + ".color");
	div.innerHTML =
	'<input type="range" id="row'+ nb +'.color.r" min="0" max="255" value="0">\
	<input type="range" id="row'+ nb +'.color.g" min="0" max="255" value="0">\
	<input type="range" id="row'+ nb +'.color.b" min="0" max="255" value="0">\
	<label for="rand">'+ (document.getElementById('creatorTitle').value != "" ? document.getElementById('creatorTitle').value : "unnamed") +' color</label><br />';
	document.getElementById('inputs').appendChild(div);
	color.push("row"+ nb);
			
	var div = document.createElement('div');
	div.className = 'row' + nb + ".background";
	div.setAttribute("id", "row" + nb + ".background");
	div.innerHTML =
	'<input type="range" id="row'+ nb +'.background.r" min="0" max="255" value="255">\
	<input type="range" id="row'+ nb +'.background.g" min="0" max="255" value="255">\
	<input type="range" id="row'+ nb +'.background.b" min="0" max="255" value="255">\
	<label for="rand">'+ (document.getElementById('creatorTitle').value != "" ? document.getElementById('creatorTitle').value : "unnamed") +' background</label><br /><br />';
	document.getElementById('inputs').appendChild(div);
	background.push("row"+ nb);
	nb++;
}
		
function removeRow(input) {
	color.splice(color.indexOf(input.parentNode.id), 1);
	background.splice(background.indexOf(input.parentNode.id), 1);
	document.getElementById('inputs').removeChild(document.getElementById(input.parentNode.id + ".color"));
	document.getElementById('inputs').removeChild(document.getElementById(input.parentNode.id + ".background"));
	document.getElementById('content').removeChild(input.parentNode);
}

setColor();