// Sections Animation =======================>>

AOS.init({
  offset: window.visualViewport.width < 700 ? 35 : 280,
  duration: 1300,
});

let tech = document.querySelector(".tech");

if (window.visualViewport.width < 600) {
  tech.style.display = "none";
}
let loader = document.getElementById("preloader");

// Preloader =======================>>

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// Cursor effect
let main = document.querySelector("body");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x - 10 + "px";
  cursor.style.top = dets.y - 7 + "px";
});

// Typed Js effect =======================>>

const typed = new typed(".multiple_text", {
  strings: ["Better Vision", "New Joy", "nature"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Locomotive scroll

document.addEventListener("DOMContentLoaded", function () {
  // Define Locomotive Scroll options
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true, // Enable smooth scrolling
    getDirection: true, // Get scroll direction
    getSpeed: true, // Get scroll speed
    getDirection: true, // Get scroll direction
    inertia: 0.8, // Adjust the scroll inertia for smoother motion
    smoothMobile: true, // Disable smooth scrolling on mobile devices if desired
  });

  // Add event listener to re-init Locomotive Scroll after a window resize

  window.addEventListener("resize", () => {
    scroll.destroy(); // Destroy the current instance
    scroll.init(); // Re-initialize Locomotive Scroll
  });
});
