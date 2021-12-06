var userList = [];


const btn = document.getElementById('btn');
const btnBasic = document.getElementById('myButtons');
const btnPremium = document.getElementById('myButtons1');
const btnSupreme = document.getElementById('myButtons2');
const form = document.querySelector('.form');
const subtitle = document.getElementById('subtitle');
const goBack = document.getElementById("go-back");
const podaci = document.querySelector('.podaci');

let paket = '';

function charUser(event) {
	var value = String.fromCharCode(event.which);
	var pattern = new RegExp(/[a-zåäö ]/i);
	return pattern.test(value);
}

function numberUser(event) {
	var value = String.fromCharCode(event.which);
	var pattern = new RegExp(/[0-9]/i);
	return pattern.test(value);
}

$('#numberUser').bind('keypress', numberUser);
$('#commentUser').bind('keypress', charUser);
$('#commentInput').bind('keypress', numberUser);


function addComment() {

	var comments = document.getElementById('commentList');
	var username = document.getElementById('commentUser').value;
	var number = document.getElementById('numberUser').value;
	var comment = document.getElementById('commentInput').value;
	var gradovi = document.getElementById('gradovi').value;
	var gender = document.getElementById('gender').value;
	var date = document.getElementById('dateUser').value;

	if (username === "") {
		alert("Niste unijeli ime i prezime!");
	} else if (number === "") {
		alert("Niste unijeli broj telefona");
	} else if (gradovi === "Mjesto stanovanja") {
		alert("Niste unijeli mjesto stanovanja!");
	} else if (gender === "Izaberite spol") {
		alert("Niste unijeli spol!");
	} else if (comment === "") {
		alert("Niste unijeli maticni broj");
	} else {
		var contentSpot = document.createElement('li');
		var usernameSpot = document.createElement('p');
		var numberSpot = document.createElement('p');
		var gradoviSpot = document.createElement('p');
		var genderSpot = document.createElement('p');
		var dateSpot = document.createElement('p');
		var commentSpot =
			document.createElement('p');
		var ofAgeSpot = document.createElement('p');
		usernameSpot.innerHTML = username;
		commentSpot.innerHTML = comment;
		numberSpot.innerHTML = number;
		gradoviSpot.innerHTML = gradovi;
		genderSpot.innerHTML = gender;
		dateSpot.innerHTML = date;
		contentSpot.appendChild(usernameSpot);
		contentSpot.appendChild(numberSpot);
		contentSpot.appendChild(gradoviSpot);
		contentSpot.appendChild(genderSpot);
		contentSpot.appendChild(dateSpot);
		contentSpot.appendChild(commentSpot);

		const birthday = new Date(date);
		const ageMiliSec = new Date() - birthday;
		const age = Math.floor(ageMiliSec / (1000 * 60 * 60 * 24 * 365.25));

		if (age <= 25 && paket === 'basic') {
			ofAgeSpot.innerHTML = `Posto imate ${age} godina, imate pravo na 30% popusta. Vas paket sada kosta 3.5 KM!`
		} else if (age <= 25 && paket === 'premium') {
			ofAgeSpot.innerHTML = `Posto imate ${age} godina, imate pravo na 30% popusta. Vas paket sada kosta 7 KM!`
		} else if (age <= 25 && paket === 'supreme') {
			ofAgeSpot.innerHTML = `Posto imate ${age} godina, imate pravo na 30% popusta. Vas paket sada kosta 10.5 KM!`
		} else {
			ofAgeSpot.innerHTML = 'Nazalost, nemate pravo na popust!'
		}

		contentSpot.appendChild(ofAgeSpot);

		comments.appendChild(contentSpot);
		contentSpot.classList.add("card");

		podaci.style.display = 'block';

		btn.removeEventListener('click', addComment);
	}
}

btn.addEventListener('click', addComment);

function showFromHandler(text) {
	location.hash = "#commentUser";
	form.style.display = 'block';
	subtitle.textContent = `Izabrali ste ${text} paket.`;
	paket = text;
}

btnBasic.addEventListener('click', showFromHandler.bind(null, 'basic'));
btnPremium.addEventListener('click', showFromHandler.bind(null, 'premium'));
btnSupreme.addEventListener('click', showFromHandler.bind(null, 'supreme'));

goBack.addEventListener('click', function () {
	location.hash = "#top"
});