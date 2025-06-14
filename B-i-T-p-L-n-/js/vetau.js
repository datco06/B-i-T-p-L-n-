document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".train-search-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const departureStation = document.getElementById("departure-station").value.trim();
    const arrivalStation = document.getElementById("arrival-station").value.trim();
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
    const passengers = document.getElementById("passengers").value;
    const ticketType = document.getElementById("ticket-type").value;

    if (!departureStation || !arrivalStation || !departureDate || passengers <= 0) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc.");
      return;
    }

    const result = `
      ✅ Ga đi: ${departureStation}
      ✅ Ga đến: ${arrivalStation}
      🗓 Ngày đi: ${departureDate}
      ${returnDate ? "🗓 Ngày về: " + returnDate : ""}
      👥 Số hành khách: ${passengers}
      🎫 Loại vé: ${formatTicketType(ticketType)}
    `;

    alert("Tìm kiếm thành công:\n\n" + result);
  });
  
  function formatTicketType(type) {
    switch (type) {
      case "ngoi-mem-dieu-hoa":
        return "Ngồi mềm điều hòa";
      case "nam-khoang-4-dieu-hoa":
        return "Nằm khoang 4 điều hòa";
      case "nam-khoang-6-dieu-hoa":
        return "Nằm khoang 6 điều hòa";
      case "ghe-phu":
        return "Ghế phụ";
      default:
        return "Không xác định";
    }
  }
});
