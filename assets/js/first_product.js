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
