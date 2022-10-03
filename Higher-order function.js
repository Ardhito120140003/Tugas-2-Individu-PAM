//contoh Higher-order function

//contoh 1 Menggunakan Array.filter() dan Array.map()
let orang = [
    { nama: 'Sutan', umur: 16 },
    { nama: 'Joni', umur: 18 },
    { nama: 'Mark', umur: 27 },
    { nama: 'Back', umur: 14 },
    { nama: 'Toni', umur: 24},
]
orang = orang.filter(orang => orang.umur >= 18)
alert(orang.map(orang => orang.nama)) // ['Joni','Mark','Toni']
  
//contoh 2 Menggunakan Array.reduce()
const keranjang = [
    {
      produk: 'Indomie Mie Goreng',
      harga: 2500
    },
    {
      produk: 'Aqua Gelas',
      harga: 500
    },
    {
      produk: 'Sepatu Sport',
      harga: 75000
    }
]
const totalHarga = keranjang.reduce((acc, cur) => acc + cur.harga, 0)
alert('Rp.' + totalHarga) // Hasil: Rp.78000
