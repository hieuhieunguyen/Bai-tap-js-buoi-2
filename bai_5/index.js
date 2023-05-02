function ketQua() {
    var soNhap = document.getElementById('so-nhap').value * 1;
    var hangChuc = Math.floor(soNhap / 10);
    var hangDonVi = soNhap % 10;
    var result = hangChuc + hangDonVi;
    document.getElementById('ket-qua').innerHTML = `${result}`;
}