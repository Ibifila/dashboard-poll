// FEEDS SCRIPT

let sidebarText = document.querySelectorAll(".sidebar-text");
let opensidebarButton = document.getElementById("sidebar-button1");
let closesidebarButton = document.getElementById("sidebar-button2");
let reduce = document.querySelector(".reduce-width");
let feedsWraper = document.querySelector(".feeds-wrapper");

opensidebarButton.addEventListener("click", function () {
  reduce.style.width = "230px";
  feedsWraper.style.width = `calc(100% - 230px)`;
  feedsWraper.style.marginLeft = "230px";
  sidebarText.forEach(function (item) {
    closesidebarButton.classList.remove("sidebar-hidden");
    opensidebarButton.classList.remove("sidebar-show");
    opensidebarButton.classList.add("sidebar-hidden");
    item.classList.remove("sidebar-hidden");
    item.classList.add("sidebar-show");
  });
});

closesidebarButton.addEventListener("click", function () {
  reduce.style.width = "130px";
  feedsWraper.style.width = "calc(100% - 130px)";
  feedsWraper.style.marginLeft = "130px";

  sidebarText.forEach(function (item) {
    opensidebarButton.classList.remove("sidebar-hidden");
    closesidebarButton.classList.add("sidebar-hidden");
    item.classList.remove("sidebar-show");
    item.classList.add("sidebar-hidden");
  });
});

// FEEDS SCRIPT ENDS

closesidebarButton.addEventListener("click", function () {
  reduce.style.width = "130px";
  feedsWraper.style.width = "calc(100% - 130px)";
  feedsWraper.style.marginLeft = "130px";

  sidebarText.forEach(function (item) {
    opensidebarButton.classList.remove("sidebar-hidden");
    closesidebarButton.classList.add("sidebar-hidden");
    item.classList.remove("sidebar-show");
    item.classList.add("sidebar-hidden");
  });
});
// FEEDS SCRIPT ENDS

// Modal
// Getting Our Buttns and sections
const newPollBtn = document.querySelectorAll(".poll");
const newPollSection = document.querySelector("#new-poll-section");
const selectBox = document.querySelector("#select-box");
const answerBox = document.querySelector("#answer-box");
const uploadBox = document.querySelector("#upload-box");
const input = document.querySelector("#input");
const buttons = document.querySelectorAll("[data-btn]");
console.log(newPollBtn);
// setting default Behaviour for eventListeners
window.addEventListener("DOMContentLoaded", function () {
  uploadBox.classList.add("modal-display");
  answerBox.classList.add("modal-display");
  selectBox.classList.remove("modal-display");
  newPollSection.classList.add("modal-display");
  input.classList.add("bg-light");
});
newPollBtn.forEach(function (btn) {
  btn.addEventListener("click", newPol);
});
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let btn = e.currentTarget.dataset.btn;
    switch (btn) {
      case "closemodal":
        close();
        break;
      case "category":
        category();
        break;
      case "revert":
        category();
        break;
      case "text":
        text();
        break;
      case "image":
        image();
        break;

      default:
        break;
    }
  });
});
// functions
function close() {
  newPollSection.classList.toggle("modal-display");
}
function category() {
  uploadBox.classList.add("modal-display");
  answerBox.classList.add("modal-display");
  selectBox.classList.remove("modal-display");
  input.classList.add("bg-light");
}
function text() {
  answerBox.classList.remove("modal-display");
  uploadBox.classList.add("modal-display");
  selectBox.classList.add("modal-display");
  input.classList.remove("bg-light");
}
function image() {
  uploadBox.classList.remove("modal-display");
  answerBox.classList.add("modal-display");
  selectBox.classList.add("modal-display");
  input.classList.add("bg-light");
}
function newPol(e) {
  e.preventDefault();
  newPollSection.classList.toggle("modal-display");
  category();
}
