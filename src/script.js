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
