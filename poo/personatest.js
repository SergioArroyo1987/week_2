const persona=require('./persona');
let sergio=new persona("sergio","arroyo","ramos",1987);
console.log(sergio);
console.log(sergio.imc(95,1.70));
console.log(sergio.printall(sergio));
console.log(sergio.printhobbies());