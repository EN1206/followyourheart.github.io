// SWIPER
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 50,
    speed: 900,
    loop: true,
    //slideToClickedSlide: true
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  // SWIPER MODAL
  // all images inside the image modal content class
  const modalImage = document.querySelectorAll(".swiper-slide img");
  
  
  // dynamically selects all elements inside modal popup
  const modalElement = (element) =>
    document.querySelector(`.swiper-modal-popup ${element}`);
  
  const body = document.querySelector("body");
  
  // closes modal on clicking anywhere and adds overflow back
  document.addEventListener("click", () => {
    body.style.overflow = "auto";
    modalPopup.style.display = "none";
  });
  
  const modalPopup = document.querySelector(".swiper-modal-popup");
  
  // loops over each modal content img and adds click event functionality
  modalImage.forEach((img) => {
    const data = img.dataset;
    img.addEventListener("click", (e) => {
      body.style.overflow = "hidden";
      e.stopPropagation();
      modalPopup.style.display = "block";
  
      modalElement("img").src = img.src;
    });
  });
  
  // DOTS
  // slides.forEach((slide) => {
  //   const dot = document.createElement("div");
  //   dot.classList.add("dot");
  //   dotsEl.appendChild(dot);
  // });
  function getActiveDot() {
    const allDots = document.querySelectorAll(".swiper-pagination .dot");
    allDots.forEach((dot) => {
      dot.classList.remove("active");
    });
    const activeSlide = document.querySelector(".slide.active");
    const activeIndex = slides.indexOf(activeSlide);
    allDots[activeIndex].classList.add("active");
  }
  function functionalDots() {
    const allDots = document.querySelectorAll(".swiper-pagination .dot");
    allDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        getDotSlide(index);
      });
    });
  }
  // function getDotSlide(index) {
  //   clearTimeout(timeoutId);
  //   slides.forEach((slide) => {
  //     slide.classList.remove("active");
  //   });
  //   const current = slides[index];
  //   current.classList.add("active");
  //   getPosition();
  //   getActiveDot();
  // }
  // getActiveDot();
  // functionalDots();