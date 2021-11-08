const menu = document.querySelector('#hamburger');
const links = document.querySelector('nav');
const closeIcon = document.querySelector('#close-icon');

//Toggle to menu hamburger
menu.addEventListener('click', function(){
links.classList.toggle('show-links');
});

//Close the side bar once the close icon gets clicked
closeIcon.addEventListener('click', function(){
    links.classList.remove('show-links');
});

let navLinks = document.querySelectorAll('.nav-link');
//event listener for each links
navLinks.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
  }); 
});

//Update the copyright year automatically
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//add loader to page
const mainContent =  document.getElementById('ceeplus-ng');
const pageloader = document.getElementById('loader')

setTimeout( () => {
  mainContent.style.display = 'block';
  pageloader.style.display = 'none'
}, 5000)
