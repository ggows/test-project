const images = ["3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.id = "background";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);