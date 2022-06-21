const cart_sidebar = document.querySelector(".addtocart_sidebar");
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

const navbar_Button = document.getElementById("navbar-btn");
const SideBar = document.querySelector(".sideBar");
const MainDIV = document.getElementsByClassName("main");
const CrossButton = document.getElementById("cross_btn");
const sidebar_blur = document.querySelector(".sidebar_blur");

navbar_Button.addEventListener("click", () => {
  // console.log(SideBar);
  SideBar.style.marginLeft = "0px";
  sidebar_blur.style.display = "block";
  SideBar.style.zIndex = "1000";

  // console.log("kaj hoy")
});

const hideSidebarMenu = () => {
  SideBar.style.marginLeft = "-300px";
  sidebar_blur.style.display = "none";
};

CrossButton.addEventListener("click", hideSidebarMenu);

sidebar_blur.addEventListener("touchstart", handleTouchStart, false);
sidebar_blur.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
}

function handleTouchMove(evt) {
  if (!xDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;

  const xDiff = xDown - xUp;

  if (xDiff > 0) {
    hideSidebarMenu();
  }

  xDown = null;
}

//sidebar function ends//

// $("#myFirstCarousel").on("slide.bs.carousel", function (e) {
//   const navbar = document.getElementById("navbar");
//   const shop_text = document.querySelector(".shop-text");
//   switch (e.to) {
//     case 0:
//       navbar.style.background = "#20B2AA";
//       shop_text.style.color = "#F9F9F3";

//       break;
//     case 1:
//       navbar.style.background = "#F6E3BA";
//       shop_text.style.color = "crimson";
//       break;
//     case 2:
//       navbar.style.background = "#BDBCD3";
//       shop_text.style.color = "#1261A0";
//       break;
//     case 3:
//       navbar.style.background = "#F5ACBA";
//       shop_text.style.color = "#0a0";
//       break;
//   }
// });

// ******************************************************

// / more information accordion/

const accordion = document.getElementsByClassName("contentbx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
$(".buy").click(function () {
  $(".bottom").addClass("clicked");
});

$(".remove").click(function () {
  $(".bottom").removeClass("clicked");
});

// ******************************************
// single product radio action
const Radio = document.getElementById("RADIO");
const smallboxradio1 = document.getElementById("smallboxradio1");
const smallboxradio2 = document.getElementById("smallboxradio2");
const smallboxradio3 = document.getElementById("smallboxradio3");

if (smallboxradio1 && smallboxradio2 && smallboxradio3) {
  smallboxradio1.addEventListener("click", () => {
    Radio.checked = true;
  });
  smallboxradio2.addEventListener("click", () => {
    Radio.checked = true;
  });
  smallboxradio3.addEventListener("click", () => {
    Radio.checked = true;
  });
}
// ************************************************************

// /counter /
let counterInput = document.getElementById("numberInput");
const plusButton = document.getElementById("plusbtn");
const minusButton = document.getElementById("minusbtn");

if (counterInput != null) {
  counterInput.value = 0;
  plusButton.addEventListener("click", (e) => {
    counterInput.value++;
    counterInput.innerHTML = counterInput.value;
  });
  minusButton.addEventListener("click", (e) => {
    counterInput.value--;
    counterInput.innerHTML = counterInput.value;
  });
}

// **************************************************************
// /more info/
let items = document.querySelectorAll(".more_info .item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    if (items[i].classList.contains("active")) {
      items[i].classList.remove("active");
    } else {
      let activeNode = null;
      try {
        activeNode = document.querySelector(".more_info. active");
      } catch (msg) {}
      items[i].classList.add("active");
      if (activeNode) {
        activeNode.classList.remove("active");
      }
    }
  });
}

//newsletter/
const newsletterButton = document.querySelector(".newsletter_email");
const subscribeBtn = document.getElementById("newsletter_bttn");
const upperWrapper = document.querySelector(".upper-wrapper");

if (newsletterButton != null) {
  newsletterButton.addEventListener("click", (e) => {
    // console.log("adsaa")
    upperWrapper.style.opacity = "1";
  });
}

function diplay_wide(event) {
  if (event.target.value != "") {
    newsletterButton.style.width = "220px";
    subscribeBtn.addEventListener("click", (e) => {
      alert("Subscription added");
    });
  }
}

// newsletterButton.onfullscreenchange()
// subscribeBtn.addEventListener('click', e => {
//     console.log(newsletterButton.value)
// })

