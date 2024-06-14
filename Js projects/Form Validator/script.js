const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const button = document.getElementById("button");
const wrongUsername = document.getElementById("wrongUsername");
button.addEventListener("click", (event) => {
  checkUsername();
  checkEmail();
  checkPassword();
  event.preventDefault();
});
function checkUsername() {
  const usernameValue = username.value;
  usernameValue.length > 13 && (wrongUsername.style.display = "block");
}
function checkEmail() {
  const emailValue = email.value;
  let hasSign = false;
  for (let i = 0; i < emailValue.length; i++) {
    if (emailValue.charAt(i) === "@") {
      hasSign = true;
    }
  }
  hasSign ? null : alert("Email is missing @ sign");
}
function checkPassword() {
  if (password !== confirmPassword) {
    alert("wrong password");
  }
}
