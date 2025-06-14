let selectedRoute = '';
  let ticketPrice = 0;

  function openBookingForm(route, price) {
    selectedRoute = route; // Lưu tuyến đường đã chọn
    ticketPrice = price; // Lưu giá vé

    // Hiển thị form đặt vé
    document.getElementById('booking-form-container').style.display = 'block';
    document.getElementById('booking-departure-station').value = route.split(' - ')[0]; // Ga đi
    document.getElementById('booking-arrival-station').value = route.split(' - ')[1]; // Ga đến
  }

    window.submitBooking = function() {
  
    // Lấy thông tin từ form
    const departureDate = document.getElementById('booking-departure-date').value;
    const passengers = document.getElementById('booking-passengers').value;

    if (!departureDate || passengers <= 0) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc.");
    return;
    }


    // Tính tổng số tiền
    const totalAmount = ticketPrice * passengers;

    // Cập nhật thông tin vào phần tóm tắt
    document.getElementById('summary-route').innerText = selectedRoute;
    document.getElementById('summary-date').innerText = departureDate;
    document.getElementById('summary-passengers').innerText = passengers;
    document.getElementById('summary-total').innerText = totalAmount;

    // Hiển thị phần tóm tắt
    document.getElementById('booking-summary').style.display = 'block';
  }