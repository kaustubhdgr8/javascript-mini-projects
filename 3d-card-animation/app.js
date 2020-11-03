const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(250px) rotateZ(-45deg)";
  description.style.transform = "translateZ(80px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(100px)";
});
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease-out";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  title.style.transform = "translateZ(0)";
  sneaker.style.transform = "translateZ(0) rotateZ(0)";
  description.style.transform = "translateZ(0)";
  sizes.style.transform = "translateZ(0)";
  purchase.style.transform = "translateZ(0)";
});
container.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 20;
  let y = (window.innerHeight / 2 - e.pageY) / 20;

  card.style.transition = "all 0.5s ease-out";
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
