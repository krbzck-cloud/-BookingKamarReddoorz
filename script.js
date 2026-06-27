document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // AMBIL DATA DARI INPUT
    const name = document.getElementById('name').value;
    const cust_phone = document.getElementById('cust_phone').value; // Data baru
    const cust_email = document.getElementById('cust_email').value; // Data baru
    const hotel = document.getElementById('hotel').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const note = document.getElementById('note').value || "-";

    // GANTI NOMOR WA TUJUAN (NOMOR ANDA) DI SINI
    const no_wa = "628123456789"; 

    // FORMAT PESAN (DITAMBAHKAN EMAIL & NO HP)
    const pesan = `Halo Admin, saya mau booking RedDoorz:%0A%0A` +
                  `*Data Pelanggan:*%0A` +
                  `Nama: ${name}%0A` +
                  `No HP: ${cust_phone}%0A` +
                  `Email: ${cust_email}%0A%0A` +
                  `*Rincian Booking:*%0A` +
                  `Hotel: ${hotel}%0A` +
                  `Check-in: ${checkin}%0A` +
                  `Check-out: ${checkout}%0A` +
                  `Catatan: ${note}`;

    // REDIRECT KE WHATSAPP
    window.open(`https://api.whatsapp.com/send?phone=${no_wa}&text=${pesan}`, '_blank');
});
