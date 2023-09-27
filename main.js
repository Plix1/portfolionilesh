let menu = document.querySelector(".burger");
let menuUl = document.querySelector(".menuUl");
let textarea = document.querySelector("textarea");

menu.addEventListener("click", () => {
  menuUl.classList.toggle("menuActive");
  console.log("its working");
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loading");
  loader.classList.add("loading-end");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

textarea.addEventListener("keyup", (e) => {
  let scHeight = e.target.scrollHeight;
  console.log(scHeight);
  textarea.style.height = `${scHeight}px`;
});
