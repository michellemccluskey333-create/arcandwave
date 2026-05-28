const header = document.querySelector(".site-header");

function toggleHeader() {
  if (window.scrollY > 180) {
    header.classList.add("is-visible");
  } else {
    header.classList.remove("is-visible");
  }
}

window.addEventListener("scroll", toggleHeader);
toggleHeader();
