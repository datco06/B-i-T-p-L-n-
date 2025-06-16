
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

        function showError(id, message) {
             const errorElement = document.getElementById(`error-${id}`);
             errorElement.textContent = message;
             errorElement.style.display = "block";
        }

        function clearError(id) {
            const errorElement = document.getElementById(`error-${id}`);
            if (errorElement) {
                errorElement.textContent = "";
                errorElement.style.display = "none";
            }
        }

        


        let hasError = false;
        ["name", "email", "destination", "phone", "duration", "participants"].forEach(clearError);

        ["name", "email", "destination", "phone", "duration", "participants"].forEach(function(id) {        
            const value = document.getElementById(id).value.trim();
            if (!value) {
                showError(id, "Vui lòng điền đầy đủ thông tin");
                hasError = true;
            }
        });
        
        if (hasError) return;



        // let hasError = false;
        // if (!name || !email || !destination || !phone || !duration || !participants) {
        //     showError("Vui lòng điền đầy đủ thông tin");
        //     hasError = true;
        // }

        
        

        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phone)) {
            showError("phone", "Số điện thoại không hợp lệ");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError("email", "Email không hợp lệ");
            return;
        }

        


        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";

        setTimeout(() => {
        successMessage.style.display = "none";
        }, 5000);


        form.reset();   
    });
});







  

 