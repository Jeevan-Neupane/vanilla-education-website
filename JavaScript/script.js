var swiper = new Swiper(".mySwiper", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  });


  var swiper = new Swiper(".myTeachers", {
    slidesPerView: 3,
    spaceBetween: 30,
 
    loop:true ,
    
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  
    

    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      100:{
        slidesPerView: 1,
        spaceBetween: 20,

      },
   
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      }, 1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },},
      
    
  });
  var swiper = new Swiper(".testomonial", {
  
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    breakpoints: {
      100:{
        slidesPerView: 1,
        spaceBetween: 20,

      },
   
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 50,
      }, 1200: {
        slidesPerView: 2,
        spaceBetween: 0,
      },},
  });



  // !Real javaScript

const navBar=document.querySelector("#navContainer");
const menuIcon=document.querySelector(".fa-bars");
const NavSection=document.querySelector(".NavbarSection");


menuIcon.addEventListener("click",()=>{

  navBar.classList.toggle("active");
})


window.onscroll=(event)=>{
  if(navBar.classList.contains("active")){
    navBar.classList.remove("active");
  }
  if(scrollY>=500){

    NavSection.classList.add("showClass");
  }
  else{
    NavSection.classList.remove("showClass")
  }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});