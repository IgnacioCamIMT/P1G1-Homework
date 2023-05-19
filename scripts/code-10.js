function mayorTresNumeros() {
    var A = parseInt(prompt("Ingrese A:", 10))
    var B = parseInt(prompt("Ingrese B:", 9))
    var C = parseInt(prompt("Ingrese C:", 15))

    if (A > B) {
        if (A > C) {
            alert(A + " es el mayor.")
        } else {
            alert(C + " es el mayor.")
        }
    } else {
        if (B > C) {
            alert(B + " es el mayor.")
        } else {
            alert(C + " es el mayor.")
        }
    }
}