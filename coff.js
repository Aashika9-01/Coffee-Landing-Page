let navMenu=document.querySelector('#nav-menu');
let menuBtn=document.querySelector('.menuBtn');
let closeBtn=document.querySelector('.closeBtn');

function openMenu(){
    navMenu.style.display='block';
    menuBtn.style.display='none';
    closeBtn.style.display='block';
}
function closeMenu(){
    navMenu.style.display='none';
    menuBtn.style.display='block';
    closeBtn.style.display='none';
}


let header=document.querySelector('header');
window.addEventListener('scroll',() => {
    header.classList.toggle('shadow',window.scrollY>0);
});

// OrderNow
function OrderNow(){
  window.location.href = "order.html";
}
//submit form
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e){
  e.preventDefault();//page reload hunna

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
 alert("Thank you! Your message was sent.");
      form.reset();//form clear garne
    }else{
      alert('Oops! There was a problem. Please try again.');
    }
  })
  .catch(error => 
    {
      console.error(error);
      alert('Oops! There was a problem. Please try again.');
    });
});

//learn more
function toggleLearn(event) {
    event.preventDefault();

    const extra = document.getElementById("extraContent");
    const btn = document.getElementById("toggleBtn");

    if (extra.style.display === "none") {
        extra.style.display = "block";
        btn.innerText = "View Less";
        
    } else {
        extra.style.display = "none";
        btn.innerText = "Learn More";
    }
}

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,

  // If we need pagination
  pagination: {

    el:'.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

