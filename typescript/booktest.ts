import { book } from "./book";
let libro=new book("Don quijote",235,"ASDFG","Sergio","Sergio Arroyo");
console.log(libro.tostring());
//modificacion todos los get cambio de console a return
console.log(libro.getauthor());
 
libro.geteditorial();
libro.getnpages();
libro.gettitle();
libro.gettisbn();
libro.setauthor("jose");
libro.setnpages(23);
libro.setisbn("qwert");
libro.settitle("harry potter");
libro.seteditorial("santillana");
console.log(libro.tostring());
