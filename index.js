
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        newIndex = newIndex < 0 ? slides.children.length - 1 : newIndex % slides.children.length;
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

const section = document.querySelector("#hero-section");
const navbar = document.querySelector("#scrollNav");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navbar.classList.remove("show");
    } else {
      navbar.classList.add("show");
    }
  });
});
observer.observe(section);

// ---------------------------show nav--------------------------
const showNav = document.querySelector(".show-on-scroll");
const showButtons = document.querySelector(".show-btn");
const closeButtons = document.querySelector(".close-btn");
const links = document.querySelectorAll(".scroll-nav a");

showButtons.addEventListener("click", function() {
  showNav.classList.add("show-2");
});

closeButtons.addEventListener("click", function() {
  showNav.classList.remove("show-2");
});

links.forEach(function(link) {
  link.addEventListener("click", function() {
    showNav.classList.remove("show-2");
  });
});



// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1
//         const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        
//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         if(newIndex < 0) newIndex = slides.children.length - 1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active
//     })
// })


// const section = document.querySelector("#hero-section");
// const navbar = document.querySelector("#scrollNav");

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       navbar.classList.remove("show");
//     } else {
//       navbar.classList.add("show");
//     }
//   });
// });

// observer.observe(section);



