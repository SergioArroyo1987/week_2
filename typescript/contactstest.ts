import { contacts } from "./contacts";
import { person } from "./persona";
let persona=new person("sergio",35,"arroyo");
let persona1=new person("maria",345,"arroyo");
let persona2=new person("feliè",10,"arroyo");
let contactos=new contacts();
contactos.people=[persona,persona1,persona2];


contactos.printcalendar();