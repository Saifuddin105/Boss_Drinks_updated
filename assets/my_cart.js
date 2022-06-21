var initial_value = 0;

const OTP_plus = document.getElementById("otp_plus");
const OTP_minus = document.getElementById("otp_minus");
const otp_value = document.getElementById("otp_value");

function otp_decreament() {
  otp_value.innerHTML = initial_value;
  initial_value = initial_value - 1;
}

function otp_increament() {
  otp_value.innerHTML = initial_value;
  initial_value = initial_value + 1;
}
