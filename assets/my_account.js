const current_email = document.querySelector(".current_email");
const change_email = document.querySelector(".change_email");
const email_edit_btn = document.getElementById("edit_button");
const email_cancel_btn = document.getElementById("cancel_Btn");

email_edit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  change_email.style.display = "block";

  current_email.style.display = "none";
});

email_cancel_btn.addEventListener("click", (e) => {
  e.preventDefault();
  change_email.style.display = "none";
  current_email.style.display = "block";
});

const New_password = document.getElementById("new_password");
const Confirm_new_pass = document.getElementById("confirm_new_pass");
const eye_icon_pass = document.getElementById("Eye_Icon");
const eye_icon_pass_confirm = document.getElementById("Eye_Icon2");

function togglePass() {
  if (New_password.getAttribute("type") === "password") {
    New_password.setAttribute("type", "text");
  } else {
    New_password.setAttribute("type", "password");
  }
}

function togglePass2() {
  if (Confirm_new_pass.getAttribute("type") === "password") {
    Confirm_new_pass.setAttribute("type", "text");
    eye_icon_pass_confirm.style.color = "crimson";
  } else {
    Confirm_new_pass.setAttribute("type", "password");
    eye_icon_pass_confirm.style.color = "black";
  }
}

const current_pass = document.querySelector(".current_pass");
const change_pass = document.querySelector(".change_pass");
const pass_edit_btn = document.getElementById("edit_button_pass");
const pass_cancel_btn = document.getElementById("cancel_Btn_2");

pass_edit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  change_pass.style.display = "block";

  current_pass.style.display = "none";
});

pass_cancel_btn.addEventListener("click", (e) => {
  e.preventDefault();
  change_pass.style.display = "none";
  current_pass.style.display = "block";
});

const Sub_btn = document.getElementById("sub_btn");
const PH_button = document.getElementById("PH_btn");
const MD_btn = document.getElementById("MD_btn");

const Subscription_section = document.querySelector(".subs_section");
const Purchase_section = document.querySelector(".purchase_section");
const My_details_section = document.querySelector(".My_details_section_full");

PH_button.addEventListener("click", (e) => {
  e.preventDefault();
  Purchase_section.style.display = "flex";
  Subscription_section.style.display = "none";
  My_details_section.style.display = "none";
  Sub_btn.style.color = "#777777b3";
  PH_button.style.color = "black";
  MD_btn.style.color = "#777777b3";
  // PH_button.style.fontSize = "24px";
  // Sub_btn.style.fontSize = "21px";
  // MD_btn.style.fontSize = "21px";
});
MD_btn.addEventListener("click", (e) => {
  e.preventDefault();
  Purchase_section.style.display = "none";
  Subscription_section.style.display = "none";
  My_details_section.style.display = "block";
  Sub_btn.style.color = "#777777b3";
  PH_button.style.color = "#777777b3";
  MD_btn.style.color = "black";
  // MD_btn.style.fontSize = "24px";
  // PH_button.style.fontSize = "21px";
  // Sub_btn.style.fontSize = "21px";
});
Sub_btn.addEventListener("click", (e) => {
  e.preventDefault();
  Purchase_section.style.display = "none";
  Subscription_section.style.display = "block";
  My_details_section.style.display = "none";
  Sub_btn.style.color = "black";
  PH_button.style.color = "#777777b3";
  MD_btn.style.color = "#777777b3";
  // Sub_btn.style.fontSize = "24px";
  // PH_button.style.fontSize = "21px";
  // MD_btn.style.fontSize = "21px";
});
