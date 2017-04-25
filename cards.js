var input = document.querySelector('.input');
var create = document.querySelector('.create');
create.addEventListener('click', () => { // Creates a new Card
	var inputValue = input.value; //holds the value of a input element inside the DOM
	var div = document.createElement('div'); //creates a new div element
	div.setAttribute('class', 'card'); //sets class attribute to a newly created div element
	var divInDom = document.querySelector('.card');
	document.body.insertBefore(div, divInDom); // inserts a new div insede the dom
	var p = document.createElement('p'); // creates new p element
	var text = document.createTextNode(inputValue); // takes input elements value and holds it in the variable text
	p.appendChild(text); // sets input element's value as a text content
	div.appendChild(p);// inserts p element inside the div element
	var remove = document.createElement('button');// creates new button element inside the div
	remove.setAttribute('class', 'delete'); // sets class attribute to button element
	var deleteBtn = document.createTextNode('Delete');//
	remove.appendChild(deleteBtn);
	div.appendChild(remove);
	input.value = '';
	var removeBtn = document.querySelector('.delete');
		removeBtn.addEventListener('click', () => { // Delete the Card form the dom
		var parentDiv = document.querySelector('.wrapper');
		parentDiv.removeChild(div);
});
});