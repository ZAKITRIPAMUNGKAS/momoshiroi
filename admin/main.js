document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Disini kamu bisa menambahkan logika validasi username dan password, dan membandingkannya dengan data yang ada di database atau penyimpanan lainnya
    if (username === "admin" && password === "admin123") {
      // Redirect ke dashboard admin
      window.location.href = "dashboard.html";
    } else {
      // Tampilkan pesan error jika login gagal
      document.getElementById("error-message").innerText =
        "Invalid username or password";
    }
  });
