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

// console.log({ modal_tnc_wholsale, modal_bg, modal_close_btn })

// if (modal_bg != null && modal_close_btn != null && modal_tnc_wholsale != null && modal_btn != null) {

// }

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
const login_modal_close = document.querySelector("#cross_button");
const login_phone_number = document.querySelector(".login_btn_class4");

USERBTN.addEventListener("click", () => {
  console.log(USERBTN);
  LoginModal.classList.add("login_bg_active");
});
login_modal_close.addEventListener("click", () => {
  LoginModal.classList.remove("login_bg_active");
});

const Fromloginbtn = document.querySelector("#login_BUTTON");
const FormsignupBtn = document.querySelector("#signup_button");

const loginForm = document.querySelector(".LOGIN_FORM");
const signupForm = document.querySelector(".SIGNUP_FORM");
const signup_mobile_section = document.querySelector(".continue_mobile_full");

Fromloginbtn.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  FormsignupBtn.style.color = "#777777c2";
  Fromloginbtn.style.color = "black";
  signup_mobile_section.style.display = "none";
});

FormsignupBtn.addEventListener("click", () => {
  loginForm.style.display = "none";

  signupForm.style.display = "block";
  Fromloginbtn.style.color = "#777777c2";
  FormsignupBtn.style.color = "black";
  signup_mobile_section.style.display = "none";
});
login_phone_number.addEventListener("click", () => {
  loginForm.style.display = "none";

  signupForm.style.display = "none";

  Fromloginbtn.style.color = "#777777c2";
  FormsignupBtn.style.color = "black";
  signup_mobile_section.style.display = "block";
});

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

//newsletter modal opens

const modal_newsletter_tnc = document.getElementById(
  "newsletter_tnc_modal_btn"
);
const modal_bg = document.querySelector(".modal-bg");
const modal_close_btn = document.querySelector(".modal_close");
const modal_tnc_content = document.querySelector(".modal_tnc");
const modal_main_heading = document.getElementById("main_heading");
const agreeBtn = document.getElementById("i_agree_btn");
const sign_up_terms = document.getElementById("Anchor");
const login_form_checkbox = document.getElementById("login_form_checkbox");
const newsletter_checkbox = document.querySelector("#switch");

modal_newsletter_tnc.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.add("bg-active");
});

modal_close_btn.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.remove("bg-active");
});

agreeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.remove("bg-active");
  newsletter_checkbox.checked = true;
});
sign_up_terms.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.add("bg-active");
});
agreeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.remove("bg-active");
  login_form_checkbox.checked = true;
});
