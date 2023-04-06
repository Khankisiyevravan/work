let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  console.log([...burger.classList].includes("active"));
  if ([...burger.classList].includes("active")) {
    document.querySelector(".bg").style.filter = "blur(5px)"
    // document.querySelector("header").style.filter = "blur(5px)";
  }else{
    document.querySelector(".bg").style.filter = "blur(0px)"
  }
});
