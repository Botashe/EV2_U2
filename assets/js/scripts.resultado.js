const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get('nombre');
const modulo = urlParams.get('modulo');
const nota_1 = parseFloat(urlParams.get('nota_1'));
const nota_2 = parseFloat(urlParams.get('nota_2'));
const nota_3 = parseFloat(urlParams.get('nota_3'));
const nota_4 = parseFloat(urlParams.get('nota_4'));
const nota_5 = parseFloat(urlParams.get('nota_5'));
const nota_6 = parseFloat(urlParams.get('nota_6'));
const promedio = parseFloat(urlParams.get('promedio'));

if (!isNaN(nota_1) && !isNaN(nota_2) && !isNaN(nota_3) && !isNaN(nota_4) && !isNaN(nota_5) && !isNaN(nota_6)) {
    const promedio = ((nota_1 * 0.12 + nota_2 * 0.21) + (nota_3 * 0.12 + nota_4 * 0.21) + (nota_5 * 0.13 + nota_6 * 0.21)) / (0.33 + 0.33 + 0.34);
    document.getElementById('nombre').textContent = nombre;
    document.getElementById('modulo').textContent = modulo;
    document.getElementById('nota_1').textContent = nota_1;
    document.getElementById('nota_2').textContent = nota_2;
    document.getElementById('nota_3').textContent = nota_3;
    document.getElementById('nota_4').textContent = nota_4;
    document.getElementById('nota_5').textContent = nota_5;
    document.getElementById('nota_6').textContent = nota_6;
    document.getElementById('promedio').textContent = promedio.toFixed(2);

    if (promedio >= 4) {
        document.getElementById('mensaje').textContent = '¡Aprobado!';
    } else {
        document.getElementById('mensaje').textContent = '¡Reprobado!';
    }
} else {
    document.getElementById('promedio').textContent = 'No se pudo calcular el promedio debido a datos faltantes o inválidos.';
}