// buat flowchartnya dulu, biar ga bingung

// melooping menggunakan array
/*
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca
*/

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling() {
  var jumlahInput = input.length;
  for (x = 0; x < jumlahInput; x++){
    console.log('Nomor ID '+input[x][0]);
    console.log('Nama Lengkap: '+input[x][1]);
    console.log('TTL: '+input[x][2]+' '+input[x][3]);
    console.log('Hobi: '+input[x][4]);
  }
}
    

dataHandling();