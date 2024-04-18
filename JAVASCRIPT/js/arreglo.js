//Compras a un supermercado
/*
let carrito=[   "leche",1,
                "carne",2,
                "papa",3,
                "fideos",1];

console.log("Item:"+carrito[0]);
console.log("Cantidad:"+carrito[1]);
console.log("Item:"+carrito[2]);
console.log("Cantidad:"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Cantidad:"+carrito[5]);
console.log("Item:"+carrito[6]);
console.log("Cantidad:"+carrito[7]);
console.log("IMPRESION COMPLETA");
console.log(carrito);
//como se adiciona un nuevo ITEM Y CANTIDAD

carrito.push("manzanas",4);
*/

/*let item ={nombre:'leche',cantidad:1};
console.log("Item: "+item.nombre);
console.log("Cantidad: "+item.cantidad);

let carrito=[{nombre:'leche',cantidad:1},
             {nombre:'carne',cantidad:2},
             {nombre:'fideo',cantidad:1},
             {nombre:'papa',cantidad:3}];
console.log(carrito);
item={nombre:'arroz',cantidad:5};
carrito.push(item);
console.log(carrito);*/
//imprimir con Etiquetas
//Adicionar un nuevo registro
let item ={nombre:'leche',cantidad:1,precio:7.5};

console.log("item"+item.nombre);
console.log("cantidad"+item.cantidad);
console.log("precio"+item.precio+"Bs");
console.log("total"+item.cantidad*item.precio+"Bs");

let carrito=[{nombre:'leche',cantidad:1,precio:7.5},
             {nombre:'carne',cantidad:2,precio:30.5},
             {nombre:'fideo',cantidad:1,precio:5.5},
             {nombre:'papa',cantidad:3,precio:20.5}];

console.log(carrito);
item={nombre:'arroz',cantidad:2,precio:30.5};
carrito.push(item);


//funciones en javascript como ordenar un array normal y un array con estructuras
//ordenar un array de carrito
//ordenar un array lineal
// Array ordenado utilizando el metodo sort()
/*
let numeros = [4, 2, 5, 1, 3];//Declaracion del array llamado numero
numeros.sort((a, b) => a - b);// El metodo sort() se utiliza para ordenar los elementos 
console.log(numeros);
*/
console.log("IMPRESION ORDENADO POR PRECIO");
let carritoOrdenadoPorPrecio = carrito.slice().sort((a,b) =>a.precio - b.precio);
console.log(carritoOrdenadoPorPrecio);

console.log("IMPRESION ORDENADO POR NOMBRE");
let carritoOrdenadoPorNombre = carrito.slice().sort((a,b)=> a.nombre.localeCompare(b.nombre));
console.log(carritoOrdenadoPorNombre)


