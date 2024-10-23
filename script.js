/** NAV BTN  */
const navCloseBtn = document.querySelector(".header-mobile__close-btn");
const headerMobile = document.querySelector(".header-mobile");

navCloseBtn.addEventListener("click", function (e) {
  headerMobile.classList.remove("active");
});

/** desk open btn */
const desktopOpenBtn = document.querySelector(".header__hamburger-btn");

desktopOpenBtn.addEventListener("click", function (e) {
  headerMobile.classList.add("active");
});

/** Hover Effects on Arrow */

const videoBox = document.querySelectorAll(".videos__box");
const videoContainer = document.querySelector(".videos");
const videoHoverImg = document.querySelector(".videos__hover-images");
const videoImg = document.querySelector(".videos__img");

videoBox.forEach((box) => {
  box.addEventListener("mouseenter", function (e) {
    const src = e.target.dataset.src;

    videoImg.setAttribute("src", src);
  });
});

videoBox.forEach((box) => {
  box.addEventListener("mouseleave", function (e) {
    const id = e.target.dataset.id;
  });
});

videoContainer.addEventListener("mouseover", function (e) {
  const X = e.clientX / 1.5;
  const Y = e.clientY;
  videoHoverImg.style.display = "block";
  videoHoverImg.style.top = `${Y}px`;
  videoHoverImg.style.left = `${X}px`;
  videoHoverImg.style.transition = `top 0.5s ease, left 0.5s ease`;
});

videoContainer.addEventListener("mouseleave", function (e) {
  videoHoverImg.style.display = "none";
});

/** TIMMING RUN FUNCTION */
const minutes = document.querySelector(".hero__column-2-minutes");
const seconds = document.querySelector(".hero__column-2-seconds");
const colories = document.querySelector(".hero__column-2-calories");

let num = 0;

const timeId = setInterval(function () {
  num++;

  if (num >= 38) {
    clearInterval(timeId);
  }
  minutes.innerHTML = num;
}, 50);

let sec = 0;

const secondId = setInterval(function () {
  sec++;
  if (sec >= 55) {
    clearInterval(secondId);
  }
  seconds.innerHTML = sec;
}, 35);

let colo = 200;

const coloId = setInterval(function () {
  colo--;
  if (colo <= 165) {
    clearInterval(coloId);
  }
  colories.innerHTML = colo;
}, 50);

/** WORKOUT PROGRAM LINE EFFECT */
const workoutProgramBox = document.querySelector(".workout-program-box-1");
const workoutProgramImgBox = document.querySelector(
  ".workout-program-box-1-imgbox"
);

function functionIntersection() {
  const options = {
    root: null,
    threshold: 0.5,
  };

  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        workoutProgramImgBox.style.width = `min(70%, 500px)`;
        workoutProgramImgBox.style.transition = `width 2s ease`;
        observer.unobserve(workoutProgramBox);
      } else {
        workoutProgramImgBox.style.width = `min(0%, 0px)`;
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);
  observer.observe(workoutProgramBox);
}

functionIntersection();
