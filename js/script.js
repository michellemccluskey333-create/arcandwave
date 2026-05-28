function updateScrolledHeader() {
  document.body.classList.toggle("has-scrolled", window.scrollY > 80);
}

updateScrolledHeader();
window.addEventListener("scroll", updateScrolledHeader);
