const backToTopButton = document.getElementById("back-to-top");

// Function to toggle the visibility of the button
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // Show the button when scrolled down 100px
    backToTopButton.style.opacity = "1";
    backToTopButton.style.visibility = "visible";
  } else {
    // Hide the button when at the top
    backToTopButton.style.opacity = "0";
    backToTopButton.style.visibility = "hidden";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
}
