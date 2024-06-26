function downloadCV() {
  const link = document.createElement("a");
  link.href = "./Documents/delosReyes_CV.pdf";
  link.download = "delosReyes_CV.pdf";
  link.click();
}

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

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-right");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("scrollButton1")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });

  document
    .getElementById("scrollButton2")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
    });

  document
    .getElementById("scrollButton3")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document
        .getElementById("experience")
        .scrollIntoView({ behavior: "smooth" });
    });

  document
    .getElementById("scrollButton4")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

  document
    .getElementById("scrollButton5")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
