function Promedio() {
    let nombre = document.getElementsByName("nombre")[0].value;
    let modulo = document.getElementsByName("modulo")[0].value;

    let nota_1 = parseFloat(document.getElementById("1").value);
    let nota_2 = parseFloat(document.getElementById("2").value);
    let nota_3 = parseFloat(document.getElementById("3").value);
    let nota_4 = parseFloat(document.getElementById("4").value);
    let nota_5 = parseFloat(document.getElementById("5").value);
    let nota_6 = parseFloat(document.getElementById("6").value);

    let promedio = ((nota_1 + nota_2 + nota_3 + nota_4 + nota_5 + nota_6) / 6).toFixed(2);

    document.getElementById("promedio").textContent = `Promedio: ${promedio}`;
    document.getElementById("promedio_input").value = promedio;

    if (nombre.trim() === "") {
        alert("Mensaje no enviado. Rellena todos los espacios (Nombre)");
        return false;
    }
    if (modulo.trim() === "") {
        alert("Mensaje no enviado. Rellena todos los espacios (Modulo)");
        return false;
    }
}
