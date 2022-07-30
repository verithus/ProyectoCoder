let nombrenuevo = prompt ("Ingrese su nombre")
alert ("Bienvenido " + nombrenuevo);

let entrada = prompt ("Ingrese producto a buscar");
while (entrada != "ESC"){
    switch (entrada){
        case "Florero":
            alert ("Florero:\n cantidad: 5\n Color: Violeta, Blanco, Rojo \n Precio: $3000");
            break;
        case "Cuadro":
            alert ("Cuadro Small: \n Tamaño: 12x20 cm\n Color de marco: Negro\n Precio: $950");
            break;
        default:
            alert ("Busqueda sin resultados")
            break;
    }
    entrada = prompt("Ingrese producto a buscar")
}
