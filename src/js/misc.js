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
  if (n == 7) {
    let url = "www.antomopozap.com/src/misc/exel.pdf";
    window.open(url, "_blank").focus();
  } else {
    const selected = document.getElementById(`pag${n}`);
    for (let i = 1; i < 7; i++) {
      gsap.to(document.getElementById(`pag${i}`), 0.1, { opacity: 0 });
    }
    gsap.to(selected, 0.2, { opacity: 1 });
  }
}
