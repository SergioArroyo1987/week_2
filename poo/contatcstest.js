const contatcs = require("./contatcs");
const persona=require("./persona");

let contactos=new contatcs();
let persona1=new persona("Sergio","Arroyo","ramos",1987);
let persona2=new persona("irene","rubio","jimenez",1990);
let persona3=new persona("manuel","Arroyo","ramos",1982);
contactos.introducir(persona1);
contactos.introducir(persona2);
contactos.introducir(persona3);
console.log(contactos.arraypersonas.length);
contactos.printpersonas(contactos.arraypersonas);