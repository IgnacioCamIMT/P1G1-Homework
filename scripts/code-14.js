function elimPrimerUltimoCharSub() {
    var cadena = prompt("Ingrese una cadena", "Hola Mundo");
    var longCad = cadena.length;
    var cadenaSinChars = cadena.substring(1, (longCad-1));

    alert(cadenaSinChars);
}