function Promedio() {

    let nombre = document.getElementsByName("nombre")[0].value;
    let modulo = document.getElementsByName("modulo")[0].value;

    let nota1 = parseFloat(document.getElementById("1").value);
    let nota2 = parseFloat(document.getElementById("2").value);
    let nota3 = parseFloat(document.getElementById("3").value);
    let nota4 = parseFloat(document.getElementById("4").value);
    let nota5 = parseFloat(document.getElementById("5").value);
    let nota6 = parseFloat(document.getElementById("6").value);

    if (nombre.trim() === "") {
        alert("Por favor, completa todos los campos y asegúrate de ingresar valores numéricos válidos para las notas.");
        return false;
    }
    if (modulo.trim() === "") {
        alert("Por favor, completa todos los campos y asegúrate de ingresar valores numéricos válidos para las notas.");
        return false;
    }

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5) || isNaN(nota6)) {
        alert("Por favor, completa todos los campos y asegúrate de ingresar valores numéricos válidos para las notas.");
        return false;
    }
    if (nota1 > 7 || nota2 > 7 || nota3 > 7 || nota4 > 7 || nota5 > 7 || nota6 > 7) {
        alert("Las notas no pueden ser mayores que 7. Por favor, ingresa notas válidas.");
    }
    else {
        let promedio = ((nota1 * 0.12 + nota2 * 0.21) + (nota3 * 0.12 + nota4 * 0.21) + (nota5 * 0.13 + nota6 * 0.21)) / (0.33 + 0.33 + 0.34);
        let resultadoURL = `./resultado.html?nombre=${nombre}&modulo=${modulo}&promedio=${promedio}`;

        window.location.href = resultadoURL;
    }

    return true;
}

function validarFormulario() {

    let nombre = document.getElementsByName("nombre")[0].value;
    let modulo = document.getElementsByName("modulo")[0].value;
    let nota1 = parseFloat(document.getElementById("1").value);
    let nota2 = parseFloat(document.getElementById("2").value);
    let nota3 = parseFloat(document.getElementById("3").value);
    let nota4 = parseFloat(document.getElementById("4").value);
    let nota5 = parseFloat(document.getElementById("5").value);
    let nota6 = parseFloat(document.getElementById("6").value);

    if (nombre.trim() === "" || modulo.trim() === "" || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5) || isNaN(nota6)) {
        return false;
    }
    else if (nota1 > 7 || nota2 > 7 || nota3 > 7 || nota4 > 7 || nota5 > 7 || nota6 > 7) {
        alert("Las notas no pueden ser mayores que 7. Por favor, ingresa notas válidas.");
        return false;
    }

    return true;
}