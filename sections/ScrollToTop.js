const scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});