// addtocart counter

var initial = 0;
var initial_2 = 0;

const ROOT = document.getElementById("ROOT");
const ROOT_2 = document.getElementById("ROOT_2");
if ((ROOT != null) & (ROOT_2 != null)) {
  ROOT.innerText = initial;
  ROOT_2.innerText = initial_2;
}

if ((ROOT != null) & (ROOT_2 != null)) {
  function decrement() {
    initial = initial - 1;
    initial_2 = initial_2 - 7.49;

    ROOT.innerText = initial;
    ROOT_2.innerText = parseFloat(initial_2).toFixed(2);
  }
  function increament() {
    initial = initial + 1;
    initial_2 = initial_2 + 7.49;

    ROOT.innerText = initial;
    ROOT_2.innerText = parseFloat(initial_2).toFixed(2);
  }
}
// Box two

var initial_two = 0;
var initial_2_two = 0;

const ROOT_two = document.getElementById("ROOT_two");
const ROOT_2_two = document.getElementById("ROOT_2_two");
if ((ROOT_two != null) & (ROOT_2_two != null)) {
  ROOT_two.innerText = initial_two;
  ROOT_2_two.innerText = initial_2_two;
}

function decrement_two() {
  initial_two = initial_two - 1;
  initial_2_two = initial_2_two - 7.49;

  ROOT_two.innerText = initial_two;
  ROOT_2_two.innerText = parseFloat(initial_2_two).toFixed(2);
}
function increment_two() {
  initial_two = initial_two + 1;
  initial_2_two = initial_2_two + 7.49;

  ROOT_two.innerText = initial_two;
  ROOT_2_two.innerText = parseFloat(initial_2_two).toFixed(2);
}
//box three
var initial_three = 0;
var initial_2_three = 0;
const ROOT_three = document.getElementById("ROOT_three");
const ROOT_2_three = document.getElementById("ROOT_2_three");
if ((ROOT_three != null) & (ROOT_2_three != null)) {
  ROOT_three.innerText = initial_three;
  ROOT_2_three.innerText = initial_2_three;
}

function decrement_three() {
  initial_three = initial_three - 1;
  initial_2_three = initial_2_three - 7.49;

  ROOT_three.innerText = initial_three;
  ROOT_2_three.innerText = parseFloat(initial_2_three).toFixed(2);
}
function increment_three() {
  initial_three = initial_three + 1;
  initial_2_three = initial_2_three + 7.49;

  ROOT_three.innerText = initial_three;
  ROOT_2_three.innerText = parseFloat(initial_2_three).toFixed(2);
}

// sidebar movement

const sidebarButton = document.getElementById("sidebar_top_btn");

if (sidebarButton != null) {
  sidebarButton.addEventListener("click", () => {
    cart_sidebar.style.right = "-330px";
  });
}

//uk ragistration********************************************************************************

//uk registration ends****************************************************************************

//customer profile******************************************************************************

const Personal_profile = document.querySelector(".Profile_info");
const Order_table = document.querySelector(".Table");

const customer_info = document.getElementById("customer_profile_btn");
const order_info = document.getElementById("order_history_btn");

if ((customer_info != null) & (order_info != null)) {
  customer_info.addEventListener("click", (e) => {
    Personal_profile.style.display = "flex";
  });
  order_info.addEventListener("click", (e) => {
    Order_table.style.display = "table";
  });
}
//customer profile ends********************************************************************
//modal for terms and conditions***********************************

const modal_btn = document.getElementById("modal_text");
const modal_bg = document.querySelector(".modal-bg");
const modal_close_btn = document.querySelector(".modal_close");
const modal_tnc_wholsale = document.getElementById("modal_tnc_wholsale");
const modal_btn_2 = document.getElementById("T_and_C");
// console.log({ modal_tnc_wholsale, modal_bg, modal_close_btn })

// if (modal_bg != null && modal_close_btn != null && modal_tnc_wholsale != null && modal_btn != null) {

if (modal_bg != null && modal_btn != null) {
  modal_btn.addEventListener("click", function () {
    modal_bg.classList.add("bg-active");
  });
}
if (modal_close_btn != null) {
  modal_close_btn.addEventListener("click", function () {
    modal_bg.classList.remove("bg-active");
  });
}
if (modal_tnc_wholsale != null) {
  modal_tnc_wholsale.addEventListener("click", function () {
    console.log("asdasdad");
    modal_bg.classList.add("bg-active");
  });
}

