const SLIDES = document.querySelectorAll(".SLIDE");
const PREV = document.querySelector(".PREV");
const NEXT = document.querySelector(".NEXT");

let Index = 0;
if (PREV != null) {
  PREV.addEventListener("click", function () {
    prevSlide();
  });
}

if (NEXT != null) {
  NEXT.addEventListener("click", function () {
    nextSlide();
  });
}

function prevSlide() {
  // console.log("prev");

  if (Index == 0) {
    Index = SLIDES.length - 1;
  } else {
    Index--;
  }
  changeSlide();
}

function nextSlide() {
  if (Index == SLIDES.length - 1) {
    Index = 0;
  } else {
    Index++;
  }
  changeSlide();
}

function changeSlide() {
  SLIDES.forEach(function (item) {
    item.classList.remove("slideActive");
  });
  SLIDES[Index].classList.add("slideActive");

  let indicators = document.querySelectorAll(".indicatorContainer > div");
  indicators.forEach(function (indicator) {
    indicator.classList.remove("slideActive");
  });
  indicators[Index].classList.add("slideActive");
}
const indicatorContainer = document.querySelector(".indicatorContainer");

function buildIndicator() {
  for (let i = 0; i < SLIDES.length; i++) {
    let Element = document.createElement("div");
    Element.dataset.i = i + 1;
    Element.setAttribute("onclick", "gotoSlide(this)");

    if (i == 0) {
      Element.classList.add("slideActive");
    }

    indicatorContainer.appendChild(Element);
  }
}
buildIndicator();

function gotoSlide(element) {
  let k = element.dataset.i;
  Index = k - 1;
  changeSlide();
}

let Time = setInterval(nextSlide, 5000);
