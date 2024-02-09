const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const horario = setInterval(function time() {
    let date = new Date();
    let hor = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    if (hor < 10) hor = '0' + hor;
    
    if (min < 10) min = '0' + min;

    if (seg < 10) seg = '0' + seg;

    horas.textContent = hor;
    minutos.textContent = min;
    segundos.textContent = seg;
})