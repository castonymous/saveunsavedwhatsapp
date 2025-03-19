// Set untuk menyimpan nomor telepon yang sudah ditemukan
let numbers = new Set();

// Fungsi untuk mencari nomor telepon di halaman
function findNumbers() {
    let contactElements = document.querySelectorAll('span[title]');
    contactElements.forEach(contact => {
        let number = contact.getAttribute('title');
        // Mengecek apakah format sesuai dengan pola nomor telepon
        if (number && /^\+62 \d{3}-\d{4}-\d{4}$/.test(number)) {
            numbers.add(number);
        }
    });
}

// Fungsi untuk mengunduh nomor telepon ke file teks
function downloadNumbers() {
    if (numbers.size > 0) {
        let blob = new Blob([Array.from(numbers).join('\n')], { type: 'text/plain' });
        let link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'nomor_telepon_dinamis.txt';
        link.click();
        console.log("File nomor_telepon_dinamis.txt berhasil diunduh.");
    } else {
        console.log("Belum ada nomor yang ditemukan.");
    }
}

// Menjalankan fungsi secara berkala untuk memantau perubahan
let interval = setInterval(() => {
    findNumbers();
    console.log("Memindai nomor telepon baru...");
}, 50); // Memindai setiap 0.05 detik

// Menambahkan cara untuk menghentikan pemindaian dan mengunduh data
console.log("Script berjalan. Scroll halaman untuk menemukan lebih banyak nomor.");
console.log("Ketik 'clearInterval(interval); downloadNumbers();' di konsol untuk menghentikan script dan mengunduh data.");
