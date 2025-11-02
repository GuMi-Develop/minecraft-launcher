function login() {
  const loginInput = document.getElementById("login");
  const btn = document.getElementById("btn");
  const loginBtn = document.getElementById("login-btn");

  if (loginInput.value.length > 0) {
    btn.style.animation = "fadeOut 200ms forwards";
    setTimeout(() => {
      btn.style.display = "none";
      loginBtn.style.display = "inline-block";
      loginBtn.style.animation = "fadeIn 200ms forwards";
    }, 200);
  } else {
    loginBtn.style.animation = "fadeOut 200ms forwards";
    setTimeout(() => {
      loginBtn.style.display = "none";
      btn.style.display = "inline-block";
      btn.style.animation = "fadeIn 200ms forwards";
    }, 200);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-btn");
  const profileBtn = document.getElementById("profile");
  const optionsBtn = document.getElementById("options-btn");

  const start_img = document.getElementById("start-img");
  const start = document.querySelector(".start-game");

  const auth = document.querySelector(".authorisation");
  const profile = document.querySelectorAll(".profile-img");

  const options_img = document.querySelectorAll(".options-img");
  const options = document.querySelector(".options-game");

  startBtn.addEventListener("click", function () {
    auth.style.display = "none";
    options.style.display = "none";
    start.style.display = "inline-block";
    start_img.style.fill = "#784b92";
    profile.forEach(function (entry) {
      entry.style.fill = "#535353";
    });
    options_img.forEach(function (entry) {
      entry.style.stroke = "#535353";
    });
  });

  profileBtn.addEventListener("click", function () {
    auth.style.display = "inline-block";
    start.style.display = "none";
    options.style.display = "none";
    start_img.style.fill = "#535353";
    profile.forEach(function (entry) {
      entry.style.fill = "#784b92";
    });
    options_img.forEach(function (entry) {
      entry.style.stroke = "#535353";
    });
  });

  optionsBtn.addEventListener("click", function () {
    auth.style.display = "none";
    start.style.display = "none";
    options.style.display = "inline-block";
    start_img.style.fill = "#535353";
    profile.forEach(function (entry) {
      entry.style.fill = "#535353";
    });
    options_img.forEach(function (entry) {
      entry.style.stroke = "#784b92";
    });
  });
});
