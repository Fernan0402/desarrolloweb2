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

//ordenar el array de carrito
console.log("IMPRESION ORDENADO POR PRECIO");
// se crea una copia del carrito utlizando el metodo slice() y se ordena por el metodo sort()
let carritoOrdenadoPorPrecio = carrito.slice().sort((a,b) =>a.precio - b.precio);
console.log(carritoOrdenadoPorPrecio);

console.log("IMPRESION ORDENADO POR NOMBRE");
let carritoOrdenadoPorNombre = carrito.slice().sort((a,b)=> a.nombre.localeCompare(b.nombre));
console.log(carritoOrdenadoPorNombre)

