const div = document.createElement("div");
const buttonNext = document.createElement("button");
const buttonPrev = document.createElement("button");

buttonNext.innerText = "Next";
buttonPrev.innerText = "Prev";
buttonNext.id = "nextButton";
buttonPrev.id = "prevButton";
div.appendChild(buttonNext);
div.appendChild(buttonPrev);

const Slider = document.querySelector("ul");
Slider.className = "slider";

const listOfPhotos = document.querySelectorAll("li");
console.log(listOfPhotos);

let currentPhotoCounter = 0;
listOfPhotos[0].classList.add("visible");

for (let l = 0; l < listOfPhotos.length; l++) {
    listOfPhotos[l].value = l;
    if (listOfPhotos[l].value === currentPhotoCounter) {
        listOfPhotos[l].classList.add("visible");
    } else {
        listOfPhotos[l].classList.add("hidden");
    }
}

buttonNext.addEventListener("click", function() {
    console.log("kliknięty next");

});

buttonPrev.addEventListener("click", function() {
    console.log("kliknięty prev")
});
