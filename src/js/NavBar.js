gsap.registerPlugin(Flip);

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  nav.classList.toggle("nav-active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
  burger.classList.toggle("toggle");
}

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    activeNav.style.opacity = "100";
    gsap.to(links, { color: "#FFF" });

    if (document.activeElement === link) {
      gsap.to(link, { color: "#8ac1e6" });
    }

    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 0.3,
      absolute: true,
    });
  });
});

function setPage(n) {
  $("#container").load(`./src/pages/page${n}.html`);
  if (n == 0) {
    activeNav.style.opacity = "0";
    gsap.to(links, { color: "#FFF" });
  }
}
