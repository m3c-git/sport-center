// slider
let sliderImg = document.querySelector(".slider-img");
let images = ["natationAccueil.jpg", "streetwAccueil.jpg", "footAccueil.jpg"]
let i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return sliderImg.setAttribute('src', images[i]);

}
