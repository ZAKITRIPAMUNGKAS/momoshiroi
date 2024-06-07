document
  .getElementById("news-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var newsTitle = document.getElementById("news-title").value;
    var newsContent = document.getElementById("news-content").value;
    // Disini kamu bisa menambahkan logika untuk memperbarui berita di database atau penyimpanan lainnya
    console.log("Berita diperbarui:");
    console.log("Judul:", newsTitle);
    console.log("Konten:", newsContent);
    alert("Berita berhasil diperbarui!");
    // Mengosongkan form setelah submit
    document.getElementById("news-form").reset();
  });

document
  .getElementById("admin-credentials-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var adminId = document.getElementById("admin-id").value;
    var adminPassword = document.getElementById("admin-password").value;
    // Disini kamu bisa menambahkan logika untuk memperbarui ID dan kata sandi admin di database atau penyimpanan lainnya
    console.log("ID Admin diperbarui:", adminId);
    console.log("Kata Sandi Baru:", adminPassword);
    alert("ID dan Kata Sandi Admin berhasil diperbarui!");
    // Mengosongkan form setelah submit
    document.getElementById("admin-credentials-form").reset();
  });
