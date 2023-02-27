// Navbar Transparency
window.onscroll = function () {
  scrollFunction();
};

let divHeight = document.getElementById("sec1").clientHeight;
// var divHeight = document.getElementById("sec1").offsetHeight;

function scrollFunction() {
  if (
    document.body.scrollTop > divHeight ||
    document.documentElement.scrollTop > divHeight
  ) {
    // console.log(divHeight);
    document.querySelector(".navbar").classList.add("scrolled");
    document.querySelector(".navbar").style.backgroundColor = "#fff";
  } else {
    // console.log(divHeight);
    document.querySelector(".navbar").classList.remove("scrolled");
    document.querySelector(".navbar").style.backgroundColor = "#007aff";
  }
}

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

// how to use a variable inside a setInterval globally

document.addEventListener("DOMContentLoaded", () => {
  //===== MICRO-SLIDER begin
  const __ms = document.querySelector(".micro-slider");
  const __msSlider = new MicroSlider(__ms, {
    indicators: true,
    indicatorText: "",
  });
  const hammer = new Hammer(__ms);
  const __msTimer = 10000;
  let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);

  //detect mouseenter event
  __ms.onmouseenter = function (e) {
    clearInterval(__msAutoplay);
    console.log(e.type + " mouse detected");
  };

  //detect mouseleave event
  __ms.onmouseleave = function (e) {
    clearInterval(__msAutoplay);
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + " mouse detected");
  };

  //detect mouseclick event
  __ms.onclick = function (e) {
    clearInterval(__msAutoplay);
    console.log(e.type + " mouse detected");
  };

  //detect gesture tap event with hammer js library
  hammer.on("tap", function (e) {
    clearInterval(__msAutoplay);
    console.log(e.type + " gesture detected");
  });

  //detect gesture swipe event with hammer js library
  hammer.on("swipe", function (e) {
    clearInterval(__msAutoplay);
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + " gesture detected");
  });

  let slideLink = document.querySelectorAll(".slider-item");
  if (slideLink && slideLink !== null && slideLink.length > 0) {
    slideLink.forEach((el) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href !== "#") window.open(href, target);
      })
    );
  }

  //===== MICRO-SLIDER end
});

// Caraousel Slide Media Query

//how to write code like media queries in javascript

// const width = window.innerWidth;
// document.querySelector(".slider-item").style.height="250px";

//Reveal on Scrolling

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    };
    // } else {
    //   reveals[i].classList.remove("active");
    // }
  };
};

//No right click 
document.addEventListener('contextmenu', event => event.preventDefault());
