function mostrarNumImpares() {
    var N = parseInt(prompt("Ingrese N:", 10));
    var dig = 0;
    
    while (N != 0) {
        dig = N % 10;
        if (dig % 2 != 0) {
            alert(dig);
        }
        N = parseInt(N / 10);
    }
}

function mostrarNumMayorDeDos() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 10));
    
    if (A == B) {
        alert("Son iguales");
    } else {
        if(A > B) {
            alert(A + " es mayor");
        } else {
            alert(B + " es mayor");
        }
    }
}

function sumatoriaNums1al10() {
    var suma = 0;
    var i = 2;
    
    while (i < 10) {
        suma += i;
        i++;
    }
    
    alert(suma);
}

function sumatoriaNumsPares7al15() {
    var suma = 0;
    var i = 8;
    
    while (i < 15) {
        if (i % 2 == 0) {
            suma += i;
        }
        i++;
    }
    
    alert(suma);
}

function areaVolumenCilindro() {
    var R = parseInt(prompt("Ingrese R:", 10));
    var H = parseInt(prompt("Ingrese H:", 5));
    
    var Area = 2 * Math.PI * R * (R + H);
    var Volumen = Math.PI * R * R * H;
    
    alert("El área es: " + Area);
    alert("El Volumen es: " + Volumen);
}

function mostrarNumMayorDeTres() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 5));
    var C = parseInt(prompt("Ingrese C:", 7));
    
    if (A > B) {
        if(A > C) {
            alert(A + " es mayor");
        } else {
            alert(C + " es mayor");
        }
    } else {
        if(B > C) {
            alert(B + " es mayor");
        } else {
            alert(C + " es mayor");
        }
    }
}

function mostrarPosNegNeutro() {
    var N = parseInt(prompt("Ingrese N:", 10));
    
    if (N == 0) {
        alert("Es neutro");
    } else {
        if(N > 0) {
            alert("Positivo");
        } else {
            alert("Negativo");
        }
    }
}

function sumatoriaDigsNumero() {
    var N = parseInt(prompt("Ingrese N:", 10));
    suma = 0;
    dig = 0;
    
    for (N; N != 0; N = parseInt(N / 10)){
        dig = N % 10;
        suma += dig;
    }
    
    alert(suma);
}

function mostrarNumMenorDeDos() {
    var A = parseInt(prompt("Ingrese A:", 10));
    var B = parseInt(prompt("Ingrese B:", 5));
    
    if (A == B) {
        alert("Son iguales");
    } else {
        if(A > B) {
            alert(B + " es menor");
        } else {
            alert(A + " es menor");
        }
    }
}