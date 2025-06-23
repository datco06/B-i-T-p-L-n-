document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const fields = {
      ho: form.querySelector("input[placeholder='Nhập họ của bạn']"),
      ten: form.querySelector("input[placeholder='Nhập tên của bạn']"),
      email: form.querySelector("input[type='email']"),
      sdt: form.querySelector("input[type='tel']"),
      matkhau: form.querySelector("input[type='password']")
    };

    function showError(input, message) {
      input.classList.add("error-border");
      let error = input.nextElementSibling;
      if (!error || !error.classList.contains("error-message")) {
        error = document.createElement("div");
        error.classList.add("error-message");
        input.parentNode.appendChild(error);
      }
      error.textContent = message;
    }

    function clearError(input) {
      input.classList.remove("error-border");
      const error = input.parentNode.querySelector(".error-message");
      if (error) error.remove();
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Xóa tất cả lỗi cũ
      Object.values(fields).forEach(clearError);

      let valid = true;

      // Kiểm tra họ
      if (fields.ho.value.trim() === "") {
        showError(fields.ho, "Vui lòng nhập họ.");
        valid = false;
      }

      // Kiểm tra tên
      if (fields.ten.value.trim() === "") {
        showError(fields.ten, "Vui lòng nhập tên.");
        valid = false;
      }

      // Kiểm tra email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (fields.email.value.trim() === "") {
        showError(fields.email, "Vui lòng nhập email.");
        valid = false;
      } else if (!emailRegex.test(fields.email.value.trim())) {
        showError(fields.email, "Email không hợp lệ.");
        valid = false;
      }

      // Kiểm tra số điện thoại
      const sdtRegex = /^[0-9]{9,11}$/;
      if (fields.sdt.value.trim() === "") {
        showError(fields.sdt, "Vui lòng nhập số điện thoại.");
        valid = false;
      } else if (!sdtRegex.test(fields.sdt.value.trim())) {
        showError(fields.sdt, "Số điện thoại không hợp lệ.");
        valid = false;
      }

      // Kiểm tra mật khẩu
      if (fields.matkhau.value === "") {
        showError(fields.matkhau, "Vui lòng nhập mật khẩu.");
        valid = false;
      } else if (fields.matkhau.value.length < 6) {
        showError(fields.matkhau, "Mật khẩu phải có ít nhất 6 ký tự.");
        valid = false;
      }

      if (!valid) return;

      // Lưu người dùng vào localStorage
      const user = {
        ho: fields.ho.value.trim(),
        ten: fields.ten.value.trim(),
        email: fields.email.value.trim(),
        sdt: fields.sdt.value.trim(),
        matkhau: fields.matkhau.value
      };

      localStorage.setItem("user_" + user.email, JSON.stringify(user));

      // Chuyển hướng đến trang đăng nhập
      window.location.href = "dangnhap.html";
    });
  });