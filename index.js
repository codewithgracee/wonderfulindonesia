// Ambil elemen buat form dan result
const form = document.getElementById("myForm");
const result = document.getElementById("result");
const oke = document.getElementById("oke");

// Event listener dipakai buat submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    result.className = "mt-4 alert alert-success";
    result.textContent = `Terima kasih, ${name}! Kamu berhasil berlangganan newsletter.`;
    oke.textContent = `${name}\n${email}`;
  } else {
    result.className = "mt-4 alert alert-danger";
    result.textContent = "Harap isi semua field!";
  }

  result.classList.remove("d-none");
});
