const themeBtn = document.querySelector(".theme-toggle");
const htmlClassList = document.documentElement.classList;
themeBtn.addEventListener("click", function () {
  if (htmlClassList.contains("dark")) {
    localStorage.setItem("theme", "light");
    htmlClassList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    htmlClassList.add("dark");
  }
});

const navBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});
