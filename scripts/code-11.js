function promedioNotasMayorA51() {
    var N = parseInt(prompt("Ingrese N:", 10));
    var suma = 0;
    var notasValidas = 0;
    var i = 1;
    var nota;
    
    while (i <= N) {
        nota = parseInt(prompt("Ingrese la nota " + i + ":"));
        if (nota > 51) {
            suma += nota;
            notasValidas++
        }
        i++;
    }
    
    alert ("El promedio de " + 
            notasValidas + " notas válidas es: " +
            suma/notasValidas);
}