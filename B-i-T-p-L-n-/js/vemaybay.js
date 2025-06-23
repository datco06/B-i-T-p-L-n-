let passengers = {
  adult: 1,
  child: 0,
  infant: 0,
};

function toggleDropdown() {
  const menu = document.getElementById("passenger-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function adjustCount(type, change) {
  passengers[type] = Math.max(0, passengers[type] + change);
  if (type === "adult" && passengers[type] === 0) passengers[type] = 1;

  document.getElementById(`${type}-count`).textContent = passengers[type];
  updateSummary();
}

function updateSummary() {
  const { adult, child, infant } = passengers;
  let parts = [];
  if (adult > 0) parts.push(`${adult} người lớn`);
  if (child > 0) parts.push(`${child} trẻ em`);
  if (infant > 0) parts.push(`${infant} em bé`);
  document.getElementById("passenger-summary").textContent = parts.join(", ");
}

window.onclick = function (e) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(e.target)) {
    document.getElementById("passenger-menu").style.display = "none";
  }
};

const departInput = document.getElementById("depart-date");
const returnInput = document.getElementById("return-date");

departInput.addEventListener("change", () => {
  returnInput.min = departInput.value;
  if (returnInput.value < departInput.value) {
    returnInput.value = departInput.value;
  }
});

document.querySelectorAll('input[name="trip"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    const isRoundtrip = document.getElementById("roundtrip").checked;
    document.getElementById("return-group").style.display = isRoundtrip ? "block" : "none";
    if (!isRoundtrip) {
      document.getElementById("return-date").value = "";
    }
  });
});

if (document.getElementById("oneway").checked) {
  document.getElementById("return-group").style.display = "none";
}

document.querySelector(".search-button").addEventListener("click", (event) => {
  event.preventDefault();

  const from = document.querySelector('input[placeholder="Nhập điểm khởi hành"]').value;
  const to = document.querySelector('input[placeholder="Nhập điểm đến"]').value;
  const depart = document.getElementById("depart-date").value;
  const isRoundtrip = document.getElementById("roundtrip").checked;
  const returnDate = document.getElementById("return-date").value;
  const airline = document.getElementById("airline").value || "Không chọn";
  const summary = document.getElementById("passenger-summary").textContent;

  let resultText = `
    <strong>Điểm đi:</strong> ${from}<br>
    <strong>Điểm đến:</strong> ${to}<br>
    <strong>Ngày đi:</strong> ${depart}<br>
  `;

  if (isRoundtrip && returnDate) {
    resultText += `<strong>Ngày về:</strong> ${returnDate}<br>`;
  }

  resultText += `
    <strong>Hãng bay:</strong> ${airline}<br>
    <strong>Hành khách:</strong> ${summary}
  `;

  const resultBox = document.getElementById("flight-result");
  document.getElementById("result-content").innerHTML = resultText;
  resultBox.style.display = "block";
});
 document.addEventListener("DOMContentLoaded", function () {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      document.querySelector(".taikhoan").style.display = "none";
    }
  });