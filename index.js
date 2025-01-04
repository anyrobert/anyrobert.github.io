const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
};

let startY = 0;
let currentY = 0;

const navElement = document.querySelector("#nav");

navElement.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

navElement.addEventListener("touchmove", (e) => {
  currentY = e.touches[0].clientY;
});

navElement.addEventListener("touchend", () => {
  const diffY = currentY - startY;
  const threshold = 50; // minimum swipe distance in pixels

  if (Math.abs(diffY) > threshold) {
    if (diffY > 0) {
      // Swipe down
      document.body.dataset.nav = "false";
    } else {
      // Swipe up
      document.body.dataset.nav = "true";
    }
  }
});

let viewHeight = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${viewHeight}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
