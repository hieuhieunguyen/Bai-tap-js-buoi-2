function chuVi () {
    var chieuDai = document.getElementById('chieu-dai').value * 1;
    var chieuRong = document.getElementById('chieu-rong').value * 1;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('ket-qua1').innerHTML = `${chuVi}`;
};

function dienTich () {
    var chieuDai = document.getElementById('chieu-dai').value * 1;
    var chieuRong = document.getElementById('chieu-rong').value * 1;
    var dienTich = chieuDai * chieuRong;
    document.getElementById('ket-qua2').innerHTML = `${dienTich}`;
};