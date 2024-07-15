let tabcontents = document.getElementsByClassName("tab-contents");
let tablinks = document.getElementsByClassName("tab-links");
let sideMenu = document.getElementById("sidemenu");
let msg = document.getElementById("msg");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzfAZlesU6ooitNGS78YE1gk3TFEm4pl2FTx1g_l8impxDLYsxLNq3huZkxdjBriKxK/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
