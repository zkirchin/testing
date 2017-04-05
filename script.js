function changeNameOnLoad() {
	var nameSpot = document.getElementById('name');

	var userName = prompt("What is your name?");

	nameSpot.innerHTML = ", " + userName;
}

changeNameOnLoad();