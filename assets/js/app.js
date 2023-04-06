let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
burger.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  console.log([...burger.classList].includes("active"));
  if ([...burger.classList].includes("active")) {
    [...document.querySelectorAll(".bg")].map((a) => {
      a.style.filter = "blur(5px)";
      document.body.style.overflow="hidden"
    });
    // document.querySelector("header").style.filter = "blur(5px)";
  } else {
    [...document.querySelectorAll(".bg")].map((a) => {
      a.style.filter = "blur(0px)";
      document.body.style.overflow="auto"

    });
  }
});
