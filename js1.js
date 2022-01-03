/*
let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', showMsg);

function showMsg() {
    alert("Namaste World!");
}
*/
let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('Enter Name of Student');
    namasteBtn.textContent = 'Roll No. 1: Arup' + name;
}