// scripts.js
// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelectorAll('.slide');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');
//     const slideWidth = slides[0].offsetWidth;
//     let index = 0;

//     function updateSlider() {
//         const offset = -index * slideWidth;
//         slider.style.transform = `translateX(${offset}px)`;
//         updateButtons();
//     }

//     function updateButtons() {
//         // Disable previous button if at the first slide
//         if (index === 0) {
//             prevButton.disabled = true;
//         } else {
//             prevButton.disabled = false;
//         }

//         // Disable next button if at the last slide
//         if (index === slides.length - 1) {
//             nextButton.disabled = true;
//         } else {
//             nextButton.disabled = false;
//         }
//     }

//     prevButton.addEventListener('click', () => {
//         if (index > 0) {
//             index -= 1;
//             updateSlider();
//         }
//     });

//     nextButton.addEventListener('click', () => {
//         if (index < slides.length - 1) {
//             index += 1;
//             updateSlider();
//         }
//     });


//     // Initialize button states
//     updateButtons();


// });



new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1, // Default for mobile

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Breakpoints for responsive behavior
    breakpoints: {
        // When the window width is >= 768px (desktop)
        768: {
            slidesPerView: 3, // 3 slides per view on desktop
        },
        // You can add more breakpoints if needed
        // 1024: {
        //     slidesPerView: 4,
        // },
    }
});
