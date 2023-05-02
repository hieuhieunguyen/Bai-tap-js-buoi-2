function ketQua() {
    var soThuNhat = document.getElementById('one').value * 1;
    var soThuHai = document.getElementById('two').value * 1;
    var soThuBa = document.getElementById('three').value * 1;
    var soThuTu = document.getElementById('four').value * 1;
    var soThuNam = document.getElementById('five').value * 1;
    var result = (soThuNhat + soThuHai + soThuBa + soThuTu +soThuNam) / 5;
    document.getElementById('ket-qua').innerHTML = `${result}`;
}   