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
