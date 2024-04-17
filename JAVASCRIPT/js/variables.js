/*
const INTERVALO=10;

console.log("Intervalo sera de " + INTERVALO + " minutos");
//INTERVVALO=15;// NO se permite por ser constante

var intervalo=15;
console.log("Intervalo sera de " + INTERVALO + " minutos con una variable");
intervalo=20;
console.log("Intervalo de " + INTERVALO + " minutos con una variable modificada");
*/
/*
let varb=true;
let varn=3.1415592;
let vars="Texto string";
let var1;

console.log("Para la variable varb="+varb+" con el tipo de dato="+typeof varb);
console.log("Para la variable varn="+varn+" con el tipo de dato="+typeof varn);
console.log("Para la variable vars="+vars+" con el tipo de dato="+typeof vars);
console.log("Para la variable var1="+var1+" con el tipo de dato="+typeof var1);


var1=vars;
console.log("Para la variable var1="+var1+" con el tipo de dato="+typeof var1);
*/
//Realizar las siguientes conversiones implicitas.

let var1=15.25;
let var2=6;
let var3=true;
let var4="100";
let varx;
/*
varx=var1;
varx=var2;
console.log("Para la variable varx="+varx+" con el tipo de dato="+typeof varx);
varx=var3
console.log("Para la variable var2="+varx+" con el tipo de dato="+typeof varx);
varx=var4
console.log("Para la variable var3="+varx+" con el tipo de dato="+typeof varx);
*/
varx=var1+var2;//Denmtro de implicitas
console.log("Para la variable var1="+varx+" con el tipo de dato="+typeof varx);

varx=Boolean(var2)+var3;//Analizarlo
console.log("Para la variable var1="+varx+" con el tipo de dato="+typeof varx);

varx=var1+ Number(var4);// Buscar una funcion de conversion
console.log("Para la variable var1="+varx+" con el tipo de dato="+typeof varx);
