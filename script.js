document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const hotel = document.getElementById('hotel').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const note = document.getElementById('note').value || "-";

    // GANTI NOMOR WA KAMU DI SINI (Gunakan 62...)
    const no_wa = "6287830226641"; 

    const pesan = `Halo Admin, saya mau booking RedDoorz:%0A%0A` +
                  `Nama: ${name}%0A` +
                  `Hotel: ${hotel}%0A` +
                  `Check-in: ${checkin}%0A` +
                  `Check-out: ${checkout}%0A` +
                  `Catatan: ${note}`;

    window.open(`https://api.whatsapp.com/send?phone=${no_wa}&text=${pesan}`, '_blank');
});
