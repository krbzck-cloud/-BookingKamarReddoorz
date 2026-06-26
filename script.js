const nomorAgen = "6287830226641";

document.getElementById("checkoutButton").addEventListener("click", function () {

const firstName = document.getElementById("firstname").value;
const lastName = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const hotel = document.getElementById("hotel").value;
const city = document.getElementById("city").value;
const checkin = document.getElementById("checkin").value;
const checkout = document.getElementById("checkout").value;
const room = document.getElementById("room").value;
const guest = document.getElementById("guest").value;
const note = document.getElementById("note").value;

if(firstName=="" || email=="" || phone=="" || hotel==""){
alert("Mohon lengkapi data terlebih dahulu.");
return;
}

const pesan =
`Halo Admin,

Saya ingin melakukan booking hotel.

Nama : ${firstName} ${lastName}
Email : ${email}
WhatsApp : ${phone}

Kota : ${city}
Hotel : ${hotel}

Check In : ${checkin}
Check Out : ${checkout}

Jumlah Kamar : ${room}
Jumlah Tamu : ${guest}

Catatan :
${note}`;

window.open(
"https://wa.me/"+nomorAgen+"?text="+encodeURIComponent(pesan),
"_blank"
);

});
