
let angka = 10;  
let teks = "saya belajar javascript";  
let hasil;

try {
  hasil = angka + ' ' +teks;
  console.log("Hasil penjumlahan antara angka dan teks: ", hasil);
} catch (error) {
  console.log("Terjadi kesalahan: ", error);
}

if (typeof hasil !== 'number') {
  let angkaTambahan = 20; 
  hasil = angka + angkaTambahan;
  console.log("Hasil penjumlahan menggunakan variabel ketiga: ", hasil);
}
