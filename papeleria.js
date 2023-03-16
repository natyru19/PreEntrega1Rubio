//Se solicita ingresar el nombre al usuario
let nombreUsuario = prompt('Ingrese su nombre');

//Se utiliza una estructura if, si el usuario ingresa el nombre, se da un saludo personalizado, en caso que no lo ingrese, se da un saludo genérico
if(nombreUsuario != ''){
    alert('Bienvenido/a '+ nombreUsuario);
}else{
    alert('Bienvenidos');
 }

//Se crea la variable totalCompra
let totalCompra = 0;

let consulta = prompt('Quieres realizar una compra? (s-si / n-no)');

//Se utiliza el ciclo por condición while
while(consulta == 's' || consulta == 'S'){    
    let producto = prompt('Los productos disponibles son los siguientes:\n1) Agenda con espiral - $ 510\n2) Bolígrafo pack x4 colores - $ 190\n3) Calculadora científica - $ 935\n4) Organizador chico en metal - $ 660\n5) Carpeta con elástico - $ 180\nFavor ingrese la opción deseada (del 1 al 5): ');

    //Se utiliza un condicional switch
    switch(producto){
        case '1':
            alert('Se ha agregado el producto: Agenda con espiral a $ 510');
            //Se invoca a la función
            incrementarTotal(510);
            break;
        case '2':
            alert('Se ha agregado el producto: Bolígrafo pack x4 colores a $ 190');
            incrementarTotal(190);
            break;
        case '3':
            alert('Se ha agregado el producto: Calculadora científica a $ 935');
            incrementarTotal(935);
            break;   
        case '4':
            alert('Se ha agregado el producto: Organizador chico en metal a $ 660');
            incrementarTotal(660);
            break; 
        case '5':
            alert('Se ha agregado el producto: Carpeta con elástico a $ 180');
            incrementarTotal(180);
            break;
        default:
            alert('No se ha seleccionado ningún producto.');
            break;
    }
    
    consulta = prompt('Quieres comprar otro producto? (s-si / n-no)');

}

alert('El total de la compra es de $ ' + totalCompra + '.' +' ' + 'Gracias por preferirnos!');



//Se crea una función con parámetros
function incrementarTotal(precio){
    totalCompra = totalCompra + precio;
    alert('Hasta el momento la compra es de $'+ totalCompra);
}
