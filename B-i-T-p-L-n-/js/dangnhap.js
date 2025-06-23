document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("input[type='email']");
  const passwordInput = form.querySelector("input[type='password']");
  const forgotLink = document.getElementById("forgot-link");
  const forgotMessage = document.getElementById("forgot-message");
  const loginMessage = document.getElementById("login-message");

  //  XỬ LÝ ĐĂNG NHẬP 
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    loginMessage.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (email === "" || password === "") {
      loginMessage.textContent = "Vui lòng nhập đầy đủ email và mật khẩu.";
      loginMessage.style.color = "red";
      return;
    }

    const storedUser = localStorage.getItem("user_" + email);
    if (!storedUser) {
      loginMessage.textContent = "Email chưa được đăng ký.";
      loginMessage.style.color = "red";
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.matkhau !== password) {
      loginMessage.textContent = "Mật khẩu không đúng.";
      loginMessage.style.color = "red";
      return;
    }

    loginMessage.textContent = "Đăng nhập thành công! Chào " + user.ten;
    loginMessage.style.color = "green";

    localStorage.setItem("currentUser", email);

    setTimeout(() => {
      window.location.href = "home.html";
    }, 500);
  });

  // Quên mật khẩu
  if (forgotLink) {
    forgotLink.addEventListener("click", function (e) {
      e.preventDefault();
      forgotMessage.textContent = "";

      const email = prompt("Vui lòng nhập email bạn đã đăng ký:")?.trim();
      const phone = prompt("Vui lòng nhập số điện thoại bạn đã đăng ký:")?.trim();

      if (!email || !phone) return;

      const storedUser = localStorage.getItem("user_" + email);
      if (!storedUser) {
        forgotMessage.textContent = "Email chưa được đăng ký.";
        forgotMessage.style.color = "red";
        return;
      }

      const user = JSON.parse(storedUser);

      if (user.sdt !== phone) {
        forgotMessage.textContent = "Số điện thoại không đúng.";
        forgotMessage.style.color = "red";
      } else {
        forgotMessage.textContent = `Mật khẩu của bạn là: ${user.matkhau}`;
        forgotMessage.style.color = "green";
      }
    });
  }
});
