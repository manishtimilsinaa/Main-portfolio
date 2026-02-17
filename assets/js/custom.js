function handleLoadingAnimation() {
  const loader = document.querySelector('.loader');
  const mainContainer = document.querySelector('.main-container');
  
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1600);
  setTimeout(() => {
    mainContainer.classList.add('loaded');
  }, 1800);
}

document.addEventListener("DOMContentLoaded", function() {
  handleLoadingAnimation();
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header"); 
  if (window.scrollY > 50) {
      header.classList.add("fixed");
      header.style.opacity = "1";
  } else {
      header.classList.remove("fixed");
      header.style.opacity = "1";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const offcanvasLinks = document.querySelectorAll(".offcanvas-link");
  const offcanvas = document.getElementById("offCanvas");
  const bootstrapOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);

  offcanvasLinks.forEach((link) => {
      link.addEventListener("click", function () {
          bootstrapOffcanvas.hide();
      });
  });
});

$(".navigation a, .hire-btn, .offcanvas-contents a") .on("click" , function(event){
  event.preventDefault();
  var target = $($(this).attr("href"));
  if (target.length) {
    var targetPos = target.offset().top - 40;
    $("html , body").scrollTop(targetPos);
}
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [ "Automation Testing", "Manual Testing", "API Testing", "Performance Testing", "Security Testing", "Mobile Testing" ];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 700;

let textArrayIndex = 0;
let charIndex = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function type() {
    cursorSpan.style.opacity = "1";
    while (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex][charIndex];
        charIndex++;
        await sleep(typingDelay);
    }
    cursorSpan.style.opacity = "0";
    await sleep(newTextDelay);
    erase();
}

async function erase() {
    cursorSpan.style.opacity = "1";
    while (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        await sleep(erasingDelay);
    }
    cursorSpan.style.opacity = "0";
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    await sleep(newTextDelay);
    type();
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".about-link");
  const contents = document.querySelectorAll(".content");

  links.forEach((link) => {
      link.addEventListener("click", function () {
          links.forEach((link) => link.classList.remove("active"));
          this.classList.add("active");

          contents.forEach((content) => content.classList.remove("active"));

          const target = this.getAttribute("data-target");
          document.querySelector(`.${target}`).classList.add("active");
      });
  });
});

jQuery(document).ready(function () {
  jQuery(".progress-bar-skill").each(function () {
      jQuery(this)
          .find(".progress-content")
          .animate(
              {
                  width: jQuery(this).attr("data-percentage"),
              },
              2000
          );

      jQuery(this)
          .find(".progress-number-mark")
          .animate(
              { left: jQuery(this).attr("data-percentage") },
              {
                  duration: 2000,
                  step: function (now, fx) {
                      var data = Math.round(now);
                      jQuery(this)
                          .find(".percent")
                          .html(data + "%");
                  },
              }
          );
  });
});


// Function to initialize Slick Slider
  $('.testi-slider').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '.prev-btn',
      nextArrow: '.next-btn',
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false 
              }
          },
      ]
  });

