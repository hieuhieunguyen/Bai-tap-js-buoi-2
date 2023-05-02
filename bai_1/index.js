function tinhTien () {
    var soNgay = document.getElementById('so-ngay').value * 1;
    var result = soNgay * 100000;
    document.getElementById('ket-qua').innerHTML = `<h2>${result} Vnd</h2>`;
}