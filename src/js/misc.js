//!Load up main page
$("#container").load(`./src/pages/page0.html`);

//!Popup
function funcpopup() {
  $("#container").load(`./src/pages/page0.html`);
  activeNav.style.opacity = "0";
  gsap.to(links, { color: "#FFF" });
  const popup = document.getElementById("popup");
  gsap.to(popup, 0.5, { opacity: 1 });
  setTimeout(() => {
    gsap.to(popup, 0.5, { opacity: 0 });
  }, 1500);
}

//?DEATH
function death() {
  $("#container").load(`./src/pages/death.html`);
}

setTimeout(() => {
  $("#container").load(`./src/pages/page0.html`);
}, 100);

//!death

function morte(n) {
  const selected = document.getElementById(`pag${n}`);
  const first = document.getElementById(`pag1`);
  const second = document.getElementById(`pag2`);
  const third = document.getElementById(`pag3`);
  const fourth = document.getElementById(`pag4`);
  const fifth = document.getElementById(`pag5`);
  gsap.to(first, 0.1, { opacity: 0 });
  gsap.to(second, 0.1, { opacity: 0 });
  gsap.to(third, 0.1, { opacity: 0 });
  gsap.to(fourth, 0.1, { opacity: 0 });
  gsap.to(fifth, 0.1, { opacity: 0 });
  gsap.to(selected, 0.2, { opacity: 1 });
}

//!Preload images
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
    console.log(`Preloaded: ${i}`);
  }
}

preload(
  "../img/dumbshit.jpg",
  "../img/goated.jpg",
  "../img/mf.jpg",
  "../img/pag1.jpg",
  "../img/pag2.jpg",
  "../img/pag3.jpg",
  "../img/pag4.jpg",
  "../img/pag5.jpg",
  "../img/homeimg.jpg"
);
