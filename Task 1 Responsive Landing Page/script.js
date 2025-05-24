const colors = [
  "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  "linear-gradient(to right, #1a1a1d, #2d2d30)",
  "linear-gradient(to right, #111111, #222222)",
  "linear-gradient(to right, #141e30, #243b55)"
];

let current = 0;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const height = window.innerHeight;
  const index = Math.min(colors.length - 1, Math.floor(scrollY / height));

  if (index !== current) {
    document.body.style.transition = "background 1s ease-in-out";
    document.body.style.background = colors[index];
    current = index;
  }
});




