
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const destination = document.getElementById("destination").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const duration = document.getElementById("duration").value.trim();
        const participants = document.getElementById("participants").value.trim();

        
        if (!name || !email || !destination || !phone || !duration || !participants) {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }

        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phone)) {
            alert("Số điện thoại không hợp lệ");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Email không hợp lệ.");
            return;
        }

        alert("Cảm ơn bạn đã gửi yêu cầu! Travel Tour sẽ liên hệ sớm nhất.");
        form.reset();   
    });
});
