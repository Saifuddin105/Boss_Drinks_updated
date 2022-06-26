const sub_tab = document.querySelector(".subscription_tab");
const one_time_tab = document.querySelector(".onetime_tab");
const sub_tab_info = document.querySelector(".sub_tab_info");
const onetme_info = document.querySelector(".one_time_info");
const one_time_radio = document.getElementById("one_time_radio");
const subs_radio = document.getElementById("subs_radio");

sub_tab.addEventListener("click", (e) => {
  e.preventDefault();
  sub_tab.classList.remove("active_2");
  one_time_tab.classList.remove("active");
  sub_tab_info.style.display = "block";
  onetme_info.style.display = "none";
  console.log(document.getElementById("html"));
  subs_radio.checked = true;
});
one_time_tab.addEventListener("click", (e) => {
  e.preventDefault();
  one_time_tab.classList.add("active");
  // sub_tab.classList.remove("active");
  sub_tab.classList.add("active_2");
  sub_tab_info.style.display = "none";
  onetme_info.style.display = "block";
  one_time_radio.checked = true;
});

//add to cart functionality

const addtocart = document.querySelector(".addtocart_sidebar");
const sidebar_close_btn = document.querySelector("#sidebar_top_btn");

function addTocart() {
  addtocart.style.right = "0px";
  sidebar_blur.style.display = "block";
}
sidebar_close_btn.addEventListener("click", (e) => {
  addtocart.style.right = "-330px";
  sidebar_blur.style.display = "none";
});
var initial = 0;
var initial_2 = 0;

const ROOT = document.querySelector(".ROOT");
const ROOT_2 = document.querySelector(".ROOT_2");
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
const ROOT_three = document.querySelector(".ROOT_three");
const ROOT_2_three = document.querySelector(".ROOT_2_three");
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
// newsletter finction
