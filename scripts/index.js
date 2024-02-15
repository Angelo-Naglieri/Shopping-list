function themeSwitch(themeIcon){
  const body = document.querySelector("body");
  // Change the buttons icon
  if(localStorage.theme === "light"){
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.theme = "dark";
  }else if(localStorage.theme === "dark"){
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.theme = "light";
  }
  // Switch theme
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");
}

document.addEventListener("DOMContentLoaded", ()=>{
  const body = document.querySelector("body");
  const themeIcon = document.getElementById("ldMode-btn");
  if(localStorage.theme === undefined){
    localStorage.setItem("theme", "light");
  }else if(localStorage.theme === "dark"){
    themeIcon.classList.replace("fa-moon", "fa-sun");
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
  }
})