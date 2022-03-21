"use strict";

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section-1");
const nav = document.querySelector(".nav");

// Set date
date.innerHTML = new Date().getFullYear();

// Add sticky navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
    navBtn.style.color = "rgb(211, 19, 115)";
  } else {
    navbar.classList.remove("navbar-fixed");
    navBtn.style.color = "black";
  }
});

// Show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

//Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Button scrolling
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".sidebar-links").addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("sidebar-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      sidebar.classList.remove("show-sidebar");
    }
  });

// When user clicks on the button, scroll to the top of the document
const btnTop = document.querySelector(".btn-top");

function scrollFunction() {
  if (
    document.body.scrollTop > 850 ||
    document.documentElement.scrollTop > 850
  ) {
    btnTop.style.display = "block";
    btnTop.innerHTML = "back to top";
    btnTop.style.textTransform = "capitalize";
    btnTop.style.cursor = "pointer";
  } else {
    btnTop.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

const buttonTop = function () {
  btnTop.addEventListener("click", () => {
    window.scroll({ behavior: "smooth", top: 0 });
  });
};
buttonTop();

const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener("click", () => {
  removeActiveClasses();
  panel.classList.add('active');
}));

function removeActiveClasses() {
  panels.forEach(panel => panel.classList.remove('active'));
}

// Animate the H1 element in the header
var textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml12 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: ".ml12 .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i,
  });
