function tinhTien() {
    var soDo = document.getElementById('so-usd').value * 1;
    var result = soDo * 23500;
    document.getElementById('ket-qua').innerHTML = `${result} Vnd`
}