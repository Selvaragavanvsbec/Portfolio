
/*==================== GREETING ====================*/ 
document.addEventListener('DOMContentLoaded', () => {
  const greetings = ["வணக்கம்", "नमस्ते", "ನಮಸ್ಕಾರ", "ഹലോ", "Bonjour", "హలో", "Hello"];
  const greetingText = document.getElementById('greeting-text');
  const greetingContainer = document.getElementById('greeting-container');
  const portfolioHeader = document.getElementById('portfolio-header');

  let index = 0;

  const showGreeting = () => {
    if (index < greetings.length) {
      greetingText.textContent = greetings[index];
      index++;
      setTimeout(showGreeting, 260);
    } else {
      greetingContainer.style.display = 'none';
      document.querySelectorAll('.hidden').forEach(element => {
        element.style.display = 'block';
      });
    }
  };

  showGreeting();
});
document.addEventListener('DOMContentLoaded', function() {
  const greetingContainer = document.getElementById('greeting-container');
  const greetingText = document.getElementById('greeting-text');
  
  // Your greeting text animation logic here
  
  // Remove splash screen after animation
  setTimeout(() => {
      greetingContainer.style.opacity = '0';
      setTimeout(() => {
          greetingContainer.style.display = 'none';
      }, 500); // Fade out transition time
  }, 3000); // Adjust time as needed
});

/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });
/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >=80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", () => {
    box.style.backgroundColor = "#fff";
    box.style.color = "black";
  });
});