//  manipulasi string
let namaDepan = "Rafi";
    namaBelakang = "Anggara";
console.log(`halo nama saya ${namaDepan} ${namaBelakang}`);

// manipulasi menggunakan replaceAll
let data = `nama saya Rafial dan saya sedang belajar Javascript`;
    data1 = data.replaceAll(`saya`,`aku`);
    console.log(data1);

1. // variable var, let, const
// variable di deklarasi ulang secara langsung dengan var (data string)
var namaLaptop = "Asus";
var namaLaptop = "Lenovo";
console.log(namaLaptop);
// merubah variable menggunakan let (data number)
let umurManusia = 70;
    umurManusia = 60;
    umur = "Tahun";
    console.log(umurManusia,umur);
// variable const
const tempatTinggalManusia = "Bumi";
intiTataSurya = "matahari";
console.log(tempatTinggalManusia);
console.log(intiTataSurya);

3.// tipe data string, number, boolean
// data string dengan manipulasi substring
let nama = "Rafial, Firman, Kiki";
    kelas = "FSW, UIUX, PM, DM";
    wave = "Satu, Dua, Tiga"
    hasil = nama.substring(8,14)
    hasil1 = kelas.substring(11,13)
    hasil2 = wave.substring(6,9)
    console.log(`nama saya ${hasil} saya sedang belajar ${hasil1} pada gelombang ke ${hasil2}`);
// data string dengan manipulasi toLocaleLowerCase dan toLocaleUpperCase
let tas = "Tas Sekolah, Tas Kerja, Tas Main";
let sepatu = "Sepatu Sekolah, Sepatu Kerja, Sepatu Main";
    hasil = tas.toLocaleLowerCase()
    hasil1 = sepatu.toLocaleUpperCase()
    console.log(hasil);
    console.log(hasil1);




