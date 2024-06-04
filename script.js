function downloadCV() {
  const link = document.createElement("a");
  link.href = "./Documents/delosReyes_CV.pdf";
  link.download = "delosReyes_CV.pdf"; // Set the downloaded file name
  link.click();
}

/* Add this to script.js */
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").includes(current)) {
      item.classList.add("active");
    }
  });
});

/* Add this to script.js */
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-right");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });
});