if (modal_btn_2 != null) {
  modal_btn_2.addEventListener("click", (e) => {
    e.preventDefault();

    modal_bg.classList.add("bg-active");
  });
}
if (modal_bg != null) {
  modal_bg.addEventListener("click", function () {
    modal_bg.classList.remove("bg-active");
  });
}

// }

const agreeBtn = document.getElementById("i_agree_btn");
const agree_checkbox = document.getElementById("i_agree_checkbox");
const wholesaleCheckbox = document.getElementById("checkbox_wholesale");
const intRegCheckbox = document.getElementById("int_reg_checkbox");
document.querySelector(".modal_tnc")?.addEventListener("click", (e) => {
  e.stopPropagation();
});

if (wholesaleCheckbox != null) {
  wholesaleCheckbox.addEventListener("click", (e) => {
    modal_bg.classList.add("bg-active");
    wholesaleCheckbox.checked = false;
  });
}
if (intRegCheckbox != null) {
  intRegCheckbox.addEventListener("click", (e) => {
    modal_bg.classList.add("bg-active");
    intRegCheckbox.checked = false;
  });
}

if (agreeBtn != null) {
  agreeBtn.addEventListener("click", (e) => {
    modal_bg.classList.remove("bg-active");
    agree_checkbox.checked = true;
  });

  agreeBtn.addEventListener("click", (e) => {
    wholesaleCheckbox.checked = true;
  });

  agreeBtn.addEventListener("click", (e) => {
    intRegCheckbox.checked = true;
  });
}

const stock_nowbtn = document.querySelector(".stocknow_btn");
if (stock_nowbtn != null) {
  stock_nowbtn.addEventListener("click", (e) => {
    e.preventDefault();

    cart_sidebar.style.right = "0px";
  });
}

// user login

const USERBTN = document.getElementById("userbtn");
const LoginModal = document.querySelector(".login_modal_bg");
const login_modal_close = document.getElementById("cross_button");

USERBTN.addEventListener("click", () => {
  console.log(USERBTN);
  LoginModal.classList.add("login_bg_active");
});
login_modal_close.addEventListener("click", () => {
  LoginModal.classList.remove("login_bg_active");
});

const Fromloginbtn = document.getElementById("login_BUTTON");
const FormsignupBtn = document.getElementById("signup_button");

const loginForm = document.querySelector(".LOGIN_FORM");
const signupForm = document.querySelector(".SIGNUP_FORM");

Fromloginbtn.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  FormsignupBtn.style.color = "#777777c2";
  Fromloginbtn.style.color = "black";
});

FormsignupBtn.addEventListener("click", () => {
  loginForm.style.display = "none";

  signupForm.style.display = "block";
  Fromloginbtn.style.color = "#777777c2";
  FormsignupBtn.style.color = "black";
});

// cart sidebar
// const cart_sidebar = document.querySelector(".addtocart_sidebar");

function addToCart() {
  cart_sidebar.style.right = "0px";
}

// login modal
const Login_pass = document.getElementById("login_modal_pass");

function togglePW() {
  const Login_pass = document.getElementById("login_modal_pass");
  const eye_icon = document.getElementById("eye_icon");
  const Signup_pass = document.getElementById("signup_pass");
  const signup_pass_confirm = document.getElementById("signup_pass_confirm");

  if (Login_pass.getAttribute("type") === "password") {
    Login_pass.setAttribute("type", "text");
    eye_icon.style.color = "crimson";
  } else {
    Login_pass.setAttribute("type", "password");
    eye_icon.style.color = "black";
  }
  if (signup_pass_confirm.getAttribute("type") === "password") {
    signup_pass_confirm.setAttribute("type", "text");
    eye_icon.style.color = "crimson";
  } else {
    signup_pass_confirm.setAttribute("type", "password");
    eye_icon.style.color = "black";
  }
}
function togglePW1() {
  const eye_icon = document.getElementById("eye_icon");
  const Signup_pass = document.getElementById("signup_pass");
  if (Signup_pass.getAttribute("type") === "password") {
    Signup_pass.setAttribute("type", "text");
    eye_icon.style.color = "crimson";
  } else {
    Signup_pass.setAttribute("type", "password");
    eye_icon.style.color = "black";
  }
}

// brand linking tools
