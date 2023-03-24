import { library } from "./library";
import { book } from "./book";
let libro=new book("Don quijote",235,"ASDFG","Sergio","Sergio Arroyo");
let libro1=new book("Poemas",100,"ASDFG","Antonio","santillana");
let libro2=new book("Historia de Espana",400,"ASDFG","Sergio","Sergio Arroyo");
let array:book[];
array=[libro,libro1,libro2];
let libreria=new library(array,"cervantes","Torredelcampo");
console.log( libreria.tostring());
console.log(libreria.getnumberofbooks());
let autor:book[]=libreria.findbyauthor("Sergio");
console.log(autor);


 
