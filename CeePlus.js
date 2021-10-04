
const navBtn = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

/*make navigation close as the navlink is clicked */
let links = document.querySelectorAll('.navLink');
//event listener for each links
links.forEach(link => {  
  link.addEventListener('click', () => {
  navbar.classList.remove("showNav");
  }); 
});
 

/**Update the copyright year automatically*/
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

