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

let carrito=[{nombre:'leche',cantidad:1,precio:7.50},
             {nombre:'carne',cantidad:2,precio:18},
             {nombre:'fideo',cantidad:1,precio:4},
             {nombre:'papa',cantidad:3,precio:5}];

console.log(carrito);
item={nombre:'arroz',cantidad:5,precio:6};
carrito.push(item);