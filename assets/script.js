const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Création des variables
let compteur = 0;

let swipeGauche = document.querySelector(".arrow_left");
let swipeDroite = document.querySelector(".arrow_right");
let DivBulletPoints = document.querySelector(".dots");
let slideImage = document.querySelector(".banner-img");
let slideText = document.querySelector(".paragraphe");

//Boucle création des bullet points pour chaque image + classes avec numéro
for (let i = 0; i < slides.length; i++) {
    let bulletPoint = document.createElement("div");
	bulletPoint.classList.add("dot");
	bulletPoint.classList.add(`dot${i}`)
    DivBulletPoints.appendChild(bulletPoint);
};

//Assigner class pour le point sélectionné
let selectedBulletPoint = document.querySelector(`.dot${compteur}`);
selectedBulletPoint.classList.add("dot_selected");

//Fonction pour swipe droite ou gauche selon la direction renvoyée + changement texte, image et point sélectionné
function changeSlide(direction) {
	selectedBulletPoint.classList.remove("dot_selected")
	if (direction === 'gauche') {
		compteur--
		if (compteur < 0) {
			compteur = slides.length - 1
		}
	} else if (direction === 'droite') {
	compteur++
		if (compteur > slides.length - 1) {
			compteur = 0
		}
	} else {
		console.log('error')
	}
	slideImage.src = "./assets/images/slideshow/" + slides[compteur].image;
	slideText.innerHTML = slides[compteur].tagLine;
	selectedBulletPoint = document.querySelector(`.dot${compteur}`);
	selectedBulletPoint.classList.add("dot_selected");
};

//Event flèche de droite
swipeDroite.addEventListener("click", function() {
	console.log("Vous avez cliqué sur le bouton droit!");
	changeSlide('droite');
});

//Event flèche de gauche
swipeGauche.addEventListener("click", function() {
	console.log("Vous avez cliqué sur le bouton gauche!");
	changeSlide('gauche');
});

